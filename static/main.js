var io = io()

const pot = document.getElementById("pot")
const playerCards = document.getElementById("player-cards")
const dealerCards = document.getElementById("dealer-cards")
const playerMoney = document.getElementById("player-money")
const players = document.getElementById("players")

const playerButtons = document.getElementById("player-buttons")
const checkCallBtn = document.getElementById("check-call-btn")
const foldBtn = document.getElementById("fold-btn")
const betBtn = document.getElementById("bet-btn")

var playerList = []
var myMoney = 1000
var lastPot = 0

function reset(){
    pot.innerText = 'Pot: $0'
    playerCards.innerHTML = ''
    dealerCards.innerHTML = ''
    playerMoney.innerText = `\$${myMoney}`
    
    playerButtons.style.display = 'none'
    checkCallBtn.innerText = 'Check'
}

reset()

io.on('connect', ()=>{console.info(`Socket connected, id: ${io.id}`)})