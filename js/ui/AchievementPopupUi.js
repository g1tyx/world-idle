define(["text!template/achievementPopupUi.html"],function(e){var t=function(e,t,i,n){this.game=e,this.achievementId=n,this.achievementCalculator=i,this.bonusCalculator=t}
return t.prototype.display=function(){var t=this.game.getAchievement(this.achievementId),i=""
for(var n in t.getMeta().tests)i+=this.achievementCalculator.getRequirementsInfoText(t.getMeta().tests[n])+"<br />"
var s="achievement"+this.achievementId
$("body").append(Handlebars.compile(e)({id:s,text:i,bonus:this.bonusCalculator.getBonusInfoText(t.getMeta().bonus)})),this.element=$("#"+s),this.element.css("left",($("html").width()-this.element.width())/2)
var a=this
this.element.click(function(){a.destroy()}),setTimeout(function(){a.destroy()},6e3)},t.prototype.destroy=function(){var e=this
this.element.fadeOut(function(){e.element.remove()})},t})
