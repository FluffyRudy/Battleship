import { randint } from "../lib/random";
import settings from "../lib/settings";

export function attack(event) {
    let target = event.target;
    if (!target.classList.contains("ship-cell"))
        return false;
    return markAttacks(target);
}

export function isShipDistroyed(target, board) {
    const index = target.dataset.index;
    if (!index)
        return false;
    const ship = board.querySelectorAll(`[data-index="${index}"]`);
    return [...ship].every(elem => elem.dataset.isvisited === '1');
}

export function aiAttack(board, aiActivity) {
    const prevAttackCell = aiActivity.prevAttackCell;
    if (prevAttackCell && prevAttackCell.dataset.isship) {
        const possibleCells = getAdjacentCells(board, prevAttackCell);
        if (possibleCells.length > 0) {
            const target = possibleCells[randint(0, possibleCells.length)];
            aiActivity.prevAttackCell = target;
            return [markAttacks(target), target];
        }
    }
    const avilableCells = [...board.children].filter(elem => {
        return elem.dataset.isvisited === '0';
    });
    const target = avilableCells[randint(0, avilableCells.length)];
    aiActivity.prevAttackCell = target;
    return [markAttacks(target), target];
}

function markAttacks(target) {
    const isVisited = target.dataset['isvisited'];
    if (target.dataset.isship && isVisited === '0') {
        target.style.backgroundColor = "red";
        target.dataset['isvisited'] = '1';
        return true;
    }
    else if (isVisited === '0') {
        target.style.backgroundColor = "lime";
        target.dataset['isvisited'] = '1';
        return true;
    }
    return false;
}

function getAdjacentCells(board, target) {
    const row = parseInt(target.dataset.row);
    const col = parseInt(target.dataset.col);
    const directions = [
        [-1, -1], [-1, 0],[-1, 1],[0, -1],
        [0, 1], [1, -1],[1, 0], [1, 1]
    ];
    const possibleCells = [];

    for (let dir of directions) {
        const newRow = row + dir[0];
        const newCol = col + dir[1];
        if (!isValidAdjacentPos(newRow, newCol))
            continue;
        const tempCell = board.querySelector(
            `[data-row="${newRow}"][data-col="${newCol}"]`
        )
        if (tempCell.dataset.isvisited === '0' && tempCell.dataset.isship)
            possibleCells.push(tempCell);
    }

    return possibleCells;
}

function isValidAdjacentPos(row, col) {
    return (
        row >= 0 && col < settings.NROWS &&
        col >= 0 && col < settings.NCOLS
    )
}