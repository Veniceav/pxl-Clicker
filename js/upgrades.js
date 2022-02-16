const upgrades = {
  'auto': {
    name: "Auto Clicker",
    description: "Auto Clicker",
    baseDPS: 0,
    cost: 50,
    currentLevel: 0,
    purchased: false,
    boosters: [{
      label: 'Extra hand',
      modifier: {
        type: 'multiplier',
        value: 2,
      }
    }]
  },

  'boxingGloves': {
    name: "Boxing Gloves",
    purchased: false,
    description: 'An old used pair of Boxing Gloves...',
    baseDPS: 20,
    cost: 100,
    currentLevel: 0,
    boosters: [{
        label: 'Brawler Technique',
        modifier: {
          type: 'DPS Boost',
          value: 50
        },
        cost: 50,
        purchased: false
      },
      {
        label: 'Chain Strings',
        modifier: {
          type: 'multiplier',
          value: 2
        },
        cost: 150,
        purchased: false,
      },
      {
        label: 'No punches Held',
        modifier: {
          type: 'multiplier',
          value: 2.5,
        },
        cost: 250,
        purchased: false
      }
    ]
  },

  'orbCompanion': {
    name: "Orb",
    description: "An old Friend...",
    baseDPS: 75,
    cost: 1000,
    currentLevel: 0,
    purchased: false,
    boosters: [{
        label: 'Channel Energy',
        modifier: {
          type: 'DPS Boost',
          value: 150
        },
        cost: 300,
        purchased: false,
      },
      {
        label: 'Spark of Genius',
        modifier: {
          type: 'multiplier',
          value: 2,
        },
        cost: 850,
        purchased: false,
      },
      {
        label: 'Fully Charged',
        modifier: {
          type: 'multiplier',
          value: 2.5,
        },
        cost: 1500,
        purchased: false,
      }
    ]
  },

  'busterSword': {
    name: "Buster Sword",
    description: "Industrial grade weapon made from a rare alloy...",
    baseDPS: 200,
    cost: 5000,
    currentLevel: 0,
    purchased: false,
    boosters: [{
        label: 'Sharpended Edge',
        modifier: {
          type: 'DPS Boost',
          value: 550
        },
        cost: 650,
        purchased: false,
      },

      {
        label: 'Aluminum Coating',
        modifier: {
          type: 'Multiplier',
          value: 2
        },
        cost: 2200,
        purchased: false,
      },
      {
        label: 'Perfect Stance',
        modifier: {
          type: 'Multiplier',
          value: 2,
        },
        cost: 3500,
        purchased: false,
      }
    ]
  },

};