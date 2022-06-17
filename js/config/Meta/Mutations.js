define([], function () {
    return [{
        id: "birthRates",
        name: "婴儿",
        description: "提高出生率.<br />小心,这可能使你的人口不稳定!",
        multiplayer: 1e-4,
        slow: 1.5
    }, {
        id: "deathRates",
        name: "傻瓜",
        description: "提高死亡率.<br />小心,这可能使你的人口不稳定!",
        multiplayer: 1e-4,
        slow: 1.5
    }, {
        id: "maxStorage",
        name: "更好的食物",
        description: "提高食物最大库存.<br />小心,这可能使你的人口不稳定!",
        multiplayer: .01,
        slow: 1.5
    }, {
        id: "buyMoreMedicine",
        name: "病态",
        description: "人们购买更多药物",
        multiplayer: 5e-4,
        slow: 1.3
    }, {
        id: "buyMoreToolsAndCars",
        name: "消费者",
        description: "购买更多汽车和工具",
        multiplayer: 5e-4,
        slow: 1.3
    }, {
        id: "buildingPrices",
        name: "实在",
        description: "降低建筑物价格",
        multiplayer: .002,
        slow: 1.2,
        type: "fixed"
    }, {
        id: "woodProduction",
        name: "更强壮",
        description: "提高木材产量",
        multiplayer: .001,
        slow: 1.2
    }, {
        id: "attack",
        name: "侵略",
        description: "提高士兵和武器的攻击",
        multiplayer: .001,
        slow: 1.4
    }, {
        id: "knowledgeProduction",
        name: "更聪明",
        description: "提高研究速度",
        multiplayer: .001,
        slow: 1.005
    }]
})