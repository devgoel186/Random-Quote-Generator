// Thanks to Todd Chaffee for Camperbot code for JSON Quote Data
var quotearr=[]
var authorarr=[]
var rand=0

fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
.then(response => response.json())
.then(data => {
  var arr=data.quotes
  quotearr=arr.map((val) => (val.quote))
  authorarr=arr.map((val1) => (val1.author))
  rand = Math.floor(Math.random()*quotearr.length)
  $("#text").html(quotearr[rand])
  $("#author").html("~" + authorarr[rand])
  $("body").css("background-color", "yellow")
})

var colors = ["#e74c3c", "#9b59b6", "#000", "#ADEFD1FF", "#00203FFF", "#ED2B33FF", "#2C5F2D", "#EEA47FFF", "#0063B2FF", "#2BAE66FF"]
var count = 0
function swap() {
  $("#new-quote").click(function() {
    $("#text,#author").css("opacity", 0)
    $('body').animate({
    backgroundColor: colors[count],
    opacity: 1
    }, 500)
    $("#text,#author").animate({
      opacity: 1
    }, 500)
    rand = Math.floor(Math.random()*quotearr.length)
    $("#text").html(quotearr[rand])
    $("#author").html("~" + authorarr[rand])
    count++
    if(count==colors.length)
      count=0
})
}

$(document).ready(function() {
  swap()
  $("#tweet-quote").click(function() {
    $(this).attr("href", "https://twitter.com/intent/tweet?hashtags=quotes&text=" + encodeURIComponent(quotearr[rand]+ " ~ " +authorarr[rand]))
  })
})
