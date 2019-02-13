define(["text!template/buildingsUi.html","text!template/buildingRowUi.html","action/BuyBuilding","action/ModifyWorkerPercentage"],function(t,e,i,a){var n=function(t){this.game=t,this.container=null,this.buildingsElement=null,this.buildingElements={}}
return n.prototype.display=function(n){var r=this
this.container=n,this.container.html(Handlebars.compile(t)({}))
var o=""
for(var s in this.game.getMeta().buildings){var d=this.game.getMeta().buildings[s]
o+=Handlebars.compile(e)({id:d.id,name:d.name,description:d.description,visible:d.dependsOnBuilding&&0==r.game.getBuilding(d.dependsOnBuilding).getAmount()})}this.buildingsElement=$("#buildingsTable"),this.buildingsElement.append(o),this.buildingsElement.find(".buildingRow").each(function(){var t=$(this)
r.buildingElements[t.attr("data-id")]=t}),$(".addWorkersButton").click(function(t){var e=$(t.target).attr("data-id"),i=new a(r.game,r.game.getBuilding(e)),n=1
t.shiftKey?n=10:t.ctrlKey&&(n=100),i.modify(n),r.tickYear(),t.preventDefault()}),$(".removeWorkersButton").click(function(t){var e=$(t.target).attr("data-id"),i=new a(r.game,r.game.getBuilding(e)),n=-1
t.shiftKey?n=-10:t.ctrlKey&&(n=-100),i.modify(n),r.tickYear(),t.preventDefault()}),$(".buyButton").click(function(t){var e=$(t.target).attr("data-id"),a=new i(r.game,r.game.getBuilding(e)),n=1
t.shiftKey?n=10:t.ctrlKey&&(n=100),a.canBuy(n)&&(a.buy(n),r.tickYear()),t.preventDefault()}),r.tickYear()},n.prototype.tickYear=function(){for(var t in this.game.getMeta().buildings){var e=this.game.getMeta().buildings[t],a=this.game.getBuilding(e.id),n="",r=a.getPrice(1,this.game)
for(var t in r){var o=this.game.getMeta().resourcesById[t],s="onmouseover=\"showTooltip(event, '"+o.name+": "+numberFormat.format(r[t])+"')\" onmouseout=hideTooltip()"
n+='<span style="color:'+o.color+'" '+s+">"+o.shortName+numberFormat.format(r[t])+"<br /></span>"}var d=this.buildingElements[e.id]
e.dependsOnBuilding&&0==this.game.getBuilding(e.dependsOnBuilding).getAmount()?d.hide():d.show(),d.find("[data-name='amount']").html(numberFormat.format(a.getAmount())),d.find("[data-name='workersPercentage']").html(a.getWorkersPercentage()),d.find("[data-name='workers']").html(numberFormat.format(a.getWorkerData().gets)),d.find("[data-name='maxWorkers']").html(numberFormat.format(a.getWorkerData().max))
var l=new i(this.game,a)
l.canBuy()?d.find(".buyButton").removeClass("buyDisabled"):d.find(".buyButton").addClass("buyDisabled")
var m=0
0!=a.getWorkerData().max.compare(0)&&(m=Math.round(100*a.getWorkerData().gets.divide(a.getWorkerData().max).valueOf())),d.find("[data-name='usedWorkers']").html(m),d.find("[data-name='price']").html(n)}var u=this.game.getPopulationGroup().getWorkerData().totalAvailableWorkers,g=this.game.getPopulationGroup().getWorkerData().totalNeeded,h=u.subtract(g)
h.compare(0)<=0&&(h=0),this.container.find("#buildingsTotalWorkers").html(numberFormat.format(u)),this.container.find("#buildingsTotalWorkPlaces").html(numberFormat.format(g)),this.container.find("#buildingDistribution").html(Math.min(100,Math.round(u.multiply(100).divide(g)))),this.container.find("#unemployed").html(numberFormat.format(h)),this.container.find("#workersPercentage").html(Math.round(this.game.getPopulationGroup().getWorkerData().workersPercentage))
var c=this.game.getBonuses().specials.allowWorkerDistribution
this.container.find(".workerDistribution").each(function(){c?$(this).show():$(this).hide()})},n.prototype.destroy=function(){this.container.html(""),this.container=null},n})
