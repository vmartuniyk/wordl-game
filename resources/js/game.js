import Tile from "./Tile";
import words from './words';

export default {
        guessesAllow: 3,
        theWord: 'cat',
        currentRowIndex: 0,
        message: '',
        state: 'active', //active and complete
        errors: false,

        letters: [
            'QWERTYUIOP'.split(''),
            'ASDFGHJKL'.split(''),
            ['Enter',...'ZXCVBNM'.split(''),'Backspace'],
        ],


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
                return Array.from({ length: this.theWord.length }, (item,index) => new Tile(index));
            });
        },

        matchingTileForKey(key){
           return this.board
               .flat()
               .filter((tile) => tile.status)
               .sort((t1,t2) =>  t2.status === "correct")
               .find((tile) => tile.letter === key.toLowerCase());
        },
        onKeyPress(key){
            this.message = '';
            this.errors = false;

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
            if(! words.includes(this.currentGuess.toUpperCase())){
                this.errors = true;
                return this.message = 'Invalid word';
            }
            //update tile colors
            Tile.updateStatusesForRow(this.currentRow,this.theWord);

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
