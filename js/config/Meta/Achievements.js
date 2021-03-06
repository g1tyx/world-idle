define([], function () {
    var e = [{
            id: "supportScreen",
            group: "unlock",
            name: "Support screen",
            bonus: {
                type: "special",
                id: "supportScreen",
                description: "出现支持界面"
            },
            tests: [{
                type: "amountOfResources",
                resourceId: "money",
                amount: 2e4
            }]
        }, {
            id: "warMaking",
            group: "unlock",
            name: "Wars",
            bonus: {
                type: "special",
                id: "allowWars",
                description: '<span style="color:red">可以去打仗</span>'
            },
            tests: [{
                type: "amountOfPopulation",
                amount: 2e5
            }]
        }, {
            id: "genetics",
            group: "unlock",
            name: "Genetics",
            bonus: {
                type: "special",
                id: "allowGenetics",
                description: '<span style="color:orange">开始定制你的人民</span>'
            },
            tests: [{
                type: "amountOfPopulation",
                amount: 1e8
            }]
        }, {
            id: "amountOfPeople2000",
            group: "population",
            bonus: {
                type: "buildingProduction",
                buildingId: "farm",
                multiplayer: 1.03
            },
            tests: [{
                type: "amountOfPopulation",
                amount: 2e3
            }]
        }, {
            id: "amountOfPeople10000",
            group: "population",
            bonus: {
                type: "buildingProduction",
                buildingId: "farm",
                multiplayer: 1.03
            },
            tests: [{
                type: "amountOfPopulation",
                amount: 1e4
            }]
        }, {
            id: "amountOfPeople50000",
            depends: "amountOfPeople2000",
            group: "population",
            bonus: {
                type: "buildingProduction",
                buildingId: "farm",
                multiplayer: 1.03
            },
            tests: [{
                type: "amountOfPopulation",
                amount: 5e4
            }]
        }, {
            id: "amountOfPeople100000",
            depends: "amountOfPeople10000",
            group: "population",
            bonus: {
                type: "buildingProduction",
                buildingId: "farm",
                multiplayer: 1.03
            },
            tests: [{
                type: "amountOfPopulation",
                amount: 1e5
            }]
        }, {
            id: "amountOfPeople200000",
            depends: "amountOfPeople50000",
            group: "population",
            bonus: {
                type: "buildingProduction",
                buildingId: "farm",
                multiplayer: 1.03
            },
            tests: [{
                type: "amountOfPopulation",
                amount: 2e5
            }]
        }, {
            id: "amountOfPeople400000",
            depends: "amountOfPeople100000",
            group: "population",
            bonus: {
                type: "buildingProduction",
                buildingId: "farm",
                multiplayer: 1.03
            },
            tests: [{
                type: "amountOfPopulation",
                amount: 4e5
            }]
        }, {
            id: "amountOfPeople1000000",
            depends: "amountOfPeople200000",
            group: "population",
            bonus: {
                type: "buildingMaxWorkers",
                buildingId: "farm",
                multiplayer: 1.25
            },
            tests: [{
                type: "amountOfPopulation",
                amount: 1e6
            }]
        }, {
            id: "amountOfPeople5000000",
            depends: "amountOfPeople400000",
            group: "population",
            bonus: {
                type: "buildingMaxWorkers",
                buildingId: "farm",
                multiplayer: 1.25
            },
            tests: [{
                type: "amountOfPopulation",
                amount: 5e6
            }]
        }, {
            id: "amountOfPeople20000000",
            depends: "amountOfPeople1000000",
            group: "population",
            bonus: {
                type: "buildingMaxWorkers",
                buildingId: "farm",
                multiplayer: 1.25
            },
            tests: [{
                type: "amountOfPopulation",
                amount: 2e7
            }]
        }, {
            id: "amountOfPeople60000000",
            depends: "amountOfPeople5000000",
            group: "population",
            bonus: {
                type: "buildingMaxWorkers",
                buildingId: "farm",
                multiplayer: 1.25
            },
            tests: [{
                type: "amountOfPopulation",
                amount: 6e7
            }]
        }, {
            id: "amountOfPeople180000000",
            depends: "amountOfPeople20000000",
            group: "population",
            bonus: {
                type: "buildingMaxWorkers",
                buildingId: "farm",
                multiplayer: 2
            },
            tests: [{
                type: "amountOfPopulation",
                amount: 18e7
            }]
        }, {
            id: "amountOfPeople500000000",
            depends: "amountOfPeople60000000",
            group: "population",
            bonus: {
                type: "buildingMaxWorkers",
                buildingId: "farm",
                multiplayer: 1.5
            },
            tests: [{
                type: "amountOfPopulation",
                amount: 5e8
            }]
        }, {
            id: "amountOfPeople2000000000",
            depends: "amountOfPeople180000000",
            group: "population",
            bonus: {
                type: "buildingMaxWorkers",
                buildingId: "farm",
                multiplayer: 1.5
            },
            tests: [{
                type: "amountOfPopulation",
                amount: 2e9
            }]
        }, {
            id: "amountOfPeople10000000000",
            depends: "amountOfPeople2000000000",
            group: "population",
            bonus: {
                type: "buildingMaxWorkers",
                buildingId: "farm",
                multiplayer: 1.5
            },
            tests: [{
                type: "amountOfPopulation",
                amount: 1e10
            }]
        }, {
            id: "amountOfPeople100000000000",
            depends: "amountOfPeople10000000000",
            group: "population",
            bonus: {
                type: "buildingMaxWorkers",
                buildingId: "farm",
                multiplayer: 1.5
            },
            tests: [{
                type: "amountOfPopulation",
                amount: 1e11
            }]
        }, {
            id: "amountOfPeople1000000000000",
            depends: "amountOfPeople100000000000",
            group: "population",
            bonus: {
                type: "buildingMaxWorkers",
                buildingId: "farm",
                multiplayer: 1.5
            },
            tests: [{
                type: "amountOfPopulation",
                amount: 1e12
            }]
        }, {
            id: "amountOfPeople10000000000000",
            depends: "amountOfPeople1000000000000",
            group: "population",
            bonus: {
                type: "buildingMaxWorkers",
                buildingId: "farm",
                multiplayer: 1.5
            },
            tests: [{
                type: "amountOfPopulation",
                amount: 1e13
            }]
        }, {
            id: "amountOfPeople100000000000000",
            depends: "amountOfPeople10000000000000",
            group: "population",
            bonus: {
                type: "buildingMaxWorkers",
                buildingId: "farm",
                multiplayer: 1.5
            },
            tests: [{
                type: "amountOfPopulation",
                amount: 1e14
            }]
        }, {
            id: "amountOfPeople1000000000000000",
            depends: "amountOfPeople100000000000000",
            group: "population",
            bonus: {
                type: "buildingMaxWorkers",
                buildingId: "farm",
                multiplayer: 1.5
            },
            tests: [{
                type: "amountOfPopulation",
                amount: 1e15
            }]
        }],
        o = {
            farm: {
                name: "Farms",
                amounts: [15, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 900, 1e3, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2e3, 2200, 2400, 2600, 2800, 3e3, 3200, 3400, 3600, 3800, 4e3],
                bonus: {
                    type: "buildingMaxWorkers",
                    buildingId: "farm",
                    multiplayer: 1.05
                },
                tests: [{
                    type: "noOfBuildings",
                    noOfBuildings: 0,
                    buildingId: "farm"
                }]
            },
            woodCutter: {
                name: "Wood cutters",
                amounts: [15, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 900, 1e3, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2e3, 2200, 2400, 2600, 2800, 3e3, 3200, 3400, 3600, 3800, 4e3],
                bonus: {
                    type: "buildingMaxWorkers",
                    buildingId: "woodCutter",
                    multiplayer: 1.1
                },
                tests: [{
                    type: "noOfBuildings",
                    noOfBuildings: 0,
                    buildingId: "woodCutter"
                }],
                dependsOnBuilding: "woodCutter"
            },
            toolMaker: {
                name: "Tool makers",
                amounts: [10, 25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 375, 400, 550, 600, 700, 800, 900, 1e3, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2e3, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3e3],
                bonus: {
                    type: "buildingMaxWorkers",
                    buildingId: "toolMaker",
                    multiplayer: 1.1
                },
                tests: [{
                    type: "noOfBuildings",
                    noOfBuildings: 0,
                    buildingId: "toolMaker"
                }],
                dependsOnBuilding: "toolMaker"
            },
            medicineFactory: {
                name: "Medicine factory",
                amounts: [10, 20, 35, 50, 70, 90, 120, 150, 180, 220, 260, 300, 340, 380, 420, 460, 500, 550, 600, 700, 800, 900, 1e3, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2e3, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3e3],
                bonus: {
                    type: "buildingMaxWorkers",
                    buildingId: "medicineFactory",
                    multiplayer: 1.1
                },
                tests: [{
                    type: "noOfBuildings",
                    noOfBuildings: 0,
                    buildingId: "medicineFactory"
                }],
                dependsOnBuilding: "medicineFactory"
            },
            carFactory: {
                name: "Car factory",
                amounts: [10, 20, 35, 50, 70, 90, 120, 150, 180, 220, 260, 300, 340, 380, 420, 460, 500, 550, 600, 700, 800, 900, 1e3, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2e3, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3e3],
                bonus: {
                    type: "buildingMaxWorkers",
                    buildingId: "carFactory",
                    multiplayer: 1.1
                },
                tests: [{
                    type: "noOfBuildings",
                    noOfBuildings: 0,
                    buildingId: "carFactory"
                }],
                dependsOnBuilding: "carFactory"
            },
            researchCenter: {
                name: "Research center",
                amounts: [10, 20, 35, 50, 70, 90, 120, 150, 180, 220, 260, 300, 340, 380, 420, 460, 500, 550, 600, 700, 800, 900, 1e3, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2e3, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3e3],
                bonus: {
                    type: "buildingMaxWorkers",
                    buildingId: "researchCenter",
                    multiplayer: 1.1
                },
                tests: [{
                    type: "noOfBuildings",
                    noOfBuildings: 0,
                    buildingId: "researchCenter"
                }],
                dependsOnBuilding: "researchCenter"
            },
            weaponsFactory: {
                name: "Weapon factory",
                amounts: [5, 10, 20, 30, 40, 50, 75, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 900, 1e3, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2e3, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3e3],
                bonus: {
                    type: "buildingMaxWorkers",
                    buildingId: "weaponsFactory",
                    multiplayer: 1.05
                },
                tests: [{
                    type: "noOfBuildings",
                    noOfBuildings: 0,
                    buildingId: "weaponsFactory"
                }],
                dependsOnBuilding: "weaponsFactory"
            }
        }
    for (var n in o) {
        var t = o[n]
        for (var u in t.amounts) {
            var i = JSON.parse(JSON.stringify(t.tests))
            i[0].noOfBuildings = t.amounts[u], e.push({
                id: n + "_" + t.amounts[u],
                name: t.name + " " + t.amounts[u],
                depends: u >= 2 ? n + "_" + t.amounts[u - 2] : null,
                group: n,
                bonus: t.bonus,
                tests: i,
                dependsOnBuilding: t.dependsOnBuilding
            })
        }
    }
    return e
})
