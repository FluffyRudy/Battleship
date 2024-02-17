import settings from "../lib/settings";
import "../../style/gameboard.css";

export function createBoard() {
    const container = document.createElement("div");
    container.classList.add("board");

    for (let i = 0; i < settings.NROWS; i++) {
        createCells(settings.NCOLS).forEach(shipCell => {
            shipCell.dataset.row = i;
            container.appendChild(shipCell);
        })
    }

    return container;
}

function createCells(n) {
    return new Array(n).fill(null).map((elem, index)=> {
        const cell = document.createElement("div");
        cell.classList.add("ship-cell");
        cell.dataset.isvisited = '0';
        cell.dataset.col = index;
        return cell;
    })
}
