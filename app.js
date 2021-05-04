document.addEventListener("DOMContentLoaded", () =>{

  const cardArray = [
    {
      name: "lego",
      img: "image-nes/lego.jpg"
    },
    {
      name: "mario",
      img: "image-nes/mario.jpg"
    },
    {
      name: "kart",
      img: "image-nes/kart.jpg"
    },
    {
      name: "pizza",
      img: "image-nes/pizza.png"
    },
    {
      name: "hotdog",
      img: "image-nes/hotdog.png"
    },
    {
      name: "ice-cream",
      img: "image-nes/ice-cream.png"
    },
    {
      name: "lego",
      img: "image-nes/lego.jpg"
    },
    {
      name: "mario",
      img: "image-nes/mario.jpg"
    },
    {
      name: "kart",
      img: "image-nes/kart.jpg"
    },
    {
      name: "pizza",
      img: "image-nes/pizza.png"
    },
    {
      name: "hotdog",
      img: "image-nes/hotdog.png"
    },
    {
      name: "ice-cream",
      img: "image-nes/ice-cream.png"
    },   
    {
      name: "fries",
      img: "image-nes/fries.png"
    },
    {
      name: "milkshake",
      img: "image-nes/milkshake.png"
    },
    {
      name: "cheeseburger",
      img: "image-nes/cheeseburger.png"
    },
    {
      name: "fries",
      img: "image-nes/fries.png"
    },
    {
      name: "milkshake",
      img: "image-nes/milkshake.png"
    },
    {
      name: "cheeseburger",
      img: "image-nes/cheeseburger.png"
    },
  ]

  cardArray.sort(() => 0.5 - Math.random())

  var cartasSeleccionadas = []
  var cartasSeleccionadasId = []
  var cartasGanadas = []
  var fallos = 0
  var resultado = document.querySelector("#puntos")
  var errores = document.querySelector("#fallos")
  const grid = document.querySelector('.grid')
  function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
      var card = document.createElement("img");
      card.setAttribute("src", "image-nes/blank.png")
      card.setAttribute("data-id", i)    
      card.addEventListener("click", flipcard)
      grid.appendChild(card)
    }
  
  }


  function iguales(){
    var cartas = document.querySelectorAll("img")
    const opcion1 = cartasSeleccionadasId[0]
    const opcion2 = cartasSeleccionadasId[1]
    if(cartasSeleccionadas[0] === cartasSeleccionadas[1]){
      alert("Tu encontraste dos cartas iguales")
      cartas[opcion1].setAttribute("src", "image-nes/white.png")
      cartas[opcion1].removeEventListener('click', flipcard)
      cartas[opcion2].setAttribute("src", "image-nes/white.png")
      cartas[opcion2].removeEventListener('click', flipcard)

      cartasGanadas.push(cartasSeleccionadas)
    }else{
      alert("Intenta de nuevo")
      cartas[opcion1].setAttribute("src", "image-nes/blank.png")
      cartas[opcion2].setAttribute("src", "image-nes/blank.png")
      fallos += 1
      errores.textContent = fallos
    }
    cartasSeleccionadas = []
    cartasSeleccionadasId = []
    resultado.textContent = cartasGanadas.length
    if(cartasGanadas.length === cardArray.length/2){
      resultado.textContent = "Ganaste"
    }
    if(fallos === cardArray.length/2+1){
      resultado.textContent = "Perdiste"
      for(let i = 0; i < cartas.length;i++){
        cartas[i].removeEventListener("click", flipcard)
      }
    }
  }


  function flipcard(){
    var cardID = this.getAttribute("data-id")
    if (cartasSeleccionadasId.length === 1 && cartasSeleccionadasId[0] === cardID) {
      return
    }
    cartasSeleccionadas.push(cardArray[cardID].name)
    cartasSeleccionadasId.push(cardID)
    this.setAttribute("src", cardArray[cardID].img)
    if(cartasSeleccionadas.length === 2){
      setTimeout(iguales, 100)
    }
  }


  createBoard()
})
