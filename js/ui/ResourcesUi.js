define(["text!template/resourcesUi.html"],function(e){var t=function(t){this.game=t,this.container=null,this.compiledTemplate=Handlebars.compile(e)}
return t.prototype.tick=function(){var e={resources:{}}
for(var t in this.game.getResources()){var i=this.game.getResource(t),o=i.getMeta()
if(!o.dependsOnBuilding||0!=this.game.getBuilding(o.dependsOnBuilding).getAmount()){var r=this.game.getPopulationGroup().getResourceUsageData(),a=this.game.getResourceTotalProduction(i.getMeta().id),n=r[i.getMeta().id]?r[i.getMeta().id].need:0,g=a.subtract(n).divide(this.game.getTimer().getTickMultiplayer()),m="",s=""
g.compare(0)>0?(m="+"+numberFormat.format(g.toString()),s="green"):(m=numberFormat.format(g.toString()),s="red"),e.resources[i.getMeta().id]={name:i.getMeta().name,amount:numberFormat.format(i.getAmount().intPart()),color:i.getMeta().color,change:m,changeColor:s}}}this.container.html(this.compiledTemplate(e))},t.prototype.display=function(e){this.container=e},t.prototype.destroy=function(){this.container.html(""),this.container=null},t})