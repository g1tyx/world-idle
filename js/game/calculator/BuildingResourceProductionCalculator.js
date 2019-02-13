define([],function(){var t=function(t){this.game=t,this.totalProduction=null}
return t.prototype._getBuildingProduction=function(t,o){return t.getMeta().production[o]},t.prototype.calculate=function(){var t={}
for(var o in this.game.getResources())t[o]=new BigNumber(0)
for(var e in this.game.getBuildings()){var i=this.game.getBuilding(e),u={}
for(var n in i.getMeta().production){var r=new BigNumber(this._getBuildingProduction(i,n)).multiply(this.game.getBonuses().buildings[e].production).multiply(this._getResourceProductionBonuses(i)).multiply(this.game.getTimer().getTickMultiplayer())
"wood"==n?r=r.multiply(this.game.getMutation("woodProduction").getBonus()):"knowledge"==n&&(r=r.multiply(this.game.getMutation("knowledgeProduction").getBonus())),u[n]={productionPerWorker:r,totalProduction:i.getWorkerData().gets.multiply(r)},t[n]=t[n].add(u[n].totalProduction)}i.setResourceProduction(u)}this.totalProduction=t},t.prototype._getResourceProductionBonuses=function(t){var o=1,e=t.getMeta().soldResourcesBonus
if(e)for(var i in e){var u=this.game.getPopulationGroup().getResourceUsageData()
u&&u[i]&&(o+=Math.min(1,u[i].gets.divide(u[i].need).valueOf())*e[i])}return o},t.prototype.getTotalProduction=function(){return this.totalProduction},t})
