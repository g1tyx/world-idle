define([],function(){var t=function(t,e){this.game=t,this.bonusCalculator=e}
return t.prototype.calculate=function(t){for(var e in this.game.getResearches())for(var a=this.game.getResearch(e),n=0;n<a.getAmount();n++)this.bonusCalculator.updateBonuses(t,a.getMeta().bonus)},t})
