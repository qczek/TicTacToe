const player1Turn = "x";
const player2Turn = "o";
let player1Sum = 0
let player2Sum = 0
let places = document.querySelectorAll('span');
let numberPlaceX = [];
let numberPlaceY = [];



function containsObj(tab, taby) {
    if (tab.includes('1') && tab.includes('2') && tab.includes('3') || tab.includes('4') && tab.includes('5') && tab.includes('6') || tab.includes('7') && tab.includes('8') && tab.includes('9') || tab.includes('1') && tab.includes('4') && tab.includes('7') || tab.includes('2') && tab.includes('5') && tab.includes('8') || tab.includes('3') && tab.includes('6') && tab.includes('9') ||
        tab.includes('1') && tab.includes('5') && tab.includes('9') || tab.includes('3') && tab.includes('5') && tab.includes('7')) {
        document.querySelector('h2').textContent = "Koniec"

        document.querySelector('h1').textContent = 'Player X wygrał'

    } else if (taby.includes('1') && taby.includes('2') && taby.includes('3') || taby.includes('4') && taby.includes('5') && taby.includes('6') || taby.includes('7') && taby.includes('8') && taby.includes('9') || taby.includes('1') && taby.includes('4') && taby.includes('7') || taby.includes('2') && taby.includes('5') && taby.includes('8') || taby.includes('3') && taby.includes('6') && taby.includes('9') ||
        taby.includes('1') && taby.includes('5') && taby.includes('9') || taby.includes('3') && taby.includes('5') && taby.includes('7')) {
        document.querySelector('h2').textContent = "Koniec"

        document.querySelector('h1').textContent = 'Player O wygrał'

    } else if (player1Sum + player2Sum == 9) {
        document.querySelector('h2').textContent = "Koniec"

        document.querySelector('h1').textContent = 'remis'
    }

}


function placeSelection() {


    if ((this.textContent == 'x') || (this.textContent == "o")) {
        console.log('zajęte')
    } else {
        if (player1Sum == player2Sum) {
            this.textContent = player1Turn;
            player1Sum++;
            numberPlaceX.push(this.dataset.option)
            document.querySelector('h2').textContent = "Teraz PlayerO"
        }
        else {
            this.textContent = player2Turn;
            player2Sum++;
            numberPlaceY.push(this.dataset.option)
            document.querySelector('h2').textContent = "Teraz PlayerX"
        }
    }
    containsObj(numberPlaceX, numberPlaceY)

}





places.forEach(place => place.addEventListener('click', placeSelection));