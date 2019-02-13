define([],function(){var t=function(t,i){this.game=t,this.building=i}
return t.prototype.canBuy=function(t){var i=this.building.getPrice(t,this.game)
for(var e in i)if(this.game.getResource(e).getAmount().compare(i[e])<0)return!1
return!0},t.prototype.buy=function(t){var i=this.building.getPrice(t,this.game)
for(var e in i)if(this.game.getResource(e).getAmount().compare(i[e])<0)return!1
for(var n in i)this.game.getResource(n).subtractAmount(i[n])
return this.building.addAmount(t),ga("send","event","buildings","buyBuilding",this.building.getMeta().id,this.building.getAmount().valueOf()),!0},t})
