  console.log('sanity check');
  
  /*----- constants -----*/
  const deck = [
    { 1: 'el-gallo', image: 'img/1-el-gallo.png'},
    { 2: 'el-diablo', image: 'img/2-el-diablo'},
    { 3: 'la-dama', image: 'img/3-la-dama'},
    { 4: 'el-catrin', image: 'img/4-el-catrin'},
    { 5: 'el-paraguas', image: 'img/5-el-paraguas'},
    { 6: 'la-sirena', image: 'img/6-la-sirena'},
    { 7: 'la-escalera', image: 'img/7-la-escalera'},
    { 8: 'la-botella', image: 'img/8-la-botella'},
    { 9: 'el-barril', image: 'img/9-el-barril'},
    { 10: 'el-arbol', image: 'img/10-el-arbol'},
    { 11: 'el-melon', image: 'img/11-el-melon'},
    { 12: 'el-valiente', image: 'img/12-el-valiente'},
    { 13: 'el-gorrito', image: 'img/13-el-gorrito'},
    { 14: 'la-muerte', image: 'img/14-la-muerte'},
    { 15: 'la-pera', image: 'img/15-la-pera'},
    { 16: 'la-bandera', image: 'img/16-la-bandera'},
    { 17: 'el-bandolon', image: 'img/17-el-bandolon'},
    { 18: 'el-violoncello', image: 'img/18-el-violoncello'},
    { 19: 'la-garza', image: 'img/19-la-garza'},
    { 20: 'el-pajaro', image: 'img/20-el-pajaro'},
    { 21: 'la-mano', image: 'img/21-la-mano'},
    { 22: 'la-bota', image: 'img/22-la-bota'},
    { 23: 'la-luna', image: 'img/23-la-luna'},
    { 24: 'el-cotorro', image: 'img/24-el-cotorro'},
    { 25: 'el-borracho', image: 'img/25-el-borracho'},
    { 26: 'el-negrito', image: 'img/26-el-negrito'},
    { 27: 'el-corazon', image: 'img/27-el-corazon'},
    { 28: 'la-sandia', image: 'img/28-la-sandia'},
    { 29: 'el-tambor', image: 'img/28-el-tambor'},
    { 30: 'el-camaron', image: 'img/30-el-camaron'},
    { 31: 'las-jaras', image: 'img/31-las-jaras'},
    { 32: 'el-musico', image: 'img/32-el-musico'},
    { 33: 'la-araña', image: 'img/33-la-araña'},
    { 34: 'el-soldado', image: 'img/34-el-soldado'},
    { 35: 'la-estrella', image: 'img/35-la-estrella'},
    { 36: 'el-cazo', image: 'img/36-el-cazo'},
    { 37: 'el-mundo', image: 'img/37-el-mundo'},
    { 38: 'el-apache', image: 'img/38-el-apache'},
    { 39: 'el-nopal', image: 'img/39-el-nopal'},
    { 40: 'el-alacran', image: 'img/40-el-alacran'},
    { 41: 'la-rosa', image: 'img/41-la-rosa'},
    { 42: 'la-calavera', image: 'img/42-la-calavera'},
    { 43: 'la-campana', image: 'img/43-la-campana'},
    { 44: 'el-cantarito', image: 'img/44-el-cantarito'},
    { 45: 'el-venado', image: 'img/45-el-venado'},
    { 46: 'el-sol', image: 'img/46-el-sol'},
    { 47: 'la-corona', image: 'img/47-la-corona'},
    { 48: 'la-chalupa', image: 'img/48-la-chalupa'},
    { 50: 'el-pescado', image: 'img/50-el-pescado'},
    { 51: 'la-palma', image: 'img/51-la-palma'},
    { 52: 'la-maceta', image: 'img/52-la-maceta'},
    { 53: 'el-arpa', image: 'img/53-el-arpa'},
    { 54: 'la-rana', image: 'img/54-la-rana'}
  ];

  /*----- state variables -----*/
  let board;
  let winner;

  /*----- cached elements  -----*/


  /*----- event listeners -----*/


  /*----- functions -----*/

  initialize();

  function initialize() {
      winner = null;
      board = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ];
      render();
  }

  function render() {
      renderBoard();
  }

  function renderBoard(){

    board.forEach((rowArray, arrayIdx) => {
        rowArray.forEach((rowValue, rowIdx) => {
            const cardId = `c${arrayIdx}r${rowIdx}`;
            const cardEl = document.getElementById(cardId);
            console.log(cardEl);
        })
    })
  }