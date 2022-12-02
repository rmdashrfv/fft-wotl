export const UNITS = [
  {
    hp: 100,
    mp: 10,
    ct: 0,
    name: null, // touch on this
    job: "Squire",
    gender: "male",
    attack: 10,
    move: 3,
    speed: 5,
    equipment: {
      rHand: null,
      lHand: null,
      helmet: null,
      armor: null,
      accessory: null
    },
    level: 1,
    exp: 0,
    imgSrc: "http://www.videogamesprites.net/FinalFantasyTactics/Jobs/Squire/Squire1M-SW.gif",
    portraitSrc: "https://fantasyanime.com/finalfantasy/fftactics/images/fftactics_job60.gif",
    cost: 1000
  },
  {
    hp: 100,
    mp: 10,
    ct: 0,
    name: null, // touch on this
    job: "Squire",
    gender: "female",
    attack: 10,
    move: 3,
    speed: 5,
    equipment: {
      rHand: null,
      lHand: null,
      helmet: null,
      armor: null,
      accessory: null
    },
    level: 1,
    exp: 0,
    imgSrc: "http://www.videogamesprites.net/FinalFantasyTactics/Jobs/Squire/Squire1F-SW.gif",
    portraitSrc: "https://fantasyanime.com/finalfantasy/fftactics/images/fftactics_job60.gif",
    cost: 1000
  },
  {
    hp: 75,
    mp: 5,
    ct: 0,
    name: null, // touch on this
    job: "Chemist",
    gender: "male",
    attack: 5,
    move: 3,
    speed: 4,
    equipment: {
      rHand: null,
      lHand: null,
      helmet: null,
      armor: null,
      accessory: null
    },
    level: 1,
    exp: 0,
    imgSrc: "http://www.videogamesprites.net/FinalFantasyTactics/Jobs/Chemist/Chemist1M-SW.gif",
    portraitSrc: "https://fantasyanime.com/finalfantasy/fftactics/images/fftactics_job14.gif",
    cost: 800
  },
  {
    hp: 75,
    mp: 5,
    ct: 0,
    name: null, // touch on this
    job: "Chemist",
    gender: "female",
    attack: 5,
    move: 3,
    speed: 4,
    equipment: {
      rHand: null,
      lHand: null,
      helmet: null,
      armor: null,
      accessory: null
    },
    level: 1,
    exp: 0,
    imgSrc: "http://www.videogamesprites.net/FinalFantasyTactics/Jobs/Chemist/Chemist1F-SW.gif",
    portraitSrc: "https://fantasyanime.com/finalfantasy/fftactics/images/fftactics_job14.gif",
    cost: 800
  }
]

export const ARMOR = {
  clothing: [
    {
      name: "Clothing",
      stock: 10,
      inStock: true,
      cost: 200,
      imgSrc:
        "http://www.videogamesprites.net/FinalFantasyTactics/Objects/Inventory/Clothing.gif",
      equippable: ["Chemist"],
    },
  ],
  armor: [
    {
      name: "Leather Armor",
      stock: 10,
      inStock: true,
      cost: 400,
      imgSrc:
        "http://www.videogamesprites.net/FinalFantasyTactics/Objects/Inventory/LeatherArmor.gif",
      equippable: ["Squire"],
    },
  ],
};

export const WEAPONS = {
  swords: [
    {
      name: "Broadsword",
      attack: 4,
      defense: 0,
      cost: 200,
      magicPower: 0,
      range: 0,
      stock: 10,
      inStock: true,
      type: "rHand",
      imgSrc: "http://www.videogamesprites.net/FinalFantasyTactics/Objects/Inventory/Broadsword.gif"
    },
    {
      name: "Longsword",
      attack: 5,
      defense: 0,
      cost: 900,
      magicPower: 0,
      range: 0,
      stock: 3,
      inStock: true,
      type: "rHand",
      imgSrc: "http://www.videogamesprites.net/FinalFantasyTactics/Objects/Inventory/LongSword.gif"
    },
  ],
  knives: [
    {
      name: "Dagger",
      attack: 5,
      defense: 0,
      cost: 900,
      magicPower: 0,
      range: 0,
      stock: 3,
      inStock: true,
      imgSrc: "http://www.videogamesprites.net/FinalFantasyTactics/Objects/Inventory/Dagger.gif",
    },
    {
      name: "Mage Masher",
      attack: 5,
      defense: 0,
      cost: 900,
      magicPower: 0,
      range: 0,
      stock: 3,
      inStock: true,
      imgSrc: "http://www.videogamesprites.net/FinalFantasyTactics/Objects/Inventory/MageMasher.gif",
    },
  ],
};