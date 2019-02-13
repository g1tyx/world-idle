define([], function () {
    return [{
        id: "productionResearch",
        group: "a",
        name: "生产研究",
        price: {
            money: 4e3
        },
        priceIncrease: 1,
        max: 1,
        hideIfBought: !0,
        bonus: {
            type: "special",
            id: "allowProductionResearch",
            description: "打开生产研究选项"
        }
    }, {
        id: "farmProduction",
        group: "a",
        dependsOnSpecialBonuses: ["allowProductionResearch"],
        name: "农业生产",
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
        name: "伐木产业",
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
        name: "工具制造",
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
        name: "制药产业",
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
        name: "汽车产业",
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
        name: "潜心研究",
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
        name: "武器制造",
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
        name: "工人上限研究",
        price: {
            money: 5e4
        },
        priceIncrease: 1,
        max: 1,
        hideIfBought: !0,
        bonus: {
            type: "special",
            id: "allowMaxWorkersResearch",
            description: "打开最大工人研究选项"
        }
    }, {
        id: "farmMaxWorkers",
        group: "b",
        dependsOnSpecialBonuses: ["allowMaxWorkersResearch"],
        name: "农民上限",
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
        name: "伐木工上限",
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
        name: "工具工人上限",
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
        name: "制药工人上限",
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
        name: "造车工人上限",
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
        name: "研究员上限",
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
        name: "武器工人上限",
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
        name: "兵营士兵上限",
        price: {
            money: 5e8,
            knowledge: 200
        },
        priceIncrease: 2.5,
        max: null,
        bonus: {
            type: "buildingMaxWorkers",
            buildingId: "barracks",
            multiplayer: 1.25
        }
    }, {
        id: "priceResearch",
        group: "c",
        name: "价格研究",
        price: {
            money: 1e4
        },
        priceIncrease: 1,
        max: 1,
        hideIfBought: !0,
        bonus: {
            type: "special",
            id: "allowPriceResearch",
            description: "打开价格研究选项"
        }
    }, {
        id: "foodPrice",
        group: "c",
        dependsOnSpecialBonuses: ["allowPriceResearch"],
        name: "食物价格",
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
        name: "工具价格",
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
        name: "药物价格",
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
        name: "汽车价格",
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
        name: "士兵攻击",
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
        name: "武器效果",
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
        name: "士兵装备",
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
        name: "工人管理",
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
            description: "控制每个建筑物之间的工人分配"
        }
    }]
})
