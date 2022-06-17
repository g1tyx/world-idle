define([],function(){var t=function(t){this.game=t}
return t.prototype.canMutate=function(t){var e=new BigNumber(0)
for(var n in t){var a=new BigNumber(t[n]?t[n]:0)
if(a.compare(0)<0||"NaN"==a.toString())return!1
e=e.add(a)}return e.compare(this.game.getGenes())<=0},t.prototype.mutate=function(t){for(var e in this.game.getMutations()){var n=this.game.getMutations()[e]
n.setGenes(t[n.getMeta().id]?t[n.getMeta().id]:0)}},t})
