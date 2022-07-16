
// carousel 
  $('#nadwa .owl-carousel').owlCarousel({
        rtl:true,
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    }) 
    $(document).ready(function(){
        $('#nadwa .owl-dots').addClass('d-none'); 
        let owl = $('#news .owl-carousel');
        owl.owlCarousel({
           rtl : true,
          loop:true,
          margin:10,
          nav:false,  
          items:1,
          margin:30, 
        });
        
        // Custom Button
        $('.customNextBtn').click(function() {
          owl.trigger('next.owl.carousel');
        });
        $('.customPreviousBtn').click(function() {
          owl.trigger('prev.owl.carousel');
        });
        $('#news .owl-dots').addClass('d-none'); 

    // function to load navbar and footer in the html pages 
      $(function(){
        $("#nav-placeholder").load("header.html");
        $("#footer-placeHolder").load("Footer.html");
      }); 

$('.carousel-diouf').owlCarousel({
  rtl : true,
   loop:true,
   margin:10,
   nav:false,  
   items:1,
   margin:30, 
});
       
    }); 
$(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>ندوة الحاج الكبرى</small>';
			}
		}
	});
 

});


// pagination of Historical page to divide table blocks
let itemsTable = $(".list-wrapper-pagination .table-block");
let numItemsTable= itemsTable.length;
let perPageTable = 1;

itemsTable.slice(perPageTable).hide();
$('#pagination-container').pagination({
    items: numItemsTable,
    itemsOnPage: perPageTable,
    prevText: "&laquo;",
    nextText: "&raquo;",
    onPageClick: function (pageNumber) {
        let showFrom = perPageTable * (pageNumber - 1);
        let showTo = showFrom + perPageTable;
        itemsTable.hide().slice(showFrom, showTo).show();
    }
}); 
