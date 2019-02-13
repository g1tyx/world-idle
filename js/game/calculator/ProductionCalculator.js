define([],function(){var t=function(t){this.game=t}
return t.prototype.calculate=function(t){var e=t,o=this.game.getPopulationGroup().getResourceProduction()
for(var a in o)e[a]=e[a].add(o[a])
for(var a in this.game.getMeta().resourcesById)e[a]=e[a].add(this.game.getCountriesResourceProduction(a).multiply(this.game.getTimer().getTickMultiplayer()))
this.game.setResourceTotalProduction(e)},t.prototype.tick=function(){for(var t in this.game.getResources()){var e=this.game.getResource(t),o=this.game.getResourceTotalProduction(t)
if(this.game.getResource(t).addAmount(o),e.getMeta().maxStorage){var a=o.multiply(e.getMeta().maxStorage).multiply(this.game.getMutation("maxStorage").getBonus())
e.getAmount().compare(a)>0&&e.setAmount(a)}}},t})
