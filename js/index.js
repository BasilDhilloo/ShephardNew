$(document).ready(function(){
    // Add minus icon for collapse element which is open by default
    $(".collapse.show").each(function(){
        $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
    });
    
    // Toggle plus minus icon on show hide of collapse element
    $(".collapse").on('show.bs.collapse', function(){
        $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
        $(this).prev(".card-header").find(".fa").removeClass("plusminus").addClass("minusplus");
        $(this).prev(".card-header").removeProperty("border-bottom: 1px solid #444");
    }).on('hide.bs.collapse', function(){
        $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
        $(this).prev(".card-header").find(".fa").removeClass("minusplus").addClass("plusminus");
        $(this).prev(".card-header").css("border-bottom: 1px solid #444");
    });


      //   // Toggle plus minus icon on show hide of collapse element
      //   $(".collapseJobs").on('show.bs.collapse', function(){
      //     $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
      //     $(this).prev(".card-header").find(".fa").removeClass("plusminus").addClass("minusplusJobs");
      // }).on('hide.bs.collapse', function(){
      //     $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
      //     $(this).prev(".card-header").find(".fa").removeClass("minusplusJobs").addClass("plusminus");
  
      // });
});


$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
});

// Header Style
window.addEventListener("scroll", function() {
    let navArea = document.getElementById("myTopnav");
    
    if (window.pageYOffset > 0) {
    navArea.classList.add("is-sticky");
    } else {
    navArea.classList.remove("is-sticky");
    }
    });
    

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  