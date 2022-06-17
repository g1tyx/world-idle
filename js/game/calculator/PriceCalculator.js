define([],function(){var e=function(e,i){this.increase=i,this.values=[new BigNumber(0),new BigNumber(e)]}
return e.prototype.getPrice=function(e,i){e=Number(e.valueOf())
var r=e+i
if(!this.values[r]){for(var s=r-1;s>=0&&!this.values[s];s--);for(var t=s+1;r>=t;t++)this.values[t]=this.values[t-1].multiply(this.increase)}for(var u=this.values[e+1],a=2;i>=a;a++)u=u.add(this.values[e+a])
return u},e})
