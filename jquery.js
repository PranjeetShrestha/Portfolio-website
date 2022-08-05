/*-----------    -----------*/
$(function(){
$("#hide").click(function()
{
    $("p").hide();
});

$("#show").click(function()
{
    $("p").show();
});
/*-----------  getting value  -----------*/
var val=$("a").attr("href");

/*----------- removing href   -----------*/
$("a").removeAttr("href")
alert(val)

/*-----------  getting value from html  -----------*/
val=$('p').text()
alert(val)
alert($('#input').val())

$("#demo").append("<b>hello world</b>")

$("#demo").before(alt=$("<u></u>").text("This is shown at the beginning"))

});

