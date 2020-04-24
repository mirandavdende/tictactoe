#!/usr/bin/env node

const { Pieces, Board, Cursor, View, Input } = require('./classes');

const board  = new Board();
const cursor = new Cursor(board);
const view   = new View();
const input  = new Input();

let turn = Pieces.Cross;

input.addKeyListener(key => {
  switch(key) {
    case 'up':
      return cursor.up();
    case 'down':
      return cursor.down();
    case 'left':
      // ..
    case 'right':
      // ..

    case 'enter':
      const pieceUnderCursor = board.get(cursor.x(), cursor.y());
      if ( pieceUnderCursor == Pieces.Clear ) {
        board.set(cursor.x(), cursor.y(), turn);

        // ... switch turn..?
      }
      return;
  }
});

setInterval(() => {
  view.render(board, cursor);
}, 33);
