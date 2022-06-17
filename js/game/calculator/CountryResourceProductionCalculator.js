define([],function(){var e=function(e){this.game=e}
return e.prototype.calculate=function(){var e={}
for(var t in this.game.getMeta().resourcesById)e[t]=new BigNumber(0)
var r=this.game.getMeta().countriesById
for(var o in r){var i=this.game.getCountries(o)
for(var n in i){var a=i[n]
a.getIsConquered()&&(e[a.getProductionResourceId()]=e[a.getProductionResourceId()].add(a.getProduction()))}}this.game.setCountriesResourceProduction(e)},e})
