const { Pieces } = require('./board');

class Result {

  calculate(board) {
    const winner = this._winner(board);

    if ( winner == Pieces.Cross )
      return "Crosses won the game!";

    if ( winner == Pieces.Circle )
      return "Circles won the game!";

    if ( this._placesLeft(board) )
      return false;

    return "It's a tie!";
  }

  _placesLeft(board) {
    for ( let y = 0; y < 3; y++ ) {
      for ( let x = 0; x < 3; x++ ) {
        if ( /* ... */ ) return true;
      }
    }
    return false;
  }

  _winner(board) {
    // Any rows the same?
    for ( let y = 0; y < 2; y++ ) {
      if ( board.get(0, y) == board.get(1, y) &&
           board.get(1, y) == board.get(2, y) )
        return board.get(0, y);
    }

    // Any columns the same?
    for ( let x = 0; x < 2; x++ ) {
      if ( board.get(x, 0) == board.get(x, 1) &&
           board.get(x, 1) == board.get(x, 2) )
        return board.get(x, 0);
    }

    // Right diagonal the same?
    if ( board.get(0, 0) == board.get(1, 1) &&
         board.get(1, 1) == board.get(2, 2) )
      return board.get(0, 0);

    // Left diagonal the same?
    // ...

    return false;
  }


}

module.exports = {
  Result
};
