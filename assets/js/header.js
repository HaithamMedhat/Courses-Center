
// grayscale color when click on button
$(".vision").on('click' , function() { 
    console.log('clickable')
      $('body').toggleClass('special'); 
    });
    
//   for navbar icon
  function putIcon(x) {
    if (x.matches) { // If media query matches
        document.querySelector('.navbar-toggler').innerHTML = `
        <span class="navbar-toggler-icon"> <i class="fa-solid fa-bars"></i> </span>
       `;
    $('.gmenu-button').on('click' , ()=>{  
      $('#gmenu-Lan .responcive-dropdown').toggleClass('d-block-impo'); 
    });
    $('.cart-btn').on('click' , ()=>{ 
        $('#eye .responcive-dropdown').toggleClass('d-block-impo'); 
    });
    $('.search-btn').on('click' , ()=>{ 
        $('#search .responcive-dropdown').toggleClass('d-block-impo'); 
    }) 
    $('.post-content .read').addClass('d-none');
    $('.read-responice').addClass('d-block');
    $('.read-responice').removeClass('d-none');
    }  

  }  
  let x = window.matchMedia("(max-width: 992px)")
  putIcon(x); 

  $(document).ready(()=>{
      // sticky Navbar & responsive
  window.onscroll = function() {scrollFunction()}; 
  let navbar = document.getElementById("stickyNavbar");
  let firstrow = document.querySelector('.first-row')
  let sticky = navbar.offsetTop;

function scrollFunction() {
  if (window.pageYOffset >= sticky) { 
    navbar.classList.add("sticky");
    firstrow.classList.add("w-100");
    firstrow.classList.add("px-4");
  } else {
    navbar.classList.remove("sticky");
    firstrow.classList.remove("w-100");
    firstrow.classList.remove("px-4");
  }
} 
  });

//   gmenu of the navbar
$('#show-dropdown-icon').on('click' , ()=>{
    $('.gmenu').slideToggle('1500')
});

// Show icon 
$('.navbar-toggler').on('click' , ()=>{
  
})