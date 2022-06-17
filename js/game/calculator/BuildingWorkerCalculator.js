define([],function(){var e=function(e){this.game=e}
return e.prototype._getWorkersPercentage=function(){var e=0,t=this.game.getPopulationGroup().getPopulations(),r=this.game.getPopulationGroup().getMeta()
for(var a in t)a>=r.minWorkAge&&a<=r.maxWorkAge&&(e+=t[a].getMales()*t[a].getPopulation()+t[a].getFemales()*t[a].getPopulation()*r.womenWorkCoefficient)
return e},e.prototype._getMaxWorkersBuildingCanUse=function(e){var t=new BigNumber(e.getMeta().maxWorkers)
return t=t.multiply(this.game.getBonuses().buildings[e.getMeta().id].maxWorkers)},e.prototype.calculate=function(){var e=this._getWorkersPercentage(),t=this.game.getPopulationGroup().getTotalPopulation().multiply(e/100)
for(var r in this.game.getArmies()){var a=this.game.getArmy(r)
"fighting"==a.state&&(t=t.subtract(a.getSoldiers()))}var o=t,i=new BigNumber(0),g=new BigNumber(0)
for(var n in this.game.getBuildings()){var s=this.game.getBuilding(n),u=this._getMaxWorkersBuildingCanUse(s).multiply(s.getAmount()),l=u.multiply(s.getWorkersPercentage()/100),m=l
m.compare(o)>0&&(m=o),o=o.subtract(m),s.setWorkerData({max:u,needed:l,gets:m}),g=g.add(l),i=i.add(m)}this.game.getPopulationGroup().setWorkerData({totalAvailableWorkers:t,totalNeeded:g,totalGets:i,workersPercentage:e})},e})
