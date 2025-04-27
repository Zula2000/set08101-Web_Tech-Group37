
    let player = "Adventurer";

function startGame() { const input = document.getElementById("playerName").value;
    if (input.trim() !== "") {player = input;} document.getElementById("start-screen").style.display = "none"; document.getElementById("game").style.display = "block";
  updateStory(` <p>${player}, you find a mysterious chest glowing softly in the center of the room.<br> What will you do?</p> <button class="button" onclick="openChest()">Open the Chest</button>
<button class="button" onclick="leaveChest()">Leave it Alone</button> `);  }
  
function updateStory(html) { document.getElementById("game").innerHTML = html; }
  
function openChest() { updateStory(`  <p>You open the chest and find an ancient scroll and a crystal with a mysterious glow!<br> Your journey now beings!</p> `); }
  
function leaveChest() { updateStory(`  <p>You leave the chest untouched. As you walk away, a silence fills the room.<br>  Maybe some mysteries are better left unsolved.</p>  `); }
