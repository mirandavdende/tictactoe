const Pieces = {
  Clear:  0,
  Cross:  1,
  Circle: 2
}

class Board {

  constructor(board) {
    this._board = [
      [ Pieces.Clear, Pieces.Clear, Pieces.Clear ],
      [ Pieces.Clear, Pieces.Clear, Pieces.Clear ],
      [ Pieces.Clear, Pieces.Clear, Pieces.Clear ]
    ];
  }

  get(x, y) {
    // ...
  }

  set(x, y, piece) {
    if ( !this._validXCoordinate(x) ) throw "Invalid X coordinate";
    if ( !this._validYCoordinate(y) ) throw "Invalid Y coordinate";
    if ( !this._validPiece(piece)  ) throw "Invalid piece";

    this._board[y][x] = piece;
  }

  toString() {
    return JSON.stringify(this._board);
  }

  getWidth() {
    return this._board[0].length;
  }

  getHeight() {
    return this._board.length;
  }

  _validPiece(piece) {
    return Object.values(Pieces).includes(piece);
  }

  _validXCoordinate(coord) {
    return coord > -1 && coord < this.getWidth();
  }

  _validYCoordinate(coord) {
    // ...
  }

}

module.exports = {
  Pieces,
  Board
};
