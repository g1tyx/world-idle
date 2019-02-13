define([],function(){var e=function(e,r){this.game=e,this.researchId=r,this.research=this.game.getResearch(r)}
return e.prototype.canBuy=function(){var e=1
if(!this.research.canBuyMore())return!1
var r=this.research.getPrice(e)
for(var t in r)if(this.game.getResource(t).getAmount().compare(r[t])<0)return!1
return!0},e.prototype.buy=function(){var e=1,r=this.research.getPrice(e)
for(var t in r)if(this.game.getResource(t).getAmount().compare(r[t])<0)return!1
for(var a in r)this.game.getResource(a).subtractAmount(r[a])
this.research.addAmount(1),ga("send","event","research","buyResearch",this.research.getMeta().id,this.research.getAmount())},e})
