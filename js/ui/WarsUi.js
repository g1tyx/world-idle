define(["text!template/warsUi.html","calculator/WarLossCalculator"],function(t,e){var r=Handlebars.compile(t),a=function(t){this.game=t}
return a.prototype.display=function(t){this.container=t
var e=[]
for(var a in this.game.getMeta().countries){var o=this.game.getMeta().countries[a],i=this.game.getLastCountry(o.id),n={name:o.name+" "+i.getLevel(),description:o.description,soldiers:numberFormat.format(i.getSoldiers()),attack:numberFormat.format(i.getAttack()),productionResource:this.game.getMeta().resourcesById[i.getProductionResourceId()].name,production:numberFormat.format(i.getProduction())}
if(0==i.getIsConquered()){n.tiles=[]
for(var s=0;s<i.getTiles();s++){var c=100
s<i.getTilesConquered()?c=0:s==i.getTilesConquered()&&(c=Math.round(100*i.getSoldiers()/i.getMaxSoldiers()))
var g=i.getMeta().terrains
n.tiles.push({type:g[((i.getLevel()-1)*i.getMeta().tiles.length+s)%g.length],health:c})}}e.push(n)}var u=[],m=this.game.getArmies()
for(var a in m){var d=m[a],l=[]
for(var s in this.game.getMeta().countries){var o=this.game.getMeta().countries[s]
l.push({id:o.id,name:o.name,selected:o.id==d.getAttackCountryId()})}u.push({id:a,soldiers:numberFormat.format(d.getSoldiers()),weapons:numberFormat.format(d.getWeapons()),state:d.getState().toUpperCase(),stateColor:"resting"==d.getState()?"green":"red",canChangeArmyParams:"resting"==d.getState(),attack:numberFormat.format(d.getAttack(this.game)),actionYears:d.getActionYears(),noAttackCountryId:!d.getAttackCountryId(),countries:l})}var h=[]
for(var a in this.game.getMeta().resources){var p=this.game.getMeta().resources[a],v=this.game.getCountriesResourceProduction(p.id)
v.compare(0)>0&&h.push({name:p.name,value:numberFormat.format(v),color:p.color})}this.container.html(r({armies:u,countries:e,production:h}))
var f=this
$(".actionButton").click(function(t){var e=$(t.target).parent().attr("data-id"),r=$(t.target).attr("data-countryId")
f.game.getArmy(e).setAttackCountryId(r?r:null)
var a=f.container
f.destroy(),f.display(a)})},a.prototype.tickYear=function(){var t=this.container
this.destroy(),this.display(t)},a.prototype.destroy=function(){this.container.html(""),this.container=null},a})
