define(["entity/Resource","entity/Building","entity/Research","entity/Achievement","population/PopulationGroup","entity/Mutation","game/Timer","entity/Army","entity/Country"],function(e,t,s,i,o,r,n,a,u){var h=function(u){this.meta=u,this.timer=new n({year:this.meta.startYear,ticksPerSecond:this.meta.ticksPerSecond,secondsToGainOneYear:this.meta.secondsToGainOneYear,secondsToGainOneExtraYear:this.meta.secondsToGainOneExtraYear,startingExtraYears:this.meta.startingExtraYears,maxExtraYears:this.meta.maxExtraYears}),this.bonusesUsed={},this.resources={}
for(var h in this.meta.resources)this.resources[this.meta.resources[h].id]=new e(this.meta.resources[h])
this.buildings={}
for(var c in this.meta.buildings)this.buildings[this.meta.buildings[c].id]=new t(this.meta.buildings[c])
this.researches={}
for(var p in this.meta.researches)this.researches[this.meta.researches[p].id]=new s(this.meta.researches[p])
this.achievements={}
for(var m in this.meta.achievements)this.achievements[this.meta.achievements[m].id]=new i(this.meta.achievements[m])
this.armies=[new a(u.war)],this.countries={},this.populationGroup=new o(this),this.mutations={}
for(var g in this.meta.mutations)this.mutations[this.meta.mutations[g].id]=new r(this.meta.mutations[g])
this.genes=new BigNumber(0),this.newGenes=new BigNumber(0),this.resourceTotalProduction=null,this.countriesResourceProduction=null,this.bonuses=null}
return h.prototype.getMeta=function(){return this.meta},h.prototype.getTimer=function(){return this.timer},h.prototype.getPopulationGroup=function(){return this.populationGroup},h.prototype.getResources=function(){return this.resources},h.prototype.getResource=function(e){return this.resources[e]},h.prototype.getBuildings=function(){return this.buildings},h.prototype.getBuilding=function(e){return this.buildings[e]},h.prototype.getResearches=function(){return this.researches},h.prototype.getResearch=function(e){return this.researches[e]},h.prototype.getAchievements=function(){return this.achievements},h.prototype.getAchievement=function(e){return this.achievements[e]},h.prototype.getArmies=function(){return this.armies},h.prototype.getArmy=function(e){return this.armies[e]},h.prototype.getCountries=function(e){return this.countries[e]},h.prototype.getLastCountry=function(e){return this.countries[e]?this.countries[e][this.countries[e].length-1]:void 0},h.prototype.setCountry=function(e,t,s){this.countries[e]||(this.countries[e]=[]),this.countries[e][t]=s},h.prototype.getGenes=function(){return this.genes},h.prototype.setGenes=function(e){this.genes=new BigNumber(e)},h.prototype.getNewGenes=function(){return this.newGenes},h.prototype.setNewGenes=function(e){this.newGenes=new BigNumber(e)},h.prototype.getMutations=function(){return this.mutations},h.prototype.getMutation=function(e){return this.mutations[e]},h.prototype.setMutations=function(e){this.mutations=e},h.prototype.getCountriesResourceProduction=function(e){return this.countriesResourceProduction[e]},h.prototype.setCountriesResourceProduction=function(e){this.countriesResourceProduction=e},h.prototype.getResourceTotalProduction=function(e){return this.resourceTotalProduction[e]},h.prototype.setResourceTotalProduction=function(e){this.resourceTotalProduction=e},h.prototype.getBonuses=function(){return this.bonuses},h.prototype.setBonuses=function(e){this.bonuses=e},h.prototype.hasSpecialBonuses=function(e){if(!e)return!0
var t=!0
for(var s in e)if(!this.bonuses.specials[e[s]]){t=!1
break}return t},h.prototype.setBoughtBonuses=function(e){this.bonusesUsed=e},h.prototype.getBoughtBonuses=function(){return this.bonusesUsed},h.prototype.getBoughtBonus=function(e){return this.bonusesUsed[e]?this.bonusesUsed[e]:!1},h.prototype.useBonuses=function(e){logger.info("Game","Use bonuses",e),this.bonusesUsed||(this.bonusesUsed={})
for(var t in e){var s=e[t]
if(this.bonusesUsed[s.id])logger.info("Game","Bonus already used "+s.id)
else if(this.bonusesUsed[s.id]=!0,logger.info("Game","Use bonus",s),"smallsupport"==s.type)logger.info("Game","Loaded bonus smallsupport"),this.getTimer().addExtraYears(5e3)
else if("bigsupport"==s.type)logger.info("Game","Loaded bonus bigsupport"),this.getTimer().addExtraYears(2e4)
else if("hugesupport"==s.type)logger.info("Game","Loaded bonus hugesupport"),this.getTimer().addExtraYears(8e4)
else if("chronometer"==s.type)logger.info("Game","Loaded bonus bigsupport"),this.bonusesUsed.chronometer=!0,this.getTimer().setChronometer(this.bonusesUsed.chronometer)
else if("bonus_for_update_1"==s.type){var i=0
this.populationGroup.getTotalPopulation().compare(1e10)>0?i=2e4:this.populationGroup.getTotalPopulation().compare(1e8)>0&&(i=1e4),console.log(this.populationGroup.getTotalPopulation().toString()+" "+i),logger.info("Game","Loaded bonus bonus_for_update_1"),this.getTimer().addExtraYears(i)}}},h.prototype.getSaveData=function(){var e={timer:this.timer.getSaveData(),populationGroup:this.populationGroup.getSaveData(),bonusesUsed:this.bonusesUsed,genes:this.genes.toString(),newGenes:this.newGenes.toString(),mutations:{},resources:{},buildings:{},researches:{},achievements:{},armies:{},countries:{}}
for(var t in this.mutations)e.mutations[t]=this.mutations[t].getSaveData()
for(var t in this.resources)e.resources[t]=this.resources[t].getSaveData()
for(var t in this.buildings)e.buildings[t]=this.buildings[t].getSaveData()
for(var t in this.researches)e.researches[t]=this.researches[t].getSaveData()
for(var t in this.achievements)e.achievements[t]=this.achievements[t].getSaveData()
for(var t in this.armies)e.armies[t]=this.armies[t].getSaveData()
for(var t in this.countries){e.countries[t]=[]
for(var s in this.countries[t])e.countries[t][s]=this.countries[t][s].getSaveData()}return e},h.prototype.updateFromSaveData=function(e,t){this.timer.updateFromSaveData(e.timer,t),this.populationGroup.updateFromSaveData(e.populationGroup),this.genes=new BigNumber(e.genes),this.newGenes=new BigNumber(e.newGenes),this.bonusesUsed=e.bonusesUsed
for(var s in this.mutations)this.mutations[s].updateFromSaveData(e.mutations?e.mutations[s]:{})
for(var s in this.resources)this.resources[s].updateFromSaveData(e.resources[s])
for(var s in this.buildings)this.buildings[s].updateFromSaveData(e.buildings[s])
for(var s in this.researches)this.researches[s].updateFromSaveData(e.researches[s])
for(var s in this.achievements)this.achievements[s].updateFromSaveData(e.achievements[s])
if(e.armies)for(var s in this.armies)e.armies[s]&&this.armies[s].updateFromSaveData(e.armies[s])
this.countries={}
for(var s in e.countries){this.countries[s]=[]
for(var i in e.countries[s])if(i>0){var o=e.countries[s][i]
this.countries[s][i]=new u(this.meta.countriesById[s],o[0]),e.countries[s].length-1==i&&this.countries[s][i].setup(),this.countries[s][i].updateFromSaveData(o)}}this.getTimer().setChronometer(this.bonusesUsed.chronometer)},h})
