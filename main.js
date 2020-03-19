
let playerName = "dennis"

let player = {
  health: 100,
  attacks: {
    slap: 1,
    punch: 5,
    kick: 10,
    equippedWeapon: {}
  }
}
let target = {
  health: 120,
  attackDamage: [3, 10, 15],
  attackName:["slap", "punch", "kick"]
  // slap: 3,
  // punch: 15,
  // kick: 30,
}


let items = {
  bat: { name: "bat", modifier: 7, description: "Surprise bitch!!" },
  pepperSpray: { name: "pepper spray", modifier: 2, description: "Chemical warfare!!" },
  gun: { name: "gun", modifier: 25, description: "Always cheat. Always win." }
}

function update() {
  let healthElem = document.getElementById("health")
  let playerNameElem = document.getElementById("name")
  let playerHealthElem = document.getElementById("playerHealth")

  healthElem.innerText = "Health: " + target.health
  playerNameElem.innerText = "Name: " + playerName
  playerHealthElem.innerText = "Health: " + player.health

  if (target.health <= 0 || player.health <= 0) {
    target.health = 0
    player.health = 0
    gameOver()
  }
}

function slap() {
  target.health--
  update()
}

function punch() {
  target.health -= 5
  update()
}

function kick() {
  target.health -= 10
  update()
}

function useWeapon() {
  if (!player.attacks.equippedWeapon.modifier) {
    return
  }
  else {
    target.health -= player.attacks.equippedWeapon.modifier
    computerAttack()
    update()
  }
}

function equipWeapon(itemChoice) {
  let weaponTextElem = document.getElementById("weapon-text")
  if (itemChoice == "bat") {
    player.attacks.equippedWeapon = items.bat
    weaponTextElem.innerText = "Bat Equipped"
  }
  if (itemChoice == "pepperSpray") {
    player.attacks.equippedWeapon = items.pepperSpray
    weaponTextElem.innerText = "Pepper Spray Equipped"
  }
  if (itemChoice == "gun") {
    player.attacks.equippedWeapon = items.gun
    weaponTextElem.innerText = "Gun Equipped"
  }

}

function computerAttack() {
  let compNum = Math.floor(Math.random() * target.attackDamage.length)
  let attack = target.attackDamage[compNum]
  let attackName = target.attackName[compNum]
  let compAttackNameElem = document.getElementById("compAttackName")
  compAttackNameElem.innerText = attackName
  player.health -= attack
  update()
}

function gameOver() {
  target.health = 120
  player.health = 100
  let weaponTextElem = document.getElementById("weapon-text")
  player.attacks.equippedWeapon = {}
  weaponTextElem.innerText = "-no weapon equiped-"
  update()
}


//working as intended!
// function addMods(){
//   let modNumber = 0;
//   for(let i = 0; i < target.items.length; i++){
//     modNumber += target.items[i].modifier;
//   }
//   console.log(modNumber)
//   return modNumber;
// }

//add 'Use weapon' button for item modifiers