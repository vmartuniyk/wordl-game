import Tile from "./Tile";

export default {
        guessesAllow: 3,
        theWord: 'cat',
        currentRowIndex: 0,
        message: '',
        state: 'active', //active and complete
        get remainingGueses(){
           return  this.guessesAllow - this.currentRowIndex - 1
        },

        get currentRow(){
            return this.board[this.currentRowIndex];
        },

        get currentGuess(){
           return  this.currentRow.map(tile => tile.letter).join('');
        },

        init() {
            this.board = Array.from({ length: this.guessesAllow }, () => {
                return Array.from({ length: this.theWord.length }, () => new Tile);
            });
        },
        onKeyPress(key){
            this.message = '';

            if(/^[A-z]$/.test(key)){
                this.fillTile(key);
            }else if (key === 'Backspace'){
                this.emptyTile();
            }else if (key === 'Enter'){
                this.submitGuess();
            }

        },
        fillTile(key) {
            for(let tile of this.currentRow){
                if(! tile.letter){
                    tile.fill(key);

                    break;
                }

            }
        },
        emptyTile() {
            for(let tile of [...this.currentRow].reverse()){
                if(tile.letter){
                    tile.empty();

                    break;
                }

            }
        },

        submitGuess(){
            if(this.currentGuess.length < this.theWord.length){
                return;
            }
            //update tile colors
            for (let tile of this.currentRow){
                tile.updateStatus(this.currentGuess, this.theWord);
            }

            if(this.currentGuess === this.theWord){
                this.state = 'complete';
                return this.message = 'You win!';
            }
            if (this.remainingGueses === 0){
                this.state = 'complete';
                return this.message = 'Game over. You lose';
            }
            this.currentRowIndex++;
            return this.message = 'Incorrect';
        }
}
