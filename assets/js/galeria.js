var prop = 60.00; // proporción alto/ancho*100 imagen principal
$(document).ready(function() {
$("ul.obgaleria").each(function() {
  var id = "#" + $(this).attr("id");
  var ancho = 100 / $(id + " li").length;
  $("head").append("<style>" + id + "{padding: 0 0 " + (prop + ancho) + "% 0;} " + id + " li{width:" + ancho + "%;padding: 0 0 " + ancho + "% 0;} " + id + " li:last-child {padding-bottom: " + prop + "%;}</style>");
  $(id + " li:first-child").clone().appendTo(id);
  $(id + " li:last-child").css({
    "width": "100%"
  });
  var enlace = $(id + " li:first-child").attr("data"); // Sólo si se usan enlaces
    $(id + " li:last-child img").wrap("<a href='" + enlace + "'></a>"); // Sólo si se usan enlaces  
  $(id + " li").click(function() {
    $(id + " li:last-child").remove();
    $(this).clone().appendTo(id).animate({
      width: "100%"
    }, 200);
    var enlace = $(this).attr("data"); // Sólo si se usan enlaces
    $(id + " li:last-child img").wrap("<a href='" + enlace + "'></a>"); // Sólo si se usan enlaces
  });
});
  });