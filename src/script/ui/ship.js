import settings from "../lib/settings";
import { randint } from "../lib/random";

export function placeShip(event, index) {
    let target = event.target;
    if (!target.classList.contains("ship-cell"))
        return false;
    const col = parseInt(target.dataset.col);
    const length = settings.shipLengths[index];
    if (length + col > settings.NCOLS || isOverlapping(length, target))
        return false;
    const color = settings.humanShipColor;
    drawShip(col, length, target, index, color);
    return true;
}

export function aiShipPlacement(board) {
    let shipIndex = 0;
    while (shipIndex < settings.totalShip) {
        let row = randint(0, settings.NROWS);
        let col = randint(0, settings.NCOLS);
        const length = settings.shipLengths[shipIndex];
        if (col + length >= settings.NCOLS)
            col = Math.abs(length - col);
        const shipCell = getShiptAt(board, row, col);
        if (isOverlapping(length, shipCell))
            continue;
        const color = settings.aiShipColor;
        drawShip(col, length, shipCell, shipIndex, color);
        shipIndex++;
    }
}

function drawShip(col, length, target, index, color) {
    for (let i = col; i < col + length; i++) {
        target.dataset.isship = '1';
        target.dataset.index = index;
        target.style.backgroundColor = color;
        target = target.nextElementSibling;
        if (target === null)
            return;
    }
}

function isOverlapping(length, target) {
    let currentCell = target;
    let i = 0;
    while (i < length) {
        if (currentCell.dataset.isship === '1') {
            return true;
        }
        currentCell = currentCell.nextElementSibling;
        if (!currentCell || !currentCell.dataset.col) {
            break;
        }
        i++;
    }
    return false;
}

export function getShiptAt(board, row, col) {
    const children = board.children;
    for (let i = 0; i < children.length; i++) {
        const dataRow = parseInt(children[i].dataset.row);
        const dataCol = parseInt(children[i].dataset.col);
        if (dataRow === row && dataCol === col)
            return children[i]; 
    }
    return null;
}

export function getFirstShipAtRow(board, row) {
    const children = board.children;
    for (let i = 0; i < children.length; i++) {
        const dataRow = parseInt(children[i].dataset.row);
        if (children[i].dataset.isship && dataRow === row)
            return children[i];
    }
    return null;
}