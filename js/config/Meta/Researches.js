define([], function () {
    return [{
        id: "productionResearch",
        group: "a",
        name: "Production research",
        price: {
            money: 4e3
        },
        priceIncrease: 1,
        max: 1,
        hideIfBought: !0,
        bonus: {
            type: "special",
            id: "allowProductionResearch",
            description: "Open production research options"
        }
    }, {
        id: "farmProduction",
        group: "a",
        dependsOnSpecialBonuses: ["allowProductionResearch"],
        name: "Farm production",
        price: {
            money: 5e3,
            knowledge: 1
        },
        priceIncrease: 2,
        max: null,
        bonus: {
            type: "buildingProduction",
            buildingId: "farm",
            multiplayer: 1.02
        }
    }, {
        id: "woodCutterProduction",
        group: "a",
        dependsOnSpecialBonuses: ["allowProductionResearch"],
        name: "Wood cutter production",
        price: {
            money: 1e4,
            knowledge: 5
        },
        priceIncrease: 2,
        max: null,
        bonus: {
            type: "buildingProduction",
            buildingId: "woodCutter",
            multiplayer: 1.3
        }
    }, {
        id: "toolMakerProduction",
        group: "a",
        dependsOnSpecialBonuses: ["allowProductionResearch"],
        dependsOnBuilding: "toolMaker",
        name: "Tool maker production",
        price: {
            money: 25e3,
            knowledge: 10
        },
        priceIncrease: 2,
        max: null,
        bonus: {
            type: "buildingProduction",
            buildingId: "toolMaker",
            multiplayer: 1.05
        }
    }, {
        id: "medicineFactoryProduction",
        group: "a",
        dependsOnSpecialBonuses: ["allowProductionResearch"],
        dependsOnBuilding: "medicineFactory",
        name: "Medicine factory production",
        price: {
            money: 75e3,
            knowledge: 25
        },
        priceIncrease: 2,
        max: null,
        bonus: {
            type: "buildingProduction",
            buildingId: "medicineFactory",
            multiplayer: 1.05
        }
    }, {
        id: "carFactoryProduction",
        group: "a",
        dependsOnSpecialBonuses: ["allowProductionResearch"],
        dependsOnBuilding: "carFactory",
        name: "Car factory production",
        price: {
            money: 2e5,
            knowledge: 50
        },
        priceIncrease: 2,
        max: null,
        bonus: {
            type: "buildingProduction",
            buildingId: "carFactory",
            multiplayer: 1.05
        }
    }, {
        id: "researchCenterProduction",
        group: "a",
        dependsOnSpecialBonuses: ["allowProductionResearch"],
        dependsOnBuilding: "researchCenter",
        name: "Research center production",
        price: {
            money: 5e5,
            knowledge: 100
        },
        priceIncrease: 2,
        max: null,
        bonus: {
            type: "buildingProduction",
            buildingId: "researchCenter",
            multiplayer: 1.5
        }
    }, {
        id: "weaponsFactoryProduction",
        group: "a",
        dependsOnSpecialBonuses: ["allowProductionResearch"],
        dependsOnBuilding: "weaponsFactory",
        name: "Weapons factory production",
        price: {
            money: 25e7,
            knowledge: 24e3
        },
        priceIncrease: 3,
        max: null,
        bonus: {
            type: "buildingProduction",
            buildingId: "weaponsFactory",
            multiplayer: 1.5
        }
    }, {
        id: "maxWorkersResearch",
        group: "b",
        name: "Max workers research",
        price: {
            money: 5e4
        },
        priceIncrease: 1,
        max: 1,
        hideIfBought: !0,
        bonus: {
            type: "special",
            id: "allowMaxWorkersResearch",
            description: "Open max workers research options"
        }
    }, {
        id: "farmMaxWorkers",
        group: "b",
        dependsOnSpecialBonuses: ["allowMaxWorkersResearch"],
        name: "Farm max workers",
        price: {
            money: 1e5,
            knowledge: 1
        },
        priceIncrease: 5,
        max: null,
        bonus: {
            type: "buildingMaxWorkers",
            buildingId: "farm",
            multiplayer: 1.2
        }
    }, {
        id: "woodCutterMaxWorkers",
        group: "b",
        dependsOnSpecialBonuses: ["allowMaxWorkersResearch"],
        name: "Wood cutter max workers",
        price: {
            money: 5e5,
            knowledge: 5
        },
        priceIncrease: 2.5,
        max: null,
        bonus: {
            type: "buildingMaxWorkers",
            buildingId: "woodCutter",
            multiplayer: 1.3
        }
    }, {
        id: "toolMakerMaxWorkers",
        group: "b",
        dependsOnSpecialBonuses: ["allowMaxWorkersResearch"],
        dependsOnBuilding: "toolMaker",
        name: "Tool maker max workers",
        price: {
            money: 1e6,
            knowledge: 10
        },
        priceIncrease: 2.5,
        max: null,
        bonus: {
            type: "buildingMaxWorkers",
            buildingId: "toolMaker",
            multiplayer: 1.2
        }
    }, {
        id: "medicineFactoryMaxWorkers",
        group: "b",
        dependsOnSpecialBonuses: ["allowMaxWorkersResearch"],
        dependsOnBuilding: "medicineFactory",
        name: "Medicine factory max workers",
        price: {
            money: 5e6,
            knowledge: 25
        },
        priceIncrease: 2.5,
        max: null,
        bonus: {
            type: "buildingMaxWorkers",
            buildingId: "medicineFactory",
            multiplayer: 1.2
        }
    }, {
        id: "carFactoryMaxWorkers",
        group: "b",
        dependsOnSpecialBonuses: ["allowMaxWorkersResearch"],
        dependsOnBuilding: "carFactory",
        name: "Car factory max workers",
        price: {
            money: 1e7,
            knowledge: 50
        },
        priceIncrease: 2.5,
        max: null,
        bonus: {
            type: "buildingMaxWorkers",
            buildingId: "carFactory",
            multiplayer: 1.2
        }
    }, {
        id: "researchCenterMaxWorkers",
        group: "b",
        dependsOnSpecialBonuses: ["allowMaxWorkersResearch"],
        dependsOnBuilding: "researchCenter",
        name: "Research center max workers",
        price: {
            money: 5e7,
            knowledge: 100
        },
        priceIncrease: 3,
        max: null,
        bonus: {
            type: "buildingMaxWorkers",
            buildingId: "researchCenter",
            multiplayer: 1.15
        }
    }, {
        id: "weaponsFactoryMaxWorkers",
        group: "b",
        dependsOnSpecialBonuses: ["allowMaxWorkersResearch"],
        dependsOnBuilding: "weaponsFactory",
        name: "Weapons factory max workers",
        price: {
            money: 25e7,
            knowledge: 150
        },
        priceIncrease: 3,
        max: null,
        bonus: {
            type: "buildingMaxWorkers",
            buildingId: "weaponsFactory",
            multiplayer: 1.15
        }
    }, {
        id: "barracksMaxWorkers",
        group: "b",
        dependsOnSpecialBonuses: ["allowMaxWorkersResearch"],
        dependsOnBuilding: "barracks",
        name: "Barracks max soldiers",
        price: {
            money: 5e8,
            knowledge: 200
        },
        priceIncrease: 2.5,
        max: null,
        bonus: {
            type: "buildingMaxWorkers",
            buildingId: "barracks",
            multiplayer: 1.28
        }
    }, {
        id: "priceResearch",
        group: "c",
        name: "Price research",
        price: {
            money: 1e4
        },
        priceIncrease: 1,
        max: 1,
        hideIfBought: !0,
        bonus: {
            type: "special",
            id: "allowPriceResearch",
            description: "Open price research options"
        }
    }, {
        id: "foodPrice",
        group: "c",
        dependsOnSpecialBonuses: ["allowPriceResearch"],
        name: "Food price",
        price: {
            money: 1e4,
            knowledge: 1
        },
        priceIncrease: 5,
        max: null,
        bonus: {
            type: "populationProductionPrice",
            resourceId: "food",
            multiplayer: 1.5
        }
    }, {
        id: "toolsPrice",
        group: "c",
        dependsOnSpecialBonuses: ["allowPriceResearch"],
        dependsOnBuilding: "toolMaker",
        name: "Tools price",
        price: {
            money: 5e4,
            knowledge: 5
        },
        priceIncrease: 5,
        max: null,
        bonus: {
            type: "populationProductionPrice",
            resourceId: "tools",
            multiplayer: 1.5
        }
    }, {
        id: "medicinePrice",
        group: "c",
        dependsOnSpecialBonuses: ["allowPriceResearch"],
        dependsOnBuilding: "medicineFactory",
        name: "Medicine price",
        price: {
            money: 25e4,
            knowledge: 25
        },
        priceIncrease: 5,
        max: null,
        bonus: {
            type: "populationProductionPrice",
            resourceId: "medicine",
            multiplayer: 1.5
        }
    }, {
        id: "carsPrice",
        group: "c",
        dependsOnSpecialBonuses: ["allowPriceResearch"],
        dependsOnBuilding: "carFactory",
        name: "Cars price",
        price: {
            money: 1e6,
            knowledge: 100
        },
        priceIncrease: 5,
        max: null,
        bonus: {
            type: "populationProductionPrice",
            resourceId: "cars",
            multiplayer: 1.5
        }
    }, {
        id: "soldiersStrength",
        group: "d",
        dependsOnSpecialBonuses: [],
        dependsOnBuilding: "barracks",
        name: "Soldiers attack",
        price: {
            money: 1e10,
            knowledge: 1e6
        },
        priceIncrease: 5,
        max: null,
        bonus: {
            type: "soldiersStrength",
            multiplayer: 1.2
        }
    }, {
        id: "weaponStrength",
        group: "d",
        dependsOnSpecialBonuses: [],
        dependsOnBuilding: "barracks",
        name: "Weapon effectiveness",
        price: {
            money: 1e11,
            knowledge: 1e7
        },
        priceIncrease: 5,
        max: null,
        bonus: {
            type: "weaponsStrength",
            multiplayer: 1.15
        }
    }, {
        id: "takeWeapons",
        group: "d",
        dependsOnSpecialBonuses: [],
        dependsOnBuilding: "barracks",
        name: "Soldiers gear",
        price: {
            money: 1e8,
            knowledge: 1e4
        },
        priceIncrease: 2,
        max: null,
        bonus: {
            type: "takeWeapons",
            multiplayer: 1.25
        }
    }, {
        id: "workerDistribution",
        group: "e",
        name: "Worker management",
        price: {
            money: 2e4,
            knowledge: 5
        },
        priceIncrease: 1,
        max: 1,
        hideIfBought: !0,
        bonus: {
            type: "special",
            id: "allowWorkerDistribution",
            description: "Gives more control over worker distribution among buildings"
        }
    }]
})
