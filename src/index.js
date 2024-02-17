import { createBoard } from "./script/ui/gameboard";
import { placeShip } from "./script/ui/ship";
import { aiShipPlacement } from "./script/ui/ship";
import { attack } from "./script/ui/player";
import { aiAttack } from "./script/ui/player";
import { isShipDistroyed } from "./script/ui/player";
import settings from "./script/lib/settings";

const humanBoard = createBoard();
const aiBoard    = createBoard();
let shipIndex    = 0;
let gameFinish   = false;
const humanActivity = { score: 0 }
const aiActivity = {
    prevAttackCell: null,
    score: 0
}

document.body.appendChild(humanBoard);
document.body.appendChild(aiBoard);

humanBoard.addEventListener('click', (e) => {
    if (shipIndex < settings.totalShip) {
        if (placeShip(e, shipIndex))
            shipIndex++;
    }
});

aiBoard.addEventListener('click', (e) => {
    if (shipIndex < settings.totalShip) {
        alert("Place ships");
        return;
    }

    if (gameFinish)
        return;

    if (attack(e)) {
        isShipDistroyed(e.target, aiBoard) ? humanActivity.score++ : 0;
        const _aiAttack = aiAttack(humanBoard, aiActivity);
        isShipDistroyed(_aiAttack[1], humanBoard) ? aiActivity.score++ : 0;
    }

    if (humanActivity.score === settings.totalShip) {
        setTimeout(() => {
            alert("Human won");
            gameFinish = true;
            location.reload();
        }, 1300);
    }
    if (aiActivity.score === settings.totalShip) {
        setTimeout(() => {
            alert("Computer won");
            gameFinish = true;
            location.reload();
        }, 1300);
    }
});

window.onload = () => {
    aiShipPlacement(aiBoard);
}