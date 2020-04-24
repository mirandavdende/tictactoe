class Cursor {

  constructor(board) {
    this._board = board;
    this._position = {
      x: 0,
      y: 0
    }
  }

  up() {
    if ( this._position.y > 0 )
      this._position.y = this._position.y - 1;
  }

  down() {
    if ( this._position.y < board.getHeight() - 1 )
      this._position.y = this._position.y + 1;
  }

  left() {
    // ...
  }

  right() {
    // ...
  }

  x() {
    return this._position.x;
  }

  y() {
    return this._position.y;
  }

}

module.exports = {
  Cursor
};
