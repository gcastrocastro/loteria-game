# loteria-game
A simplified version of the classic Mexican card game 'Loteria'. The game consists of players being provided a 4 by 4 'tabla' consisting of 16 randomly generated cards from the 54-card deck. As the game begins, every 5 seconds a new randomly generated card is shown in the middle. The player must then identify if that card is available on their tabla and select it. The player wins when they fill a 4-card-long column, row or diagonal. 

# Pseudocode

1) Define required constants
-- Deck of 54 cards in an object with name and image source 

2) Define required variables used to track the state of the game
-- randomly selected card from the deck in 5sec intervals
-- board (4 by 4 col/rows) of numbers 1 or 0 (occupied or not)
-- winner , either null, 'T' for a tie, player or computer

3) Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant.
-- Store all 16 randomly generated cards in a 'Tabla' class

4) Upon loading the app should:
    -- Before beginning, only the title, middle card and play button will show
  4.1) Initialize the state variables
    -- winner = null;
    -- board = all cards 0, unoccupied
  4.2) Render those values to the page
    -- render two randomly generated tablas (4x4) on either side of the middle card
  4.3) Wait for the user to click play
    -- when clicked, the middle square will change to a randomly generated card and the player will have 5 sec to identify it on their tabla
    -- if they don't identify the card, the player will not be notified, resulting in the computer winning.
    -- if they do identify every card, winning is still up to chance depending on the randomization of both the tablas and the cards being drawn.

5) Handle a player clicking a square
    -- if the card is present on the tabla, the player needs to click on the card
        -- first check if the current random card is equal to the one that was clicked
        if so, 
        -- the card will change to a cartoon bean image that represents it being 'occupied'
        -- in the board, the respective space will change to 1
        if not, 
        -- render mssg "not the same card" over the middle card

6) Handle winner 
   -- if any row, col, or diagonal sums up to absolute value of 4, then we have a winner

7) Handle a player clicking the replay button
    -- call initialize so all state values are reset
    -- call render so the board returns to its original starting position 
