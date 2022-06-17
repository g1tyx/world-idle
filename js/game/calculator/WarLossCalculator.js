define([],function(){var t=function(t){this.game=t}
return t.prototype.calculate=function(t){for(var o=18+t.yearsOffset,a=50+t.yearsOffset,e=t.dies,i=0,p=o;a>p;p++){var u=this.game.getPopulationGroup().getPopulations()[p]
if(!u)break
i+=u.getMales()}for(var l=e.divide(this.game.getPopulationGroup().getTotalPopulation().multiply(i/100)).valueOf(),n=0,g={},p=o;a>p;p++){var u=this.game.getPopulationGroup().getPopulations()[p]
if(!u)break
var s=l*(.8+.4*Math.random())
s>1&&(s=1),g[p]={malesChange:u.getMales()*s,populationChange:u.getPopulation()*u.getMales()*s},n+=g[p].populationChange}var r=this.game.getPopulationGroup().getTotalPopulation()
return{populationLoss:r.multiply(n/100),populationLossByAge:g}},t.prototype.tick=function(t){var o=0
for(var a in this.game.getPopulationGroup().getPopulations()){var e=this.game.getPopulationGroup().getPopulations()[a],i=t.populationLossByAge[a]
if(i){var p=e.getMales()-i.malesChange
e.setMales(p/(1-e.getMales()+p)),e.setPopulation(e.getPopulation()-i.populationChange)}o+=e.getPopulation()}for(var u in this.game.getPopulationGroup().getPopulations()){var l=this.game.getPopulationGroup().getPopulations()[u]
l.setPopulation(l.getPopulation()/o*100)}var n=this.game.getPopulationGroup().getTotalPopulation()
this.game.getPopulationGroup().setTotalPopulation(n.subtract(t.populationLoss))},t})
