//Codigo Javascript BlackJack



let btHit = document.querySelector("#hit")
let btStand = document.querySelector("#stand")
let btDeal = document.getElementById("deal")

let blackjackGame = {
    "you": {"scoreSpan": "#yourPoints", "div": "#yourBox", "score": 0},
    "dealer": {"scoreSpan": "#dealerPoints", "div":"#croupierBox", "score":0},
    "cards": ["2","3","4","5","6","7","8","9","10","J","Q","K","A"]
}

const YOU = blackjackGame["you"]
const DEALER = blackjackGame["dealer"]

//audios
const hitSound = new Audio("/sounds/swish.m4a")

let showCard = (jugador) =>{
    let carta = document.createElement("img")

    let numeroRandom = Math.floor(Math.random() * blackjackGame["cards"].length)

    let cartaRandom = blackjackGame["cards"][numeroRandom]

    carta.src = `/images/${cartaRandom}.png`
    carta.setAttribute("id","cartaYou")

    let box = document.querySelector(jugador.div)

    box.appendChild(carta)
    
    hitSound.play()
}

let dealMen = () =>{
    let myBox = document.querySelector(YOU.div)
    let cartasArray = myBox.querySelectorAll("img")

    let dealerCards = document.querySelector(DEALER.div).querySelectorAll("img")

    for(let x = 0; x < dealerCards.length;x++){
        dealerCards[x].remove()
    }

    for(let i = 0; i < cartasArray.length; i++){
        cartasArray[i].remove()
    }
}


btHit.addEventListener("click", () =>{
    
    showCard(YOU)


})

btStand.addEventListener("click", () =>{

})

btDeal.addEventListener("click", () =>{
    dealMen()
})