//Purchasing item

function purchase(item) {
  upgrades[item].purchased = true;
  //update bank n inventory
  cellsBanked = cellsBanked - upgrades[item].cost;
  updateCells();
  updateInventory(item);
}

//Pushing item to Inventory

function updateInventory(item) {
  const
    ul = document.querySelector("#inventory"),
    li = document.createElement("li");
  if (upgrades[item].purchased == true) {
    li.appendChild(
      document.createTextNode(
        upgrades[item].name
      )
    );
    ul.appendChild(li);
  }
}

//update DPS functionality

function updateDps(item) {
  const itemDps = upgrades[item].baseDPS;
  let newDps = itemDps + dps;
  dps = newDps;
  dpsDisplay.innerHTML = dps;
};

//Buying Boosters

let lastClickedUpgrade = Object.keys(upgrades)[0]

const drawAllBoosters = (upgradeID) => {
  const selectedUpgrade = upgrades[upgradeID]
  const isPurchased = selectedUpgrade.purchased
  const selectedBoosters = selectedUpgrade.boosters

  // container for all booster li's

  const boosterItemsContainer = document.querySelector(".boosterItems")

  if (isPurchased) {
    selectedBoosters.forEach(b => {
      if (!b.purchased) {
        const item = document.createElement("li");
        item.appendChild(
          document.createTextNode(`${b.label} - ${b.cost} cells - ${b.modifier.type}.0 - ${b.modifier.value}.0`)
        );
        boosterItemsContainer.appendChild(item);
      }
    })
  }
};

function updateHud() {
  drawAllBoosters(lastClickedUpgrade);
};

//Buying Upgrade function

function clickUpgrade(id) {
  lastClickedUpgrade = id;
  purchase(id);
  updateDps(id);
  updateHud();
};

//Event for selecting/buying Upgrade
document.querySelectorAll(".upgradeBTN").forEach((el) => {
  el.addEventListener("click", function () {
    if (cellsBanked >= upgrades[el.id].cost) {
      clickUpgrade(el.id);
      if (upgrades[el.id].purchased === true) {
        el.style.opacity = 0.5;
        el.disabled = true;
      }
      if (el.id === "auto") {
        setInterval(click, 500);
      }
    } else {
      const difference = upgrades[el.id].cost - cellsBanked;
      alert("You Need " + difference + " more cells to buy this upgrade!");
    }
  });
});