let mode;
const startButton = document.getElementById('startButton');
const mainContainer = document.querySelector('.bodyContainer');
const ssc = document.querySelector('.startScreenContainer');
const bootingUp = document.getElementById('btext');
const bootingContainer = document.getElementById('booting')
const loadBar = document.getElementById('loadingBar');

//stat declarations/Selectors

let
  dps,
  enemyBaseHp,
  enemyLevel,
  cellsBanked,
  enemyHp = enemyBaseHp;

const
  enemyHpbar = document.querySelector("#healthBar"),
  dpsDisplay = document.querySelector("#damage"),
  cells = document.querySelector("#energy"),
  hpDisplay = document.querySelector(".hpMax");

//Hide Game page for loading page

function setup() {
  mode = 0;
  mainContainer.style.display = 'none';
}

//show load page

function drawStartScreen() {
  if (mode == 0) {
    ssc.style.display = 'flex';
    load();
  }
  if (mode == 1) {
    ssc.style.display = 'none';
    mainContainer.style.display = 'flex';
  }
}

//booting up animation
function typeWriter(element, speed) {
  let txt = element.innerHTML;
  element.innerHTML = '';
  let i = 0;
  let timer = setInterval(function () {
    if (i < txt.length) {
      element.append(txt.charAt(i))
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed)
}

//loading page

function load() {
  startButton.disabled = true;
  let width = 0;
  let height = 5;
  let frames = setInterval(frame, 10);
  typeWriter(bootingUp, 120);
  console.log("booting up..");

  function frame() {
    if (width >= 100) {
      clearInterval(frames);
      startButton.disabled = false;
      bootingContainer.innerHTML = 'Press';
      document.getElementById('progress').innerHTML = width * 1 + '%';
      loadBar.style.height = '80%';
      loadBar.style.transition = 4 + 's';
      loadBar.style.margin = '0rem 3rem';
      loadBar.style.marginBottom = '7.8rem';
      height++;
    } else {
      width++;
      loadBar.style.width = width + '%';
      document.getElementById('progress').innerHTML = width * 1 + '%';
    }
  };

  //start button functionality

  startButton.addEventListener('click', function () {
    mode = 1
    drawStartScreen();
    startGame()
  });
};

//Enemy, Stats, Cells reset for New Game

function resetStats() {
  dps = 2;
  enemyBaseHp = 10;
  enemyLevel = 1;
  cellsBanked = 0;
  updateCells();
  enemyHp = enemyBaseHp;
}

//new Game/initial loading
function newGame() {
  setup();
  drawStartScreen();
  load();
}

//Start Game...
function startGame() {
  resetStats();
  respawnEnemy();
}

//attacking/killing Enemy

function click() {
  let newHp = enemyHp - dps;

  enemyHpbar.value = newHp;
  console.log(newHp + " Hp left");

  if (newHp <= 0) {
    console.log("Enemy Taken Down!");
    giveEnemyXp();
    enemyLevel++;
    respawnEnemy();
  } else {
    hpDisplay.innerHTML = newHp;
    enemyHp = newHp;
  }
};
//Clicking Target Event
document.querySelector("#target").addEventListener("click", click)

//XP/Cells Recieved on Kill
function giveEnemyXp() {
  let xpGiven = Math.round(enemyHpbar.max / 2);
  console.log(xpGiven + " Cell(s) Recieved!");
  cellsBanked = xpGiven + cellsBanked;
  updateCells();
};

function updateCells() {
  cells.innerHTML = ": " + cellsBanked + " Cells";
};

//Getting HP for leveled up Enemy
function getEnemyHp() {
  enemyHp = Math.round(4 * (enemyLevel - 1 + 1.55 ** (enemyLevel - 1.55)));
  enemyHpbar.value = enemyHp;
  enemyHpbar.max = enemyHp;
  hpDisplay.innerHTML = enemyHp;
  console.log("EnemyHp: " + enemyHp);
};

//Respawn Enemy
function respawnEnemy() {
  getEnemyHp();
  const levelDisplay = document.querySelector(".enemyLevel");
  levelDisplay.innerHTML = "Lv: " + enemyLevel;
  dpsDisplay.innerHTML = dps;
  displayImg();
  console.log("A New Challaneger Appears!");
}
//Start Game
newGame();