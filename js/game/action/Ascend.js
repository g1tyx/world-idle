define([],function(){var e=function(e){this.main=e,this.game=e.getGame()}
return e.prototype.ascend=function(e){var t=this.game.getGenes().add(this.game.getNewGenes()),s=this.game.getBoughtBonuses(),a=this.game.getTimer().getExtraYears(),i=this.game.getTimer().getChronometer()
this.main.getSaveHandler().deleteFromStorage(),this.main.reset()
var n=this.main.getGame()
n.setGenes(t),n.setNewGenes(0),n.setBoughtBonuses(s),n.getTimer().setExtraYears(a),n.getTimer().setChronometer(i)},e})
