const { Pieces } = require('./board');

class View {

  constructor() {}

  render(board, cursor) {
    console.clear();
    console.log("  ~-= Tic Tac Toe =-~\n");

    let horizonalDivider = '───';
    for ( let x = 0; x < board.getWidth() - 1; x++ ) {
      horizonalDivider = horizonalDivider + '┼───';
    }

    let output = '';
    for ( let y = 0; y < board.getHeight(); y++ ) {
      for ( let x = 0; x < board.getWidth(); x++ ) {
        if ( cursor.x() == x && cursor.y() == y )
          // Render piece and cursor
          output = output + '[' + this._getPiece(board.get(x,y)) + ']';
        else
          // Render just the piece
          output = output + ' ' + this._getPiece(board.get(x,y)) + ' ';

        if ( x < board.getWidth() - 1 )
          output = output + '│';
      }

      if ( y < board.getHeight() - 1 )
        output = output + '\n' + horizonalDivider + '\n';
    }

    console.log(output);
  }

  _getPiece(piece) {
    switch(piece) {
      case Pieces.Clear:
        return ' ';
      case Pieces.Cross:
        return '❌';
      case Pieces.Circle:
        return '🔴';
    }

    throw "Can't render unknown piece";
  }

}

module.exports = {
  View
};
