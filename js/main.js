  /*----- constants -----*/
  const deck = [
    { 1: 'el-gallo', image: 'img/1-el-gallo.png'},
    { 2: 'el-diablo', image: 'img/2-el-diablo.png'},
    { 3: 'la-dama', image: 'img/3-la-dama.png'},
    { 4: 'el-catrin', image: 'img/4-el-catrin.png'},
    { 5: 'el-paraguas', image: 'img/5-el-paraguas.png'},
    { 6: 'la-sirena', image: 'img/6-la-sirena.png'},
    { 7: 'la-escalera', image: 'img/7-la-escalera.png'},
    { 8: 'la-botella', image: 'img/8-la-botella.png'},
    { 9: 'el-barril', image: 'img/9-el-barril.png'},
    { 10: 'el-arbol', image: 'img/10-el-arbol.png'},
    { 11: 'el-melon', image: 'img/11-el-melon.png'},
    { 12: 'el-valiente', image: 'img/12-el-valiente.png'},
    { 13: 'el-gorrito', image: 'img/13-el-gorrito.png'},
    { 14: 'la-muerte', image: 'img/14-la-muerte.png'},
    { 15: 'la-pera', image: 'img/15-la-pera.png'},
    { 16: 'la-bandera', image: 'img/16-la-bandera.png'},
    { 17: 'el-bandolon', image: 'img/17-el-bandolon.png'},
    { 18: 'el-violoncello', image: 'img/18-el-violoncello.png'},
    { 19: 'la-garza', image: 'img/19-la-garza.png'},
    { 20: 'el-pajaro', image: 'img/20-el-pajaro.png'},
    { 21: 'la-mano', image: 'img/21-la-mano.png'},
    { 22: 'la-bota', image: 'img/22-la-bota.png'},
    { 23: 'la-luna', image: 'img/23-la-luna.png'},
    { 24: 'el-cotorro', image: 'img/24-el-cotorro.png'},
    { 25: 'el-borracho', image: 'img/25-el-borracho.png'},
    { 26: 'el-negrito', image: 'img/26-el-negrito.png'},
    { 27: 'el-corazon', image: 'img/27-el-corazon.png'},
    { 28: 'la-sandia', image: 'img/28-la-sandia.png'},
    { 29: 'el-tambor', image: 'img/29-el-tambor.png'},
    { 30: 'el-camaron', image: 'img/30-el-camaron.png'},
    { 31: 'las-jaras', image: 'img/31-las-jaras.png'},
    { 32: 'el-musico', image: 'img/32-el-musico.png'},
    { 33: 'la-araña', image: 'img/33-la-araña.png'},
    { 34: 'el-soldado', image: 'img/34-el-soldado.png'},
    { 35: 'la-estrella', image: 'img/35-la-estrella.png'},
    { 36: 'el-cazo', image: 'img/36-el-cazo.png'},
    { 37: 'el-mundo', image: 'img/37-el-mundo.png'},
    { 38: 'el-apache', image: 'img/38-el-apache.png'},
    { 39: 'el-nopal', image: 'img/39-el-nopal.png'},
    { 40: 'el-alacran', image: 'img/40-el-alacran.png'},
    { 41: 'la-rosa', image: 'img/41-la-rosa.png'},
    { 42: 'la-calavera', image: 'img/42-la-calavera.png'},
    { 43: 'la-campana', image: 'img/43-la-campana.png'},
    { 44: 'el-cantarito', image: 'img/44-el-cantarito.png'},
    { 45: 'el-venado', image: 'img/45-el-venado.png'},
    { 46: 'el-sol', image: 'img/46-el-sol.png'},
    { 47: 'la-corona', image: 'img/47-la-corona.png'},
    { 48: 'la-chalupa', image: 'img/48-la-chalupa.png'},
    { 49: 'el-pino', image: 'img/49-el-pino.png'},
    { 50: 'el-pescado', image: 'img/50-el-pescado.png'},
    { 51: 'la-palma', image: 'img/51-la-palma.png'},
    { 52: 'la-maceta', image: 'img/52-la-maceta.png'},
    { 53: 'el-arpa', image: 'img/53-el-arpa.png'},
    { 54: 'la-rana', image: 'img/54-la-rana.png'}
  ];

  const bean = {
    image: 'img/bean.jpeg'
  }

  /*----- state variables -----*/
  let player;
  let computer;
  let winner;
  let selected;
  let intervalID;

  /*----- cached elements  -----*/
  const middleCard = document.getElementById('random-card');
  const middleContainer = document.getElementById('middle-container');
  const playBtn = document.getElementById('play-btn');
  const clickMssg = document.getElementById('click-mssg');
  const nodeList = document.querySelectorAll('#tabla > img');
  const tablaCards = [...nodeList];
  const nodeListOpponent = document.querySelectorAll('#opponent-tabla > img');
  const opponentTablaCards = [...nodeListOpponent];

  /*----- event listeners -----*/
  playBtn.addEventListener('click', deckCountdown);
  middleCard.addEventListener('click', giveInstructions);

  /*----- functions -----*/
  initialize();

  function initialize() {
    selected = [];
    winner = null;
    player = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];
    computer = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];
  }

  function giveInstructions() {
    clickMssg.remove();
    const instructionBlock = document.createElement('div');
    instructionBlock.setAttribute('id', 'instructions');
    instructionBlock.innerHTML = "<h4>Ready to have some fun<br> a-la-Mexicana?</h4><br><h4>You will have 5 seconds to identify each card on your tabla.<br> Win by placing 4 beans horizontally, vertically or diagonally before the computer does.</h4>";
    middleCard.replaceWith(instructionBlock);
  }

  //Initiates the gameplay
  function deckCountdown(){
    clickMssg.remove();
    const instructionBlock = document.getElementById('instructions');
    if (instructionBlock){
      instructionBlock.replaceWith(middleCard);
    }
    middleCard.removeEventListener('click', giveInstructions);
    tablaCards.forEach(card => card.addEventListener('click', handleClick));
    randomizePlayerBoard(player);
    randomizeOpponentBoard(computer);
    createResetButton();
    selected = [];
    intervalID = setInterval(changeCardsInterval, 5000);
    playBtn.remove();
  }

  //Randomizes the cards that show in both the player and computer tablas
  function randomizeCard() {
    const randomIndex = Math.floor(Math.random() * deck.length);
    const found = selected.find(selectedItem => selectedItem === randomIndex);
    if (!found){
      selected.push(randomIndex);
      return deck[randomIndex].image;
    } else {
      return randomizeCard();
    }
  }
  
  function randomizePlayerBoard(player){
    selected = [];
    player.forEach((rowArray, arrayIdx) => {
      rowArray.forEach((rowValue, rowIdx) => {
        const cardId = `${arrayIdx},${rowIdx}`;
        const cardEl = document.getElementById(cardId);
        cardEl.src = randomizeCard();
      })
    })
  }

  function randomizeOpponentBoard(computer){
    selected = [];
    computer.forEach((rowArray, arrayIdx) => {
      rowArray.forEach((rowValue, rowIdx) => {
        const opponentId = `${arrayIdx},${rowIdx},`;
        const opponentCardEl = document.getElementById(opponentId);
        opponentCardEl.src = randomizeCard();
      })
    })
  }

  //Handles the click event for the player tablas
  function handleClick(e){
    const target = e.target;
    if (e.target.src === middleCard.src){
    const [col, row] = target.id.split(",");
    player[col][row] = 1;
    target.src = bean.image;
    checkWinner();
    }
  }

  //Returns array of all randomized computer cards
  function opponentTablaImageArray() {
    const opponentTablaImages = [];
    opponentTablaCards.forEach(card => {
      opponentTablaImages.push(card);
    })
    return opponentTablaImages;
  }

  //Returns index where src of middle card equals src of any card on computer tabla
  function changeCardsInterval(){
    const opponentTablaImages = opponentTablaImageArray();
    middleCard.src = randomizeCard();
    const index = opponentTablaImages.findIndex(image => {
      return image.src === middleCard.src;
    });
    opponentCardMatching(index);
  }

  //Using index found above, the src of the matching index card is changed to the bean
  function opponentCardMatching(index){
    const changedCard = opponentTablaCards[index];
    const [col, row] = changedCard.id.split(",");
    computer[col][row] = 1;
    opponentTablaCards[index].src = bean.image;
    checkWinner();
  }

  //Following functions check for all possible win logic for both player and computer
  function checkWinner() {
    checkHorizontalWin(player, "player");
    checkHorizontalWin(computer, "computer");
    checkVerticalWin(player, "player");
    checkVerticalWin(computer, "computer");
    checkDiagonalWin(player, "player");
    checkDiagonalWin(computer, "computer");
    if (winner === 'player' || winner === 'computer') {
      clearInterval(intervalID);
      middleCard.remove();
      renderMessage();
      createGif();
      return;
    }
  }

  function checkHorizontalWin(tabla, name) {
    tabla.forEach(rowArray => {
      let sum = 0;
      rowArray.forEach(value => {
        sum += value;
      })
      if (sum === 4) {
        winner = `${name}`;
      }
    })
  }

  function checkVerticalWin(tabla, name) {
    let sumColZero = 0;
    let sumColOne = 0;
    let sumColTwo = 0;
    let sumColThree = 0;
    tabla.forEach(rowArray => {
       sumColZero += rowArray[0];
       sumColOne += rowArray[1];
       sumColTwo += rowArray[2];
       sumColThree += rowArray[3];
    })
    if (sumColZero === 4 || sumColOne === 4 || sumColTwo === 4 || sumColThree === 4) {
      winner = `${name}`;
    }
  }

  function checkDiagonalWin(tabla, name) {
    let sumBackSlash = 0;
    let sumForwardSlash = 0;
    for (let i=0; i < 4; i++){
      sumBackSlash += tabla[i][i];
      sumForwardSlash += tabla[i][3-i];
    }
    if (sumBackSlash === 4 || sumForwardSlash === 4 ) {
      winner = `${name}`;
    }
  }

  //Renders win or loss message
  function renderMessage() {
    const winnerMessage = document.createElement('h2');
    if (winner === 'player'){
      winnerMessage.innerText =`The ${winner} has won! Congratulations!`;
    } else if (winner === 'computer'){
      winnerMessage.innerText =`The ${winner} has won!`;
    }
    middleContainer.prepend(winnerMessage);
  }

  // Creates gif img element for win or loss message
  function createGif(){
    const resetBtn = document.getElementById('reset-btn');
    const gif = document.createElement('img');
    if (winner === "player"){
      gif.style.width = '480';
      gif.style.width = '270';
      gif.src = 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2Y1NmExZjhjYjc1YWZkZTY1NzUxMTMzMTVmMjlhMDVmNjU5OGYxZSZjdD1n/a0h7sAqON67nO/giphy.gif';
    } else if (winner === 'computer'){
      gif.style.width = '480';
      gif.style.width = '270';
      gif.src = 'https://media1.giphy.com/media/5BLIUJbZfDzIPv0EpL/giphy.gif?cid=ecf05e474l76r0rmo3yrhkz19ipzxi7sy6nc9qj24hp76ktd&rid=giphy.gif&ct=g';
    }
    middleContainer.insertBefore(gif, resetBtn);
  }

  function createResetButton(){
    const resetBtn = document.createElement('button');
    middleContainer.appendChild(resetBtn);
    resetBtn.setAttribute('id', 'reset-btn');
    resetBtn.innerText = 'Reset the game';
    resetBtn.addEventListener('click', resetGame);
  }

  function resetGame() {
    location.reload();
  }