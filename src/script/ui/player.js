import { getFirstShipAtRow } from "./ship";

export function attack(board, event) {
    let target = event.target;
    if (!target.classList.contains("ship-cell"))
        return;
    const isVisited = target.dataset['isvisited'];
    if (target.dataset.isship && isVisited === '0') {
        target.style.backgroundColor = "red";
        target.dataset['isvisited'] = '1';
    }
    else if (isVisited === '0') {
        target.style.backgroundColor = "lime";
        target.dataset['isvisited'] = '1';
    }
}

function isShipDistroyed(target) {
    const index = target.dataset.index;
    const ship = document.querySelectorAll(`[data-index="${index}"]`);
    return [...ship].every(elem => elem.dataset.isvisited === '1');
}