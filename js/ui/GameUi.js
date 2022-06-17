define(["text!template/gameUi.html","ui/BuildingsUi","ui/ResearchUi","ui/AchievementsUi","ui/ResourcesOverviewUi","ui/PopulationUi","ui/ResourcesUi","ui/SettingsUi","ui/WarsUi","ui/GeneticsUi","ui/FutureUi","ui/AchievementPopupUi"],function(t,e,i,a,s,n,o,r,l,u,c,h){var g="normal",m="extra_years",y="stop",p=function(t){this.main=t,this.game=t.getGame(),this.calculator=t.getCalculator(),this.container=null,this.play=!1,this.fastPlay=!1,this.tickMode=y,this.layoutMenuContent=null,this.layoutUis={resourcesOverview:new s(this.game),buildings:new e(this.game),research:new i(this.game,this.calculator.getBonusCalculator()),achievements:new a(this.game,this.calculator.getBonusCalculator(),this.calculator.getAchievementCalculator()),genetics:new u(t),wars:new l(this.game),future:new c(this.main)},this.populationUi=new n(this.game),this.resourcesUi=new o(this.game),this.settingsUi=new r(this.main),this.interval=null}
return p.prototype.changeTickMode=function(){var t=null
if(t=1==this.play?1==this.fastPlay?m:g:y,this.tickMode=t,this.interval&&clearInterval(this.interval),t!=y){this.game.getTimer().setExtraYearModeOn(t==m)
var e=this,i=function(){e.tick()}
this.interval=setInterval(i,this.game.getTimer().getIntervalMs())}},p.prototype.tickUi=function(){var t=this.game.getTimer().wasNextYearTick()
t&&this.layoutUis[this.layoutMenuContent].tickYear(),this.populationUi.tick(),this.resourcesUi.tick()
var e=String(Math.round(10*this.game.getTimer().getYear())/10)
e.split(".")[1]||(e+=".0"),$("#year").html(e),$("#extraYears").html(numberFormat.format(this.game.getTimer().getExtraYears())),this.game.getTimer().getExtraYears()>0?$("#extraYearsArea").show():$("#extraYearsArea").hide(),this.game.getBonuses().specials.allowGenetics||this.game.getGenes().compare(0)>0?$("#geneticsButton").show():$("#geneticsButton").hide(),this.game.getBonuses().specials.allowWars?$("#warsButton").show():$("#warsButton").hide(),this.game.getBonuses().specials.supportScreen||this.game.getGenes().compare(0)>0?$("#futureButton").show():$("#futureButton").hide(),this.game.getTimer().getExtraYears()>0?$("#changeFastPlayModeButton").show():$("#changeFastPlayModeButton").hide()},p.prototype.tick=function(){var t=this.game.getTimer().isExtraYearModeOn()
this.calculator.tick(),t&&!this.game.getTimer().isExtraYearModeOn()&&$("#playSlowButton").trigger("click"),this.tickUi(),this.game.getTimer().getExtraYears()<=0&&this.tickMode==m&&this.changeTickMode(g)},p.prototype.display=function(e){this.container=e,this.container.html(Handlebars.compile(t)({})),this.populationUi.display($(".populationInfo")),this.resourcesUi.display($(".resources"))
var i=this
$(".layoutButton").click(function(t){i.layoutMenuContent&&i.layoutUis[i.layoutMenuContent].destroy(),i.layoutMenuContent=$(t.target).attr("data-id"),i.layoutUis[i.layoutMenuContent].display($("#layoutMenuContent")),$(".layoutButton").removeClass("selected"),$(this).addClass("selected")
try{ga("send","pageview","/"+i.layoutMenuContent)}catch(t){console.error(t)}}),this.layoutMenuContent="resourcesOverview",this.layoutUis.resourcesOverview.display($("#layoutMenuContent")),$("#settingsButton").click(function(){i.settingsUi.toggle()}),$("#changePlayModeButton").click(function(){i.play=!i.play,i.play?$(this).html("停止"):$(this).html("继续"),i.changeTickMode()}).trigger("click"),$("#changeFastPlayModeButton").click(function(){i.fastPlay=!i.fastPlay,i.fastPlay?$(this).html("慢速游戏"):$(this).html("快速游戏"),i.changeTickMode()}),this.calculator.getAchievementCalculator().setAchievedEventListener(function(t){new h(i.game,i.calculator.getBonusCalculator(),i.calculator.getAchievementCalculator(),t).display()}),this.tickUi()},p.prototype.destroy=function(){this.interval&&clearInterval(this.interval),this.populationUi.destroy(),this.resourcesUi.destroy(),this.layoutMenuContent&&this.layoutUis[this.layoutMenuContent].destroy(),this.container.html(""),this.container=null},p})
