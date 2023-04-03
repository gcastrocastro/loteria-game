  console.log('sanity check');
  
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
  let selected;
  let board;
  let winner;

  /*----- cached elements  -----*/


  /*----- event listeners -----*/


  /*----- functions -----*/

  initialize();

  function initialize() {
      selected = [];
      winner = null;
      board = [
        [0, 0, 0, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [1, 0, 0, 0]
      ];
      render();
  }

  function render() {
      renderBoard();
  }

  function randomizeCard() {
    const randomIndex = Math.floor(Math.random() * deck.length);
    const found = selected.find(selectedItem => selectedItem === randomIndex);
    if (!found){
      selected.push(randomIndex);
      console.log(selected);
      return deck[randomIndex].image;
    } else {
      randomizeCard();
    }
  }

  function renderBoard(){

    board.forEach((rowArray, arrayIdx) => {
        rowArray.forEach((rowValue, rowIdx) => {
            const cardId = `c${arrayIdx}r${rowIdx}`;
            const cardEl = document.getElementById(cardId);
            cardEl.src = randomizeCard();
            if (rowValue === 1) {
              cardEl.src = bean.image;
            }
        })
    })
  }