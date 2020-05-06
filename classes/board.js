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
    return this._board[y][x]
  }

  set(x, y, piece) {
    if ( !this._validCoordinate(x) ) throw "Invalid X coordinate";
    if ( !this._validCoordinate(y) ) throw "Invalid Y coordinate";
    if ( !this._validPiece(piece)  ) throw "Invalid piece";

    this._board[y][x] = piece;
  }

  toString() {
    return JSON.stringify(this._board);
  }

  _validPiece(piece) {
    return Object.values(Pieces).includes(piece);
  }

  _validCoordinate(coord) {
    return [ 0, 1, 2 ].includes(coord);
  }

}

module.exports = {
  Pieces,
  Board
};
