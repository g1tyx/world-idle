define([],function(){var t=function(){this.rates=[]}
return t.prototype.setup=function(t){return"real"==t?this.setupReal():"test"==t&&this.setupTest(),this},t.prototype.setupReal=function(){for(var t=0;200>t;t++){var e
e=0>=t?.005:5>t?2e-4:15>t?1e-4:20>t?2e-4:25>t?3e-4:30>t?4e-4:35>t?5e-4:40>t?75e-5:45>t?.001:50>t?.002:55>t?.0035:60>t?.005:65>t?.007:70>t?.012:75>t?.02:80>t?.04:85>t?.09:90>t?.17:95>t?.2:100>t?.25:105>t?.3:110>t?.33:120>t?.36:.39999,this.rates[t]=2.5*e}return this},t.prototype.setupTest=function(){for(var t=0;250>t;t++){var e=50
t>=4&&(e=50),this.rates[t]=e/100}return this},t.prototype.getRate=function(t){return void 0!=this.rates[t]?this.rates[t]:1},t})
