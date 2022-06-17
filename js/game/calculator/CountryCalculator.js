define(["entity/Country"],function(e){var t=function(e){this.game=e,this.priceCalculators={}}
return t.prototype.tickYear=function(){var e=this.game.getMeta().countries
for(var t in e){var r=e[t],o=this.game.getLastCountry(r.id)
!o||o.getIsConquered()?this.createNewCountry(r,o):this.recoverPopulation(r,o)}},t.prototype.createNewCountry=function(t,r){var o=1
r&&(o=r.getLevel()+1)
var i=new e(t,o)
i.setup(),this.game.setCountry(t.id,o,i)},t.prototype.recoverPopulation=function(e,t){var r=t.getMaxSoldiers(),o=t.getSoldiers()
if(o.compare(r)<0){var i=t.getSoldiers().add(r.multiply(e.recoveryRate))
i.compare(r)>=0&&(i=r),t.setSoldiers(i)}o.compare(r)>0&&t.setSoldiers(r)},t})
