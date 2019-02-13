define([], function () {
    var e = function (e) {
        this.game = e, this.handlers = {
            buildingProduction: {
                getBonusInfoText: function (n) {
                    var t = e.getMeta().buildingsById[n.buildingId],
                        r = Math.round(100 * n.multiplayer - 100)
                    return t.name + " 产量 +" + r + "%"
                },
                updateBonuses: function (e, n) {
                    e.buildings[n.buildingId].production = e.buildings[n.buildingId].production.multiply(n.multiplayer)
                }
            },
            populationProductionPrice: {
                getBonusInfoText: function (n) {
                    var t = e.getMeta().resourcesById[n.resourceId]
                    t || (console.error("Missing resource " + n.resourceId), console.error(n))
                    var r = Math.round(100 * n.multiplayer - 100)
                    return t.name + " 购买价格 +" + r + "%"
                },
                updateBonuses: function (e, n) {
                    e.populationGroupProduction[n.resourceId].price = e.populationGroupProduction[n.resourceId].price.multiply(n.multiplayer)
                }
            },
            buildingMaxWorkers: {
                getBonusInfoText: function (n) {
                    var t = e.getMeta().buildingsById[n.buildingId],
                        r = Math.round(100 * n.multiplayer - 100)
                    return t.name + " 工人上限 +" + r + "%"
                },
                updateBonuses: function (e, n) {
                    e.buildings[n.buildingId].maxWorkers = e.buildings[n.buildingId].maxWorkers.multiply(n.multiplayer)
                }
            },
            soldiersStrength: {
                getBonusInfoText: function (e) {
                    var n = Math.round(100 * e.multiplayer - 100)
                    return "增加士兵攻击力 " + n + "%"
                },
                updateBonuses: function (e, n) {
                    e.war.soldiersStrength = e.war.soldiersStrength.multiply(n.multiplayer)
                }
            },
            weaponsStrength: {
                getBonusInfoText: function (e) {
                    var n = Math.round(100 * e.multiplayer - 100)
                    return "增加武器攻击力 " + n + "%"
                },
                updateBonuses: function (e, n) {
                    e.war.weaponStrength = e.war.weaponStrength.multiply(n.multiplayer)
                }
            },
            takeWeapons: {
                getBonusInfoText: function (e) {
                    var n = Math.round(100 * e.multiplayer - 100)
                    return "士兵可携带武器增加 " + n + "%"
                },
                updateBonuses: function (e, n) {
                    e.war.takeWeapons = e.war.takeWeapons.multiply(n.multiplayer)
                }
            },
            special: {
                getBonusInfoText: function (e) {
                    return e.description
                },
                updateBonuses: function (e, n) {
                    e.specials[n.id] || (e.specials[n.id] = 0), e.specials[n.id]++
                }
            }
        }
    }
    return e.prototype.getBaseBonuses = function () {
        var e = {
            war: {
                soldiersStrength: new BigNumber(1),
                weaponStrength: new BigNumber(1),
                takeWeapons: new BigNumber(1)
            },
            buildings: {},
            populationGroupProduction: {},
            specials: {}
        }
        for (var n in this.game.getBuildings()) e.buildings[n] = {
            production: new BigNumber(1),
            maxWorkers: new BigNumber(1)
        }
        for (var t in this.game.getMeta().population.resources) e.populationGroupProduction[t] = {
            price: new BigNumber(1)
        }
        return e
    }, e.prototype.getBonusInfoText = function (e) {
        return e && e.type ? this.handlers[e.type].getBonusInfoText(e) : ""
    }, e.prototype.updateBonuses = function (e, n) {
        return n && n.type ? this.handlers[n.type].updateBonuses(e, n) : void 0
    }, e
})
