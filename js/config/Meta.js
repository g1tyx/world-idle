define(["config/Meta/Buildings", "config/Meta/Researches", "config/Meta/Achievements", "config/Meta/Resources", "config/Meta/Mutations"], function (e, o, r, s, n) {
    var a = {
        version: 1,
        worlds: [{
            id: "default",
            startYear: 20,
            ticksPerSecond: 3,
            secondsToGainOneYear: 1.5,
            secondsToGainOneExtraYear: 10,
            maxExtraYears: 7200,
            startingExtraYears: 0,
            resources: s,
            mutations: n,
            population: {
                minPopulation: 1e3,
                startingPopulation: 1500,
                minWorkAge: 18,
                maxWorkAge: 65,
                womenWorkCoefficient: .6,
                birthBalanceForMen: .53,
                birthRatesStrategy: "real",
                deathRatesStrategy: "real",
                medicineResourceId: "medicine",
                oneGenePerBirths: 8e8,
                startingDistribution: [1.8165289058231437, 1.81014263032177, 1.8018948398806511, 1.7949786781927721, 1.7909103492106893, 1.7877835741406785, 1.7822323880227513, 1.778501038956791, 1.7745825061456109, 1.767060907987758, 1.7603640005524115, 1.7551517756269108, 1.7502390297807475, 1.7435998278617288, 1.7349160521387004, 1.7238092113261292, 1.7133019514197425, 1.7026027793455656, 1.6928656887421252, 1.6811285251305748, 1.6710720980069125, 1.660182686113157, 1.6496474116679125, 1.6408851176587864, 1.6334159902333032, 1.6248355639793128, 1.618038126557086, 1.6107644569156965, 1.603763443824522, 1.6005869106865152, 1.5960418346411323, 1.5878284413467292, 1.5817878944337072, 1.577999806618023, 1.5744459803409923, 1.5606093238608802, 1.5502865940151427, 1.5401893119205836, 1.5303573488442317, 1.5160042489919032, 1.4970533958096757, 1.4755747473538712, 1.4537981689171278, 1.4344575726325242, 1.411556197884392, 1.3764037985523594, 1.3412799081524207, 1.307842007374101, 1.2749083805604944, 1.2424569416865108, 1.1956988852121953, 1.1526664640077267, 1.1117060934772953, 1.0750753650415468, 1.0404765364028556, .9968830492959516, .9559050568316594, .9185788534512503, .8836990832290734, .8503333074288754, .8053134986298357, .7633348271194136, .7225149843912234, .6841691792365762, .6466306143106272, .5825676953447992, .5240132696895391, .4710840477299492, .42258302745449994, .3777065026989948, .3113725781026916, .2564765958912049, .2104215814064629, .17211759342257563, .14036492712141768, .09102811501020859, .05898921682323315, .03818244364033464, .024692515457044942, .01597880956798029, .0036709159190080973],
                resources: {
                    food: {
                        price: {
                            money: .01
                        },
                        consumption: 1,
                        moodRange: 125,
                        moodNegativeFrom: 100,
                        positiveMoodFactor: 4,
                        negativeMoodFactor: 50,
                        maxMoodBonus: 0
                    },
                    tools: {
                        price: {
                            money: .5
                        },
                        consumption: .02,
                        moodRange: 120,
                        moodNegativeFrom: 100,
                        positiveMoodFactor: 0,
                        negativeMoodFactor: 0,
                        maxMoodBonus: 1
                    },
                    medicine: {
                        price: {
                            money: 9.1
                        },
                        consumption: .015,
                        moodRange: 120,
                        moodNegativeFrom: 100,
                        positiveMoodFactor: 0,
                        negativeMoodFactor: 0,
                        maxMoodBonus: 2
                    },
                    cars: {
                        price: {
                            money: 35
                        },
                        consumption: .001,
                        moodRange: 120,
                        moodNegativeFrom: 100,
                        positiveMoodFactor: 0,
                        negativeMoodFactor: 0,
                        maxMoodBonus: 0
                    }
                }
            },
            buildings: e,
            researches: o,
            achievements: r,
            war: {
                soldierStrength: .01,
                weaponStrength: .02,
                fightingYears: 8,
                restingYears: 8
            },
            countries: [{
                id: "west",
                name: "西边",
                description: "大量的食物,知识和财富.你越深入就会遇到越强的敌人.",
                soldiers: 3500,
                soldiersIncrease: 1.21,
                recoveryRate: .01,
                strength: .275,
                tiles: [8, 9, 7, 10, 12, 8, 11, 13],
                terrains: ["grassland", "grassland", "forest", "mountain", "forest", "grassland", "grassland", "mountain", "grassland"],
                subIncrease: 1.005,
                productionIncrease: 1.21,
                productionOrder: ["money", "money", "food", "knowledge"],
                production: {
                    money: 3e4,
                    food: 8e3,
                    knowledge: 2.5
                }
            }, {
                id: "east",
                name: "东边",
                description: "大量的木材和财富.国家虽小,但是防御力可不弱.",
                soldiers: 15e3,
                soldiersIncrease: 1.12,
                recoveryRate: .01,
                strength: .042 * 5,
                tiles: [5, 6, 8, 5, 9, 7],
                terrains: ["grassland", "sand", "sea", "sea", "sand", "grassland", "forest", "grassland", "mountain", "grassland"],
                subIncrease: 1.04,
                productionIncrease: 1.2,
                productionOrder: ["wood", "money"],
                production: {
                    money: 3e4,
                    wood: 700
                }
            }, {
                id: "north",
                name: "北边",
                description: "大量的武器和财富.国家很大且防御牢固.",
                soldiers: 25e3,
                soldiersIncrease: 1.09,
                recoveryRate: .01,
                strength: .325,
                tiles: [13, 12, 11, 14, 15, 10, 11],
                terrains: ["sea", "sand", "mountain", "forest", "sand", "grassland", "forest", "grassland", "mountain", "grassland"],
                subIncrease: 1.04,
                productionIncrease: 1.09,
                productionOrder: ["weapons", "money"],
                production: {
                    money: 16e5,
                    weapons: 100
                }
            }]
        }]
    }
    for (var t in a.worlds) {
        var i = a.worlds[t]
        i.achievementsById = {}, i.buildingsById = {}, i.resourcesById = {}, i.researchesById = {}, i.countriesById = {}, i.mutationsById = {}
        for (var d in i.achievements) {
            var c = i.achievements[d]
            i.achievementsById[c.id] = c
        }
        for (var u in i.buildings) {
            var g = i.buildings[u]
            i.buildingsById[g.id] = g
        }
        for (var m in i.resources) {
            var l = i.resources[m]
            i.resourcesById[l.id] = l
        }
        for (var v in i.researches) {
            var h = i.researches[v]
            i.researchesById[h.id] = h
        }
        for (var d in i.countries) {
            var f = i.countries[d]
            i.countriesById[f.id] = f
        }
        for (var p in i.mutations) {
            var y = i.mutations[p]
            i.mutationsById[y.id] = y
        }
    }
    return a
})
