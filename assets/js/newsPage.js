


/***********************
 * 
 * Functions to click on the news on the homepage then go dynamically for that specific post news
 * 
 * **********************/

// dynamic function to go to the specific block of news
function gotoNews(number){  
            url = 'http://127.0.0.1:5502/news.html?' + number ;
            document.location.href = url;  
  }
//  pagination for news blocks
  function showPages(id=1 ){ 
    let totalNumberOfPages = 5;   
    for(let i=1; i<=totalNumberOfPages; i++){ 
        $("ul").find(`[aria-details='${i}']`).removeClass('current');
        if (document.getElementById('page'+i)) { 
            document.getElementById('page'+i).style.display='none';
        } 
    }
        if (document.getElementById('page'+id)) { 
            document.getElementById('page'+id).style.display='block';
        }
        $("ul").find(`[aria-details='${id}']`).addClass('current');
};

  window.onload = function () {
    var url = document.location.href,
        params = url.split('?')[1].split('&'); 
        showPages(params[0])
}
