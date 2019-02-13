define([],function(){var t=function(t){this.game=t
var e=this
this.interval=setInterval(function(){e.saveToStorage(e.getSaveData())},5e3)}
return t.prototype.getSaveData=function(){return LZString.compressToBase64(JSON.stringify(this.game.getSaveData()))},t.prototype.loadFromSaveData=function(t,e){var a=null
try{var o=t
o&&null!==o&&void 0!==o&&"null"!=o&&(a=JSON.parse(LZString.decompressFromBase64(o)))}catch(r){console.error(r)}return a?(this.game.updateFromSaveData(a,e),!0):!1},t.prototype.stop=function(){clearInterval(this.interval)},t.prototype.saveToStorage=function(t){window.localStorage.game=t},t.prototype.deleteFromStorage=function(){delete window.localStorage.game},t.prototype.getDataFromStorage=function(){return window.localStorage.game},t})
