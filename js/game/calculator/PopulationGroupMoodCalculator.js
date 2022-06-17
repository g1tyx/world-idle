define([],function(){var o=function(o){this.game=o,this.populationGroup=o.getPopulationGroup(),this.timer=o.getTimer(),this.resources=o.getResources()}
return o.prototype.calculateForResource=function(o,e){var t=this.populationGroup.getResourceUsageData()
if(!e.moodRange||!t||!t[o]||t[o].need.compare(0)<=0)return{change:e.positiveMoodFactor,maxMoodBonus:0,needed:!1}
var a=t[o].gets
t[o].have.compare(a)>0&&(a=t[o].have)
var r=Math.min(100*a.divide(t[o].need).valueOf(),e.moodRange),i=0,n=0
if(r>=e.moodNegativeFrom){var u=100*(r-e.moodNegativeFrom)/(e.moodRange-e.moodNegativeFrom)
i=e.positiveMoodFactor*u/100,n=e.maxMoodBonus*u/100}else i=e.negativeMoodFactor*(r-e.moodNegativeFrom)/100
return i*=this.timer.getTickMultiplayer(),{change:i,percentage:r,maxMoodBonus:n,needed:!0}},o.prototype.calculate=function(){var o=this.populationGroup.getMeta().resources,e={}
for(var t in o){var a=this.calculateForResource(t,o[t])
e[t]=a}this.populationGroup.setMoodData(e)},o.prototype.tick=function(){var o=this.populationGroup.getMoodData(),e=0,t=0
for(var a in o)e+=o[a].change,t+=o[a].maxMoodBonus
var r=this.populationGroup.getMood()+e
r>100+t&&(r=100+t),0>r&&(r=0),this.populationGroup.setMood(r)},o})
