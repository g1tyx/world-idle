define(["text!template/researchUi.html","text!template/researchRowUi.html","action/BuyResearch"],function(e,t,a){var i=function(e,t){this.game=e,this.bonusCalculator=t,this.container=null,this.buildingsElement=null,this.researchElements={}}
return i.prototype.display=function(i){var n=this
this.container=i,this.container.html(Handlebars.compile(e)({}))
var s="",r=null
for(var o in this.game.getMeta().researches){var c=this.game.getMeta().researches[o],h=n.game.getResearch(c.id),l="",u=h.getPrice()
for(var m in u){var d=this.game.getMeta().resourcesById[m]
l+='<span style="color:'+d.color+'">'+d.name+":"+numberFormat.format(u[m])+"<br /></span>"}s+=Handlebars.compile(t)({id:c.id,name:c.name,bonus:this.bonusCalculator.getBonusInfoText(c.bonus),price:l,bought:h.getAmount()+(c.max?"/"+c.max:""),change:r&&r!=c.group,visible:h.isVisible(this.game)}),r=c.group}this.buildingsElement=$("#researchesTable"),this.buildingsElement.append(s),this.buildingsElement.find(".researchRow").each(function(){var e=$(this),t=e.attr("data-id")
n.researchElements[t]=e,n.game.getResearch(t).canBuyMore()||e.find(".buyButton").hide()}),$(".buyButton").click(function(e){var t=$(e.target).attr("data-id"),i=new a(n.game,t)
i.canBuy()&&(i.buy(),setTimeout(function(){var e=n.container
n.destroy(),n.display(e)},1))}),this.tickYear()},i.prototype.tickYear=function(){var e=this
$(".buyButton").each(function(){var t=$(this).attr("data-id"),i=new a(e.game,t),n=e.game.getResearch(t)
i.canBuy()?$(this).removeClass("buyDisabled"):$(this).addClass("buyDisabled"),n.isVisible(e.game)?e.researchElements[t].show():e.researchElements[t].hide()})},i.prototype.destroy=function(){this.container.html(""),this.container=null},i})
