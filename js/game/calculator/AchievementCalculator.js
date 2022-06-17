define([], function () {
    var e = function (e, t) {
        this.game = e, this.bonusCalculator = t, this.handlers = {
            noOfBuildings: {
                getRequirementsInfoText: function (t) {
                    var n = e.getMeta().buildingsById[t.buildingId]
                    return "你拥有 " + t.noOfBuildings + " " + (1 == t.noOfBuildings ? n.name : n.namePlural).lcFirst()
                },
                test: function (t) {
                    return t.noOfBuildings <= e.getBuilding(t.buildingId).getAmount()
                }
            },
            amountOfResources: {
                getRequirementsInfoText: function (t) {
                    return "你拥有 " + e.getResource(t.resourceId).getMeta().name + ": " + t.amount
                },
                test: function (t) {
                    return e.getResource(t.resourceId).getAmount().compare(new BigNumber(t.amount)) > 0
                }
            },
            amountOfPopulation: {
                getRequirementsInfoText: function (e) {
                    return "你拥有 " + numberFormat.format(e.amount) + " 人口在你的国家!"
                },
                test: function (t) {
                    return e.getPopulationGroup().getTotalPopulation().compare(new BigNumber(t.amount)) > 0
                }
            }
        }
    }
    return e.prototype.calculate = function (e) {
        for (var t in this.game.getMeta().achievementsById) {
            var n = this.game.getMeta().achievementsById[t],
                i = this.game.getAchievement(t)
            if (!i.isAchieved()) {
                var o = !0
                for (var r in n.tests)
                    if (!this.test(n.tests[r])) {
                        o = !1
                        break
                    }
                o && (i.setAchieved(!0), this.eventAchievedEventListener && this.eventAchievedEventListener(t))
            }
            i.isAchieved() && this.bonusCalculator.updateBonuses(e, i.getMeta().bonus)
        }
    }, e.prototype.getRequirementsInfoText = function (e) {
        return e && e.type ? this.handlers[e.type].getRequirementsInfoText(e) : ""
    }, e.prototype.test = function (e) {
        return e && e.type ? this.handlers[e.type].test(e) : void logger.error("AchievementHandler", "test called without meta!", e)
    }, e.prototype.setAchievedEventListener = function (e) {
        this.eventAchievedEventListener = e
    }, e
})
