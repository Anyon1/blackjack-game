let player = {
    name: "Tim",
    chips: 200,
    cards : [],
    calculateCards : function() {
        return this.cards.reduce( (previousValue, currentValue)=>
        previousValue + currentValue, 0)
    }
}
let cards = [{
    name : "2",
    value : 2
},
{
    name : "3",
    value : 3
},
{
    name : "4",
    value : 4
},
{
    name : "5",
    value : 5
},
{
    name : "6",
    value : 6
},
{
    name : "7",
    value : 7
},
{
    name : "8",
    value : 8
},
{
    name : "9",
    value : 9
},
{
    name : "10",
    value : 10
},
{
    name : "Ass",
    value : 11
},
{
    name : "Bube",
    value : 10
},
{
    name : "König",
    value : 10
},
{
    name : "Dame",
    value : 10
}]
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    return cards[randomNumber].value
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    player.cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    let sum = player.calculateCards()
    cardsEl.textContent = "Cards: "
 

    player.cards.map((card) => {
        cardsEl.textContent += card + " "
    })
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        player.cards.push(card)
        renderGame()        
    }
}
