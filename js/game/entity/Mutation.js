define([],function(){var t=function(t){this.meta=t,this.bought=!1,this.genes=new BigNumber(0)}
return t.prototype.getMeta=function(){return this.meta},t.prototype.isBought=function(){return this.bought},t.prototype.setBought=function(t){this.bought=!!t},t.prototype.setGenes=function(t){this.genes=new BigNumber(t)},t.prototype.getGenes=function(){return this.genes},t.prototype.getBonus=function(){return this.getDisplayBonus()+1},t.prototype.getDisplayBonus=function(){return Math.log(this.genes.multiply(1*this.meta.multiplayer).add(1))/Math.log(this.meta.slow)},t.prototype.getSaveData=function(){return[this.bought,this.genes.toString()]},t.prototype.updateFromSaveData=function(t){t&&(this.bought=t[0]?t[0]:!1,this.genes=new BigNumber(t[1]?t[1]:0))},t})