define(["entity/Population"],function(t){var e=function(t){this.game=t,this.populationGroup=this.game.getPopulationGroup()}
return e.prototype.calculateYear=function(){var t=this.populationGroup.getPopulations(),e=this._getBirthModifier(),o=this._getDeathModifier(),a=0,i=0,n=0,p=0
logger.info("PopulationChangeCalculator","BirthMod:"+e+" DeathMod:"+o)
for(var u in t){var r=t[u]
r.setBirthRate(this.populationGroup.getBirthRates().getRate(r.getAge())*e),r.setDeathRate(this.populationGroup.getDeathRates().getRate(r.getAge())*o),a+=r.getBirths()*(1-r.getMales()),i+=r.getDeaths(),n+=r.getPopulation(),p+=r.getPopulation()*r.getMales()}logger.info("PopulationChangeCalculator","B:"+a+" D:"+i+" T:"+n+" Males:"+p),this.populationGroup.setPopulationChangeData({births:a,deaths:i,sum:n,males:p,max:0})},e.prototype._getDeathModifier=function(){var t=3*(1-this.populationGroup.getMood()/100),e=3*(.8-this._getPeopleGetMedicine())
return(1+t+e)*this.game.getMutation("deathRates").getBonus()},e.prototype._getPeopleGetMedicine=function(){var t=this.game.getPopulationGroup().getResourceUsageData()[this.game.getPopulationGroup().getMeta().medicineResourceId]
t||(t={need:new BigNumber(0),gets:new BigNumber(0)})
var e=t.gets.divide(t.need).valueOf()
return e>1&&(e=1),e},e.prototype._getBirthModifier=function(){var t=.05+this.populationGroup.getMood()>0?.95*this.populationGroup.getMood()/100:0,e=this._calculateBalanceCoefficient()
return t*e*this.game.getMutation("birthRates").getBonus()},e.prototype._calculateBalanceCoefficient=function(){var t=0,e=0,o=this.populationGroup.getPopulations()
for(var a in o){var i=o[a],n=this.populationGroup.getBirthRates().getRate(i.getAge())
n>0&&(e+=i.getFemales(),t+=i.getMales())}t*=1-this.populationGroup.getMeta().birthBalanceForMen,e*=this.populationGroup.getMeta().birthBalanceForMen
var p=0
return p=t>e?e/t:t/e,isNaN(p)&&(p=1),p},e.prototype.tickYear=function(){var e=this.populationGroup.getTotalPopulation(),o=this.populationGroup.getPopulations(),a=this.populationGroup.getPopulationChangeData()
a.sum+=a.births
var i=new t({age:0,population:100*a.births/a.sum,males:this.game.getPopulationGroup().getMeta().birthBalanceForMen+.02*Math.random()-.01})
o.unshift(i)
for(var n in o){var p=o[n]
p.addOneToAge(),p.setPopulation(100*p.getPopulation()/a.sum-p.getDeaths()),a.max=Math.max(a.max,p.getPopulation())}var u=e.multiply((100+a.births-a.deaths)/100)
u.compare(this.populationGroup.getMeta().minPopulation)<=0&&(u=new BigNumber(this.populationGroup.getMeta().minPopulation),this.populationGroup.resetPopulationGroups()),a.accretion=u.subtract(e)
for(var r=o.length-1;r>=0&&!(o[r].getPopulation()>.001&&1!=o[r].getDeathRate());r--)o.pop()
this.populationGroup.setTotalPopulation(u)
var g=u.multiply(i.getPopulation()/100).divide(this.populationGroup.getMeta().oneGenePerBirths)
this.game.setNewGenes(this.game.getNewGenes().add(g))},e})
