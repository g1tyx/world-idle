define([],function(){var e=function(e){this.game=e}
return e.prototype.calculate=function(){var e={}
for(var t in this.game.getResources()){var o=this.game.getPopulationGroup().getMeta().resources[t]
if(o){var a=this.game.getPopulationGroup().getTotalPopulation(),i=a.multiply(o.consumption*this.game.getTimer().getTickMultiplayer())
i.compare(0)<=0&&(i=new BigNumber(0)),"medicine"==t?i=i.multiply(this.game.getMutation("buyMoreMedicine").getBonus()):"tools"==t?i=i.multiply(this.game.getMutation("buyMoreToolsAndCars").getBonus()):"cars"==t&&(i=i.multiply(this.game.getMutation("buyMoreToolsAndCars").getBonus()))
var u=this.game.getResource(t).getAmount(),r=i
i.compare(u)>0&&(r=u),e[t]={need:i,have:u,gets:r}}}this.game.getPopulationGroup().setResourceUsageData(e)},e.prototype.tick=function(){var e=this.game.getPopulationGroup().getResourceUsageData()
for(var t in e){var o=e[t].gets.multiply(-1)
this.game.getResource(t).addAmount(o)}},e})
