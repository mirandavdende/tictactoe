#!/usr/bin/env node

const { Pieces, Board, Cursor, View } = require('./classes');

const board  = new Board();
const cursor = new Cursor(board);
const view   = new View();

// Set the piece at coordinates (0,1) to be a cross
board.set(0, 1, Pieces.Cross);

// Show what's in memory
view.render(board, cursor);
