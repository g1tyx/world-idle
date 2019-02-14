define([], function () {
    return [{
        id: "birthRates",
        name: "Babies",
        description: "Increases birth rate.<br />Be careful, this may make your population unstable!",
        multiplayer: 1e-4,
        slow: 1.5
    }, {
        id: "deathRates",
        name: "Stupid",
        description: "Increases death rate by.<br />Be careful, this may make your population unstable!",
        multiplayer: 1e-4,
        slow: 1.5
    }, {
        id: "maxStorage",
        name: "Better food",
        description: "Increases food max storage.<br />Be careful, this may make your population unstable!",
        multiplayer: .01,
        slow: 1.5
    }, {
        id: "buyMoreMedicine",
        name: "Sicker",
        description: "People buy more medicine",
        multiplayer: 5e-4,
        slow: 1.3
    }, {
        id: "buyMoreToolsAndCars",
        name: "Consumer",
        description: "Buy more tools and cars",
        multiplayer: 5e-4,
        slow: 1.3
    }, {
        id: "buildingPrices",
        name: "Effective",
        description: "Reduces building prices",
        multiplayer: .002,
        slow: 1.2,
        type: "fixed"
    }, {
        id: "woodProduction",
        name: "Stronger",
        description: "Increase wood production",
        multiplayer: .001,
        slow: 1.2
    }, {
        id: "attack",
        name: "Aggressive",
        description: "Increase soldiers and weapons attack",
        multiplayer: .001,
        slow: 1.4
    }, {
        id: "knowledgeProduction",
        name: "Smarter",
        description: "Increase research production",
        multiplayer: .001,
        slow: 1.005
    }]
})
