define(["text!template/introUi.html"],function(t){var o=function(t){this.startCallback=t}
return o.prototype.display=function(){var o=this
$("body").append(Handlebars.compile(t)({}))
var e=$("#intro")
e.css("left",($("html").width()-e.width())/2),$("#startGameButton").click(function(){o.startCallback(),o.destroy()})},o.prototype.destroy=function(t){$("#intro").remove(),$("#introBg").remove()},o})
