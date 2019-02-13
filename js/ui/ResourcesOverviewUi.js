define(["text!template/resourcesOverviewUi.html","text!template/resourcesOverviewRowUi.html"],function(e,t){var i=function(e){this.game=e,this.container=null,this.buildingElements={}}
return i.prototype.display=function(i){var r=this
this.container=i,this.container.html(Handlebars.compile(e)({}))
var a=""
for(var n in this.game.getMeta().resources){var o=this.game.getMeta().resources[n]
a+=Handlebars.compile(t)({id:o.id,name:o.name,color:o.color,visible:o.dependsOnBuilding&&0==this.game.getBuilding(o.dependsOnBuilding).getAmount()})}this.buildingsElement=$("#resourcesOverviewTable"),this.buildingsElement.append(a),this.buildingsElement.find(".resourcesOverviewRow").each(function(){var e=$(this)
r.buildingElements[e.attr("data-id")]=e}),this.tickYear()},i.prototype.tickYear=function(){for(var e in this.game.getMeta().resources){var t=this.game.getMeta().resources[e],i=this.game.getResource(t.id),r=this.game.getResourceTotalProduction(t.id),a=this.game.getPopulationGroup().getResourceUsageData()[t.id]
a||(a={need:new BigNumber(0),gets:new BigNumber(0)})
var n=r.divide(this.game.getTimer().getTickMultiplayer()),o=a.need.divide(this.game.getTimer().getTickMultiplayer()),m=a.gets.divide(this.game.getTimer().getTickMultiplayer()),s=n.subtract(m),d="",u=""
s.compare(0)>0?(d="+"+numberFormat.format(s),u="green"):s.compare(0)<0?(d=numberFormat.format(s),u="red"):(d=numberFormat.format(s),u="black")
var l=this.game.getPopulationGroup().getResourceProductionByResource(),g=""
if(l[t.id])for(var c in l[t.id]){var h=l[t.id][c].divide(this.game.getTimer().getTickMultiplayer())
g+=numberFormat.format(h)+"<br />"}var p=this.buildingElements[t.id]
p.find("[data-name='stock']").html(numberFormat.format(i.getAmount())),p.find("[data-name='production']").html(numberFormat.format(n)),p.find("[data-name='populationNeeds']").html(numberFormat.format(o)),p.find("[data-name='populationGets']").html(numberFormat.format(m)),p.find("[data-name='change']").html(d).css("color",u),p.find("[data-name='saleProfit']").html(g)}},i.prototype.destroy=function(){this.container.html(""),this.container=null},i})
