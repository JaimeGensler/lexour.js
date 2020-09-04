import CodeBlock from '../src/';

const code = `
<!DOCTYPE html>
<html lang     =      'en' dir='ltr'>
<head>
    <meta charset="utf-8">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet">
    <link href="https://db.onlinewebfonts.com/c/c374d838a58029dec24540958fb76db4?family=Gallia" rel="stylesheet" type="text/css"/>
    <link href="https://fonts.googleapis.com/css?family=Abril+Fatface|Bowlby+One+SC|Calistoga|Patua+One|Righteous&display=swap" rel="stylesheet">
    <title>Clue</title>
</head>
<body>
  <div class="container">
  <h1>Clue</h1>
    <div id='intro-page' class=" box fancy-border">
        <p>Welcome to Tudor Mansion. It is a dark and stormy night and the lights overhead flicker... a murder has just occured, Mr. Boddy's body was found outside the front door. Only the six dinner guests that were invited to the party are present, and all six of these guests have potential motive to get rid of the billionaire. Select a player below to move throughout the mansion and gather clues to help uncover the mystery at Tudor Mansion.</p>
        <h3>Select a player:</h3>
        <br>
        <form id='initial-form'>
            <label data-color='white'>
                <img src="https://raw.githubusercontent.com/Leels/CLUE/master/assets/cards/mrs.-white.jpg" alt="Mrs. White">
                <input type='radio' name='character' value='Mrs. White'>
            </label>
            <label data-color='blue'>
                <img src="https://raw.githubusercontent.com/Leels/CLUE/master/assets/cards/mrs.-peacock.jpg" alt="Mrs. Peacock">
                <input type='radio' name='character' value='Mrs. Peacock'>
            </label>
            <label data-color='green'>
                <img src="https://raw.githubusercontent.com/Leels/CLUE/master/assets/cards/mr.-green.jpg" alt="Mr. Green">
                <input type='radio' name='character' value='Mr. Green'>
            </label>
            <label data-color='purple'>
                <img src="https://raw.githubusercontent.com/Leels/CLUE/master/assets/cards/prof.-plum.jpg" alt="Prof Plum">
                <input type='radio' name='character' value='Prof. Plum' required>
            </label>
            <label data-color='yellow'>
                <img src="https://raw.githubusercontent.com/Leels/CLUE/master/assets/cards/col.-mustard.jpg" alt="Colonel Mustard">
                <input type='radio' name='character' value='Col. Mustard'>
            </label>
            <label data-color='red'>
                <img src="https://raw.githubusercontent.com/Leels/CLUE/master/assets/cards/ms.-scarlet.jpg" alt="Ms. Scarlet">
                <input type='radio' name='character' value='Ms. Scarlet'>
            </label>
            <button type='submit' id='start-game'>Start Game</button>
        </form>
    </div>

    <div id="gameboard">
        <div class="wrapper">
            <!-- rooms to hide and show-->
            <div class="box" id='room'>
                <h2>ROOM TEXT</h2>
                <div id="button-door">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAfju_D-vz2QDlb25gpDYHTD_vk8KbZbPNwwBH8tkJRAJIR3DatLKnitmc&s">
                </div>
            </div>
            <div class="box message-board fancy-border">
                <h5>You have encountered <span id="current-player-in-room"></span> in the <span id="current-room"></span>. Ask a question to gain a new clue about the murder at Tudor Mansion.</h5>
                <form id="inquiry-form">
                    <div class="center-div">
                        <h5>Was it...</h5>
                        <select name="suspect" required>
                            <option value="" disabled selected>Suspect</option>
                            <option value="white">Mrs. White</option>
                            <option value="blue">Mrs. Peacock</option>
                            <option value="green">Mr. Green</option>
                            <option value="purple">Professor Plum</option>
                            <option value="yellow">Colonel Mustard</option>
                            <option value="red">Miss Scarlet</option>
                        </select>
                        <h5>in the...</h5>
                        <select name="location" required>
                            <option value="" disabled selected>Location</option>
                            <option value="study">Study</option>
                            <option value="library">Library</option>
                            <option value="lounge">Lounge</option>
                            <option value="game room">Game Room</option>
                            <option value="hall">Hall</option>
                            <option value="dining room">Dining Room</option>
                            <option value="conservatory">Conservatory</option>
                            <option value="ballroom">Ballroom</option>
                            <option value="kitchen">Kitchen</option>
                        </select>
                        <h5>with the...</h5>
                        <select name="weapon" required>
                            <option value="" disabled selected>Weapon</option>
                            <option value="revolver">Revolver</option>
                            <option value="rope">Rope</option>
                            <option value="lead pipe">Lead Pipe</option>
                            <option value="knife">Knife</option>
                            <option value="candlestick">Candlestick</option>
                            <option value="wrench">Wrench</option>
                        </select>
                    </div>
                    <br>
                    <div class="center-div ask-button">
                        <button id="submit-inquiry" type="submit">Ask</button>
                    </div>
                </form>
            </div>
            <div class="box bottom-buttons fancy-border">
                <div class="gameboard-bottom">
                    <div class="center-div">
                        <button id='button-rules' type='button' name='button'>Rules</button>
                        <button id='button-checkClues' type='button' name='button'>Your Clues</button>
                        <button id='button-accuse' type='button' name='button'>Make Final Accusation</button>
                    </div>
                </div>
            </div>
        </div>
      </div>

        <div id='rules' class="box fancy-border">
            <h2>The Rules of Clue:</h2><br>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div class='center-div'>
                <button class='button-backToGame' type='button'>Back to Game</button>
            </div>
        </div>

        <div id='player-clues' class="box fancy-border">
            <h2>Your Clues:</h2>
            <div id='player-clues-deck'>

            </div>
            <div class='center-div'>
                <button class='button-backToGame' type='button'>Back to Game</button>
            </div>
        </div>

        <div id='accusation'>
            <div class="box fancy-border">
                <h2>Make an Accusation</h2><br>
                <h5><span id="warning">WARNING: Be sure of your accusation!  If you are incorrect, you will lose the game.</span></h5><br>
                <h5>I beleive it was ... in the ... with the ...</h5><br>
                <form id='accusation-form'>
                    <div class='center-div'>
                        <select id='murderer' required>
                            <option value="" disabled selected>Suspect</option>
                            <option value='Mrs. White'>Mrs. White</option>
                            <option value='Mrs. Peacock'>Mrs. Peacock</option>
                            <option value='Mr. Green'>Mr. Green</option>
                            <option value='Prof. Plum'>Professor Plum</option>
                            <option value='Col. Mustard'>Colonel Mustard</option>
                            <option value='Ms. Scarlet'>Miss Scarlet</option>
                        </select>
                        <select id='murder-loc' required>
                            <option value="" disabled selected>Location</option>
                            <option value='Study'>Study</option>
                            <option value='Library'>Library</option>
                            <option value='Lounge'>Lounge</option>
                            <option value='Billiard Room'>Billiard Room</option>
                            <option value='Hall'>Hall</option>
                            <option value='Dining Room'>Dining Room</option>
                            <option value='Conservatory'>Conservatory</option>
                            <option value='Ballroom'>Ballroom</option>
                            <option value='Kitchen'>Kitchen</option>
                        </select>
                        <select id='murder-wep' required>
                            <option value="" disabled selected>Weapon</option>
                            <option value='Revolver'>Revolver</option>
                            <option value='Rope'>Rope</option>
                            <option value='Lead Pipe'>Lead Pipe</option>
                            <option value='Knife'>Knife</option>
                            <option value='Candlestick'>Candlestick</option>
                            <option value='Wrench'>Wrench</option>
                        </select>
                    </div>
                    <div class='center-div'>
                        <button id='submit-accusation' type='submit'>Submit Accusation</button>
                        <button class='button-backToGame' type='button'>Back to Game</button>
                    </div>
                </form>
            </div>
        </div>
        <div id='final' class="box fancy-border">
          <h2 id='you-win-lose'></h2>
          <h3 id='game-outcome'></h3>
          <div class='center-div'>
              <button id='play-again' type='button' name='button' value="Reset" onClick="window.location.reload()">Play Again</button>
            </div>

    </div>

</div>
</body>
</html>
`;

export default function Testing() {
    return <CodeBlock lang="html" code={code} showLineNumbers />;
}
