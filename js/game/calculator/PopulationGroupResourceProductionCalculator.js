define([],function(){var e=function(e){this.game=e}
return e.prototype.calculate=function(){var e={},t={},o=this.game.getMeta().population,r=this.game.getPopulationGroup().getResourceUsageData()
for(var i in r){var u=o.resources[i]
for(var a in u.price){e[a]||(e[a]=new BigNumber(0))
var n=r[i].gets.multiply(u.price[a])
n=n.multiply(this.game.getBonuses().populationGroupProduction[i].price),e[a]=e[a].add(n),t[i]||(t[i]={}),t[i][a]=n}}this.game.getPopulationGroup().setResourceProduction(e),this.game.getPopulationGroup().setResourceProductionByResource(t)},e})
