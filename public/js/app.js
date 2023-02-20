(()=>{"use strict";var t,e={12:()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,n(o.key),o)}}function r(t,e,r){return(e=n(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(e){var r=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,r||"default");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"===t(r)?r:String(r)}var o=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r(this,"letter",""),r(this,"status","")}var n,o,i;return n=t,(o=[{key:"updateStatus",value:function(t,e){this.status=e.includes(this.letter)?"present":"absent",t.indexOf(this.letter)===e.indexOf(this.letter)&&(this.status="correct")}},{key:"fill",value:function(t){this.letter=t.toLowerCase()}},{key:"empty",value:function(){this.letter=""}}])&&e(n.prototype,o),i&&e(n,i),Object.defineProperty(n,"prototype",{writable:!1}),t}();function i(t){return function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||a(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=a(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,s=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return u=t.done,t},e:function(t){s=!0,i=t},f:function(){try{u||null==r.return||r.return()}finally{if(s)throw i}}}}function a(t,e){if(t){if("string"==typeof t)return s(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(t,e):void 0}}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}const l={guessesAllow:3,theWord:"cat",currentRowIndex:0,message:"",state:"active",get remainingGueses(){return this.guessesAllow-this.currentRowIndex-1},get currentRow(){return this.board[this.currentRowIndex]},get currentGuess(){return this.currentRow.map((function(t){return t.letter})).join("")},init:function(){var t=this;this.board=Array.from({length:this.guessesAllow},(function(){return Array.from({length:t.theWord.length},(function(){return new o}))}))},onKeyPress:function(t){this.message="",/^[A-z]$/.test(t)?this.fillTile(t):"Backspace"===t?this.emptyTile():"Enter"===t&&this.submitGuess()},fillTile:function(t){var e,r=u(this.currentRow);try{for(r.s();!(e=r.n()).done;){var n=e.value;if(!n.letter){n.fill(t);break}}}catch(t){r.e(t)}finally{r.f()}},emptyTile:function(){var t,e=u(i(this.currentRow).reverse());try{for(e.s();!(t=e.n()).done;){var r=t.value;if(r.letter){r.empty();break}}}catch(t){e.e(t)}finally{e.f()}},submitGuess:function(){if(!(this.currentGuess.length<this.theWord.length)){var t,e=u(this.currentRow);try{for(e.s();!(t=e.n()).done;){t.value.updateStatus(this.currentGuess,this.theWord)}}catch(t){e.e(t)}finally{e.f()}return this.currentGuess===this.theWord?(this.state="complete",this.message="You win!"):0===this.remainingGueses?(this.state="complete",this.message="Game over. You lose"):(this.currentRowIndex++,this.message="Incorrect")}}};document.addEventListener("alpine:init",(function(){Alpine.data("game",(function(){return l}))}))},662:()=>{}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={exports:{}};return e[t](i,i.exports,n),i.exports}n.m=e,t=[],n.O=(e,r,o,i)=>{if(!r){var u=1/0;for(f=0;f<t.length;f++){for(var[r,o,i]=t[f],a=!0,s=0;s<r.length;s++)(!1&i||u>=i)&&Object.keys(n.O).every((t=>n.O[t](r[s])))?r.splice(s--,1):(a=!1,i<u&&(u=i));if(a){t.splice(f--,1);var l=o();void 0!==l&&(e=l)}}return e}i=i||0;for(var f=t.length;f>0&&t[f-1][2]>i;f--)t[f]=t[f-1];t[f]=[r,o,i]},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={773:0,170:0};n.O.j=e=>0===t[e];var e=(e,r)=>{var o,i,[u,a,s]=r,l=0;if(u.some((e=>0!==t[e]))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(s)var f=s(n)}for(e&&e(r);l<u.length;l++)i=u[l],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(f)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})(),n.O(void 0,[170],(()=>n(12)));var o=n.O(void 0,[170],(()=>n(662)));o=n.O(o)})();