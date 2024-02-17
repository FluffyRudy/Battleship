import { createBoard } from "./script/ui/gameboard";
import { placeShip } from "./script/ui/ship";
import { aiShipPlacement } from "./script/ui/ship";
import { attack } from "./script/ui/player";
import settings from "./script/lib/settings";

const humanBoard = createBoard();
const aiBoard    = createBoard();
let shipIndex    = 0; 

document.body.appendChild(humanBoard);
document.body.appendChild(aiBoard);

humanBoard.addEventListener('click', (e) => {
    if (shipIndex < settings.totalShip)
        placeShip(e, shipIndex++);

});

aiBoard.addEventListener('click', (e) => {
    attack(aiBoard, e);
});

window.onload = () => {
    aiShipPlacement(aiBoard);
}