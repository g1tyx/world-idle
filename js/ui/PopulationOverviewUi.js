define(["text!template/populationOverviewUi.html"],function(t){var e=function(t){this.game=t,this.populationGroup=t.getPopulationGroup(),this.container=null,this.elements={}}
return e.prototype.display=function(e){this.container=e
var a=[{age:"1",height:30},{age:"10",height:30},{age:"20",height:30},{age:"30",height:30},{age:"40",height:60},{age:"60",height:60},{age:"80",height:60},{age:"99",height:60}]
this.container.html(Handlebars.compile(t)({ages:a})),this.elements.totalPopulation=$("#totalPopulation"),this.elements.accretion=$("#accretion"),this.elements.mood=$("#mood"),this.elements.accretionFemaleTable=$("#accretionFemaleTable"),this.elements.accretionMaleTable=$("#accretionMaleTable"),this.elements.malesNum=$("#accretionMalesNum"),this.elements.femalesNum=$("#accretionFemalesNum"),this.update(),this.updateAccretionChart()},e.prototype.updateAccretionChart=function(){var t="",e="",a=this.populationGroup.getPopulations(),o=this.elements.accretionMaleTable.width(),i=this.elements.accretionFemaleTable.width()
for(var l in a){var n=a[l],r=n.getPopulation()/this.populationGroup.getPopulationChangeData().max*1.7,h=Math.round(o*r*n.getMales()),s=Math.round(i*r*(1-n.getMales()))
h=Math.min(o,h),s=Math.min(i,s),t+='<div class="accretionBar accretionMales" style="float:left; clear:both;width:'+h+'px;"></div>',e+='<div class="accretionBar accretionFemales" style="float:right; clear:both;width:'+s+'px;"></div>'}this.elements.accretionMaleTable.html(t),this.elements.accretionFemaleTable.html(e)},e.prototype.update=function(){var t=this.populationGroup.getTotalPopulation(),e=this.populationGroup.getPopulationChangeData()
this.elements.totalPopulation.html(numberFormat.format(t)),this.elements.malesNum.html(numberFormat.format(t.multiply(e.males/100))),this.elements.femalesNum.html(numberFormat.format(t.multiply(1-e.males/100)))
var a=e.accretion
this.elements.accretion.html((a.compare(0)>0?"+":"")+numberFormat.format(a.toString())).css("color",0==a.compare(0)?"black":a.compare(0)>0?"green":"red"),this.elements.mood.html(Math.round(this.populationGroup.getMood()))},e.prototype.tick=function(){this.update(),this.updateAccretionChart()},e.prototype.destroy=function(){this.container.html(""),this.container=null},e})