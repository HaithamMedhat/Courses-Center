
function gotoNews(number){  
  url = 'http://127.0.0.1:5502/news.html?' + number ;
document.location.href = url;  
}
window.onload = function () {
var url = document.location.href,
params = url.split('?')[1].split('&');
showPages(params[0])
}
