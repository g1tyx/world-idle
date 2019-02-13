define(["text!template/achievementsUi.html","text!template/achievementRowUi.html"],function(e,t){var i=function(e,t,i){this.game=e,this.bonusCalculator=t,this.achievementCalculator=i,this.container=null,this.achievementsElement=null,this.achievementElements={}}
return i.prototype.display=function(i){var n=this
this.container=i,this.container.html(Handlebars.compile(e)({}))
var a="",s=null
for(var h in this.game.getMeta().achievements){var m=this.game.getMeta().achievements[h],c=this.game.getAchievement(m.id)
if(c.isVisible(this.game)){var o=""
for(var l in m.tests)o+=this.achievementCalculator.getRequirementsInfoText(m.tests[l])+"<br />"
a+=Handlebars.compile(t)({id:m.id,name:m.name,bonus:this.bonusCalculator.getBonusInfoText(m.bonus),requirements:o,color:this.game.getAchievement(m.id).isAchieved()?"rgb(35,214,3)":"black",change:s&&s!=m.group}),s=m.group}}this.achievementsElement=$("#achievementsTable"),this.achievementsElement.append(a),this.achievementsElement.find(".achievementRow").each(function(){var e=$(this),t=e.attr("data-id")
n.achievementElements[t]=e})},i.prototype.tickYear=function(){},i.prototype.destroy=function(){this.container.html(""),this.container=null},i})
