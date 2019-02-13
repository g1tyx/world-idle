//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/classes/bignumber [rev. #4]
var BigNumberSlow=function(e,t,r){var i,n=this
if(e instanceof BigNumberSlow){for(i in{precision:0,roundType:0,_s:0,_f:0})n[i]=e[i]
return void(n._d=e._d.slice())}for(n.precision=isNaN(t=Math.abs(t))?BigNumberSlow.defaultPrecision:t,n.roundType=isNaN(r=Math.abs(r))?BigNumberSlow.defaultRoundType:r,n._s="-"==(e+="").charAt(0),n._f=((e=e.replace(/[^\d.]/g,"").split(".",2))[0]=e[0].replace(/^0+/,"")||"0").length,i=(e=n._d=(e.join("")||"0").split("")).length;i;e[--i]=+e[i]);n.round()}
with({$:BigNumberSlow,o:BigNumberSlow.prototype})$.ROUND_HALF_EVEN=($.ROUND_HALF_DOWN=($.ROUND_HALF_UP=($.ROUND_FLOOR=($.ROUND_CEIL=($.ROUND_DOWN=($.ROUND_UP=0)+1)+1)+1)+1)+1)+1,$.defaultPrecision=40,$.defaultRoundType=$.ROUND_HALF_UP,o.add=function(e){if(this._s!=(e=new BigNumberSlow(e))._s)return e._s^=1,this.subtract(e)
var t,r,i=new BigNumberSlow(this),n=i._d,o=e._d,s=i._f,_=e._f,e=Math.max(s,_)
for(s!=_&&((_=s-_)>0?i._zeroes(o,_,1):i._zeroes(n,-_,1)),t=(s=n.length)==(_=o.length)?n.length:((_=s-_)>0?i._zeroes(o,_):i._zeroes(n,-_)).length,r=0;t;r=(n[--t]=n[t]+o[t]+r)/10>>>0,n[t]%=10);return r&&++e&&n.unshift(r),i._f=e,i.round()},o.subtract=function(e){if(this._s!=(e=new BigNumberSlow(e))._s)return e._s^=1,this.add(e)
var t,r,i=new BigNumberSlow(this),n=i.abs().compare(e.abs())+1,o=n?i:e,s=n?e:i,_=o._f,u=s._f,h=_
for(o=o._d,s=s._d,_!=u&&((u=_-u)>0?i._zeroes(s,u,1):i._zeroes(o,-u,1)),t=(_=o.length)==(u=s.length)?o.length:((u=_-u)>0?i._zeroes(s,u):i._zeroes(o,-u)).length;t;){if(o[--t]<s[t]){for(r=t;r&&!o[--r];o[r]=9);--o[r],o[t]+=10}s[t]=o[t]-s[t]}return n||(i._s^=1),i._f=h,i._d=s,i.round()},o.multiply=function(e){var t,r,i,n=new BigNumberSlow(this),o=n._d.length>=(e=new BigNumberSlow(e))._d.length,s=(o?n:e)._d,_=(o?e:n)._d,u=s.length,h=_.length,f=new BigNumberSlow
for(t=h;t;o&&i.unshift(o),f.set(f.add(new BigNumberSlow(i.join("")))))for(i=new Array(h- --t).join("0").split(""),o=0,r=u;r;o+=s[--r]*_[t],i.unshift(o%10),o=o/10>>>0);return n._s=n._s!=e._s,n._f=((o=u+h-n._f-e._f)>=(r=(n._d=f._d).length)?this._zeroes(n._d,o-r+1,1).length:r)-o,n.round()},o.divide=function(e){if("0"==(e=new BigNumberSlow(e)))throw new Error("Division by 0")
if("0"==this)return new BigNumberSlow
var t,r,i,n=new BigNumberSlow(this),o=n._d,s=e._d,_=o.length-n._f,u=s.length-e._f,h=new BigNumberSlow,f=0,l=1,d=0,g=0
for(h._s=n._s!=e._s,h.precision=Math.max(n.precision,e.precision),h._f=+h._d.pop(),_!=u&&n._zeroes(_>u?s:o,Math.abs(_-u)),e._f=s.length,s=e,s._s=!1,s=s.round(),e=new BigNumberSlow;"0"==o[0];o.shift());e:do{for(i=d=0,"0"==e&&(e._d=[],e._f=0);f<o.length&&-1==e.compare(s);++f){if(i=f+1==o.length,(!l&&++d>1||(g=i&&"0"==e&&"0"==o[f]))&&(h._f==h._d.length&&++h._f,h._d.push(0)),"0"==o[f]&&"0"==e||(e._d.push(o[f]),++e._f),g)break e
if(i&&-1==e.compare(s)&&(h._f==h._d.length&&++h._f,1)||(i=0))for(;h._d.push(0),e._d.push(0),++e._f,-1==e.compare(s););}if(l=0,-1==e.compare(s)&&!(i=0))for(;i?h._d.push(0):i=1,e._d.push(0),++e._f,-1==e.compare(s););for(r=new BigNumberSlow,t=0;e.compare(y=r.add(s))+1&&++t;r.set(y));e.set(e.subtract(r)),!i&&h._f==h._d.length&&++h._f,h._d.push(t)}while((f<o.length||"0"!=e)&&h._d.length-h._f<=h.precision)
return h.round()},o.mod=function(e){return this.subtract(this.divide(e).intPart().multiply(e))},o.pow=function(e){var t,r=new BigNumberSlow(this)
if(0==(e=new BigNumberSlow(e).intPart()))return r.set(1)
for(t=Math.abs(e);--t;r.set(r.multiply(this)));return 0>e?r.set(new BigNumberSlow(1).divide(r)):r},o.set=function(e){return this.constructor(e),this},o.compare=function(e){var t,r,i=this,n=this._f,o=new BigNumberSlow(e),s=o._f,_=[-1,1]
if(i._s!=o._s)return i._s?-1:1
if(n!=s)return _[n>s^i._s]
for(n=(i=i._d).length,s=(o=o._d).length,t=-1,r=Math.min(n,s);++t<r;)if(i[t]!=o[t])return _[i[t]>o[t]^i._s]
return n!=s?_[n>s^i._s]:0},o.negate=function(){var e=new BigNumberSlow(this)
return e._s^=1,e},o.abs=function(){var e=new BigNumberSlow(this)
return e._s=0,e},o.intPart=function(){return new BigNumberSlow((this._s?"-":"")+(this._d.slice(0,this._f).join("")||"0"))},o.valueOf=o.toString=function(){var e=this
return(e._s?"-":"")+(e._d.slice(0,e._f).join("")||"0")+(e._f!=e._d.length?"."+e._d.slice(e._f).join(""):"")},o._zeroes=function(e,t,r){var i=["push","unshift"][r||0]
for(++t;--t;e[i](0));return e},o.round=function(){if("_rounding"in this)return this
var e,t,r,i,n=BigNumberSlow,o=this.roundType,s=this._d
for(this._rounding=!0;this._f>1&&!s[0];--this._f,s.shift());for(e=this._f,t=this.precision+e,r=s[t];s.length>e&&!s[s.length-1];s.pop());return i=(this._s?"-":"")+(t-e?"0."+this._zeroes([],t-e-1).join(""):"")+1,s.length>t&&(r&&(o==n.DOWN?!1:o==n.UP?!0:o==n.CEIL?!this._s:o==n.FLOOR?this._s:o==n.HALF_UP?r>=5:o==n.HALF_DOWN?r>5:o==n.HALF_EVEN?r>=5&&1&s[t-1]:!1)&&this.add(i),s.splice(t,s.length-t)),delete this._rounding,this}
