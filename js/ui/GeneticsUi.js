define(["text!template/geneticsUi.html","action/Ascend","action/Mutate"],function(t,e,n){var i=Handlebars.compile(t),a=function(t){this.main=t,this.game=t.getGame()}
return a.prototype.display=function(t){this.container=t
var a=[]
for(var s in this.game.getMeta().mutations){var o=this.game.getMeta().mutations[s],r=this.game.getMutations()[o.id],m=null,u=""
"fixed"==o.type?m=1+r.getDisplayBonus():(m=100*r.getDisplayBonus(),u="%"),a.push({id:o.id,name:o.name,description:o.description,bonus:Math.round(1e4*m)/1e4+u,genes:r.getGenes()})}this.container.html(i({mutations:a})),this.tickYear(),this.container.find("#ascendButton").click(function(){if(confirm("你确定要进行升天吗?")){var t=new e(c.main)
t.ascend()}})
var c=this
this.container.find(".mutateButton").click(function(){var t={}
c.container.find("input[name='genes']").each(function(){t[$(this).attr("data-id")]=$(this).val()})
var e=new n(c.game)
if(!e.canMutate(t))return void alert("你没有那么多基因!")
e.mutate(t)
var i=c.container
c.destroy(),c.display(i)})},a.prototype.tickYear=function(){var t=new BigNumber(0)
for(var e in this.game.getMutations())t=t.add(this.game.getMutations()[e].getGenes())
this.container.find("#genes").html(numberFormat.format(this.game.getGenes().intPart())),this.container.find("#usedGenes").html(numberFormat.format(t)),this.container.find("#unusedGenes").html(numberFormat.format(this.game.getGenes().subtract(t).intPart())),this.container.find("#newGenes").html(numberFormat.format(this.game.getNewGenes()))},a.prototype.destroy=function(){this.container.html(""),this.container=null},a})
