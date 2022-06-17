define([],function(){var e=function(e,i){this.game=e,this.building=i}
return e.prototype.modify=function(e){var i=this.building.getWorkersPercentage()+e
i>100&&(i=100),0>i&&(i=0),this.building.setWorkersPercentage(i)},e})
