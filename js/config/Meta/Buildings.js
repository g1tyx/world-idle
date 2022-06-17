define([], function () {
    return [{
        id: "farm",
        name: "农场",
        namePlural: "农场",
        description: "生产食物",
        startingAmount: 6,
        price: {
            money: 250,
            wood: 25
        },
        priceIncrease: 1.01,
        maxWorkers: 125,
        production: {
            food: 2.1
        },
        soldResourcesBonus: {
            tools: .25,
            cars: .25
        }
    }, {
        id: "woodCutter",
        name: "伐木场",
        namePlural: "伐木场",
        description: "生产木材",
        startingAmount: 0,
        price: {
            money: 1500
        },
        priceIncrease: 1.018,
        maxWorkers: 150,
        production: {
            wood: .0042
        },
        soldResourcesBonus: {
            tools: .5,
            cars: .5
        }
    }, {
        id: "toolMaker",
        name: "工具厂",
        namePlural: "工具厂",
        description: "生产工具.工具可以大量提高食物和木材产量.(如果你生产足够的汽车将会达到最大效果)",
        dependsOnBuilding: "woodCutter",
        startingAmount: 0,
        price: {
            money: 2500,
            wood: 250
        },
        priceIncrease: 1.02,
        maxWorkers: 200,
        production: {
            tools: .269
        }
    }, {
        id: "medicineFactory",
        name: "制药工厂",
        namePlural: "制药工厂",
        description: "生产药物.药物可以提高平均寿命.卖药十分赚钱.",
        dependsOnBuilding: "toolMaker",
        startingAmount: 0,
        price: {
            money: 25e3,
            wood: 1e3
        },
        priceIncrease: 1.03,
        maxWorkers: 500,
        production: {
            medicine: .27
        }
    }, {
        id: "carFactory",
        name: "汽车工厂",
        namePlural: "汽车工厂",
        description: "生产汽车.汽车可以大量提高食物和木材产量.(如果你生产足够的汽车将会达到最大效果)",
        dependsOnBuilding: "medicineFactory",
        startingAmount: 0,
        price: {
            money: 25e4,
            wood: 6e3
        },
        priceIncrease: 1.03,
        maxWorkers: 1500,
        production: {
            cars: .017
        }
    }, {
        id: "researchCenter",
        name: "研究中心",
        namePlural: "研究中心",
        description: "生产知识",
        dependsOnBuilding: "toolMaker",
        startingAmount: 0,
        price: {
            money: 1e6,
            wood: 2e4,
            tools: 1e4
        },
        priceIncrease: 1.2,
        maxWorkers: 1e4,
        production: {
            knowledge: 12e-6
        }
    }, {
        id: "weaponsFactory",
        name: "武器工厂",
        namePlural: "武器工厂",
        description: "生产武器.武器在战斗中非常有用.",
        dependsOnBuilding: "barracks",
        startingAmount: 0,
        price: {
            money: 5e7,
            wood: 1e5,
            tools: 2e5,
            cars: 4e4
        },
        priceIncrease: 1.07,
        maxWorkers: 1e5,
        production: {
            weapons: .0034
        }
    }, {
        id: "barracks",
        name: "兵营",
        namePlural: "兵营",
        description: "训练士兵.工人可以加入军队参加战争.",
        dependsOnBuilding: "toolMaker",
        startingAmount: 0,
        price: {
            money: 35e3,
            wood: 500
        },
        priceIncrease: 1.02,
        maxWorkers: 5e3,
        production: {}
    }]
})
