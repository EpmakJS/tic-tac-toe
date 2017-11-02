class TicTacToe {
    constructor() {

        this.player = 'x';
        this.matrix = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];

    }

    getCurrentPlayerSymbol() {
        return this.player;
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.matrix[rowIndex][columnIndex] === null) {
            this.matrix[rowIndex][columnIndex] = this.player;

            this.getWinner();

            if (this.player === 'x'){
                this.player = 'o';
            } else {
                this.player = 'x';
            }
        }
        return this;
    }

    isFinished() {
        if(this.getWinner() || this.noMoreTurns() || this.isDraw()) 
            return true;
        else return false;
    }

    getWinner() {
         let i = 0;

        while (i < 3) {
            if (this.matrix[0][i] === this.matrix[1][i] && 
                this.matrix[0][i] === this.matrix[2][i]) {
                return this.matrix[0][i];
            } 

            if (this.matrix[i][0] === this.matrix[i][1] && 
                this.matrix[i][0] === this.matrix[i][2]) {
                return this.matrix[i][0];
            }
            i++;
        }

        if (this.matrix[0][0] === this.matrix[1][1] &&
            this.matrix[0][0] === this.matrix[2][2]) {
            return this.matrix[0][0];
        }

        if (this.matrix[2][0] === this.matrix[1][1] &&
            this.matrix[2][0] === this.matrix[0][2]) {
            return this.matrix[2][0];
        }
        return null;
    }

    noMoreTurns() {
        for(var i = 0; i<3; i++){
            for(var j = 0; j<3; j++){
                if(this.matrix[i][j] === null) {
                    return false;   
                }
            }
        }
        return true;
    }

    isDraw() {
        if(this.noMoreTurns() && !this.getWinner()) 
            return true;
        else return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
