define([],function(){var t=function(){this.rates=[],this.max=null}
return t.prototype.setup=function(t){"real"==t?this.setupReal():"test"==t&&this.setupTest(),this.max=0
for(var e in this.rates)this.rates[e]>this.max&&(this.max=this.rates[e])
return this},t.prototype.setupReal=function(){for(var t=0,e=0;200>e;e++){var s=0
10>=e?s=0:15>e?s=3e-4:20>e?s=.0265:25>e?s=.0807:30>e?s=.1055:35>e?s=.098:40>e?s=.0493:45>e?s=.0104:50>e?s=.002:55>e&&(s=8e-4),this.rates[e]=s/.77,t+=this.rates[e]}return this},t.prototype.setupTest=function(){for(var t=0;250>t;t++){var e=50
2>=t&&(e=50),this.rates[t]=e/100}return this},t.prototype.setRate=function(t,e){this.rates[t]=e},t.prototype.getRate=function(t){return void 0!=this.rates[t]?this.rates[t]:0},t.prototype.getMaxRate=function(t){return this.max},t})
