export const UNITS = [
  {
    hp: 100,
    mp: 10,
    ct: 0,
    name: null, // touch on this
    job: "Squire",
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
    imgSrc: "https://fantasyanime.com/finalfantasy/fftactics/images/fftactics_job59.gif",
    portraitSrc: "https://fantasyanime.com/finalfantasy/fftactics/images/fftactics_job60.gif",
    cost: 1000
  },
  {
    hp: 75,
    mp: 5,
    ct: 0,
    name: null, // touch on this
    job: "Chemist",
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
    imgSrc: "https://fantasyanime.com/finalfantasy/fftactics/images/fftactics_job13.gif",
    portraitSrc: "https://fantasyanime.com/finalfantasy/fftactics/images/fftactics_job14.gif",
    cost: 800
  }
]

export const WEAPONS = {
  swords: [
    {
      name: 'Broadsword',
      attack: 4,
      defense: 0,
      cost: 200,
      magicPower: 0,
      range: 0,
      stock: 10,
      inStock: true,
      type: 'rHand'
    },
    {
      name: 'Longsword',
      attack: 5,
      defense: 0,
      cost: 900,
      magicPower: 0,
      range: 0,
      stock: 3,
      inStock: true,
      type: 'rHand'
    }
  ]
}