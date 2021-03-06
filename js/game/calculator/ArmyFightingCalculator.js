define(["calculator/WarLossCalculator"],function(t){var e=function(t){this.game=t}
return e.prototype.tickYear=function(){var t=this.game.getArmies()
for(var e in t)"fighting"==t[e].state&&this.calculateArmy(t[e])},e.prototype.calculateArmy=function(t){if(!t.getAttackCountryId())return void this._sendArmyToResting(t)
var e=this.game.getLastCountry(t.getAttackCountryId())
e&&this.fight(t,e),t.subtractActionYears(),0==t.getActionYears()&&this._sendArmyToResting(t)},e.prototype.fight=function(e,s){var o=e.getAttack(this.game)
o.compare(s.getSoldiers())>=0&&(o=s.getSoldiers())
var r=s.getAttack()
r.compare(e.getSoldiers())>=0&&(r=e.getSoldiers()),e.subtractSoldiers(r),s.subtractSoldiers(o)
var i=this.game.getMeta().war.fightingYears-e.getActionYears(),a=new t(this.game),n=a.calculate({dies:r,yearsOffset:i})
logger.info("我方失去: "+r.toString()+" Years offset: "+i+" Losses: "+n.populationLoss),a.tick(n),e.setLostSoldiers(e.getLostSoldiers().add(r)),e.getSoldiers().compare(0)<=0&&this._sendArmyToResting(e),s.getSoldiers().compare(0)<=0&&(s.addTileConquered(),e.setLostSoldiers(0))},e.prototype._sendArmyToResting=function(t){var e=t.getWeapons().multiply(t.getWeaponsEffectiveness()).divide(2)
logger.info("Restore weapons: "+e),this.game.getResource("weapons").addAmount(e),t.setState("resting"),t.setSoldiers(0),t.setActionYears(this.game.getMeta().war.restingYears+2)},e})
