define(["text!template/settingsUi.html"],function(t){var e=function(t){this.main=t,this.isVisible=!1}
return e.prototype.toggle=function(){this.isVisible?this.destroy():this.display()},e.prototype.display=function(){ga("send","event","settings","open","settings")
var e=this
this.isVisible=!0,$("body").append(Handlebars.compile(t)({}))
var s=$("#settings")
s.css("left",($("html").width()-s.width())/2),$("#saveData").val(this.main.getSaveHandler().getSaveData()),$("#loadButton").click(function(){ga("send","event","settings","load","settings"),e.main.getSaveHandler().loadFromSaveData($("#saveData").val())?e.destroy():alert("Invalid save file!")}),$("#resetButton").click(function(){ga("send","event","settings","hardReset","settings"),confirm("Are you sure you want to reset, it will delete all progress!")&&(e.main.getSaveHandler().deleteFromStorage(),e.main.reset(),e.destroy())}),$("#closeButton").click(function(){e.destroy()})},e.prototype.destroy=function(t){this.isVisible=!1,$("#settings").remove(),$("#settingsBg").remove()},e})
