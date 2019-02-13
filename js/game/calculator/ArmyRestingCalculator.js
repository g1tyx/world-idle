define([],function(){var t=function(t){this.game=t}
return t.prototype.tickYear=function(){var t=this.game.getArmies()
for(var e in t)"resting"==t[e].state&&this.calculateArmy(t[e])},t.prototype.calculateArmy=function(t){var e=this.game.getBuilding("barracks").getWorkerData()
if(e){var a=e.gets
if(!t.getAttackCountryId()||a.compare(0)<=0)return t.setSoldiers(0),t.setLostSoldiers(0),void t.setWeapons(0)
var s=this.game.getResource("weapons").getAmount(),r=a.multiply(this.game.getBonuses().war.takeWeapons)
s.compare(r)>0&&(s=r),t.setSoldiers(a),t.setWeapons(s),t.subtractActionYears(),0==t.getActionYears()&&(t.setState("fighting"),t.setActionYears(this.game.getMeta().war.fightingYears),this.game.getResource("weapons").subtractAmount(s))}},t})
