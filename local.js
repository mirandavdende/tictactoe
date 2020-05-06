#!/usr/bin/env node

const { Pieces, Board } = require('./classes');

const board = new Board();

console.log("Hello world!");

// Set the piece at coordinates (0,1) to be a cross
board.set(0, 1, Pieces.Cross);

// Show what's in memory
console.log(board.toString());

// Get the piece at coordinates (1,2)
console.log(board.get(1, 2));
