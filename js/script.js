
// $(window).scroll(function(){
	
// 	let wScroll = $ (window).scrollTop();
		
// 		if(wScroll > 500){
// 			$(".nav1").css("padding", "20px 70px");
// 		}
// 		else{
// 			$(".nav1").css("padding", "20px 0px");
// 		}
// })

// sideBar ============================================================================================================
let menuMBoxWidth = $("#boxMenu").outerWidth(true);

function sideBarJs() {
	$("#menu").click(function () {
		$(".i-right").fadeToggle(10);
		$(".i-left").fadeToggle(10);


		if ($('#sideBar').css("left") == "0px") {
			$("#sideBar").animate({ left: `-${menuMBoxWidth}` }, 1000);
			$(".nav-item-cet").animate({ opacity: "0", top: "300px" }, 1000);
			$(".fa-chevron-right fa-angle-left").toggleClass("fa-angle-left");

		}
		else {
			$('#sideBar').animate({ left: `0px` }, 1000);
			$(".nav-item-cet").animate({ opacity: "1", top: "0px" }, 1800);
			$(".fa-chevron-right fa-angle-left").toggleClass("fa-angle-left");
		}
	})
}
sideBarJs();





// arrow btnUp ============================================================================================================
function arrowJs() {
	$(window).scroll(function () {
		let wScroll = $(window).scrollTop();

		if (wScroll > 500) {
			$("#btnUp").fadeIn(500);
		}
		else {	// لم اطلع اخفي السهم 
			$("#btnUp").fadeOut(500);
		}
	})
	$("#btnUp").click(function () {
		$("html,body").animate({ scrollTop: 0 }, 100);
	})
}
arrowJs();
//============================================================================================================

// home ============================================================================================================
// section-1 counter

function counterJS() {
	$('.counter').each(function () {
		var $this = $(this),
			countTo = $this.attr('data-count');
		$({ countNum: $this.text() }).animate({
			countNum: countTo
		},
			{
				duration: 3000,
				easing: 'linear',
				step: function () {
					$this.text(Math.floor(this.countNum));
				},
				complete: function () {
					$this.text(this.countNum);
				}
			});
	});
}

counterJS();



//   $('.counter').addClass('animated fadeInDownBig');
// -------------------------------
// section-1 
// SLIDER




//about ============================================================================================================
/* Filterable  */

$(document).ready(function () {
	$('.list').click(function () {
		const value = $(this).attr('data-filter');
		if (value == 'all') {
			$('.itemBox').show('1000');
		}
		else {
			$('.itemBox').not('.' + value).hide('1000');
			$('.itemBox').filter('.' + value).show('1000');
		}
	})

	// add active
	$('.list').click(function () {
		$(this).addClass('active').siblings().removeClass('active')
	})
})


// ========================================================

$(".disabled-votes-show").click(function () {
	$(".disabled-votes-show").css("animation", "none");
});

// =============================================================================
// btn nav en ar

function initLocalClocks() {
	// Get the local time using JS
	var date = new Date;
	var seconds = date.getSeconds();
	var minutes = date.getMinutes();
	var hours = date.getHours();

	// Create an object with each hand and it's angle in degrees
	var hands = [
		{
			hand: 'hours',
			angle: (hours * 30) + (minutes / 2)
		},
		{
			hand: 'minutes',
			angle: (minutes * 6)
		},
		{
			hand: 'seconds',
			angle: (seconds * 6)
		}
	];
	// Loop through each of these hands to set their angle
	for (var j = 0; j < hands.length; j++) {
		var elements = document.querySelectorAll('.' + hands[j].hand);
		for (var k = 0; k < elements.length; k++) {
			elements[k].style.webkitTransform = 'rotateZ(' + hands[j].angle + 'deg)';
			elements[k].style.transform = 'rotateZ(' + hands[j].angle + 'deg)';
			// If this is a minute hand, note the seconds position (to calculate minute position later)
			if (hands[j].hand === 'minutes') {
				elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle);
			}
		}
	}
}




// Profile
// Zoom images

// var imgs =  document.querySelectorAll(".item img"); //1
var imgs = Array.from(document.querySelectorAll(".itemImg img"));//8 //يجبلي رقم الصوره indexOf علشان لم اعمل Arrayتحول ل imgsعلشان ال Array.fromال

var lightBoxContainer = document.getElementById("lightBoxContainer");//3
var lightBoxItem = document.getElementById("lightBoxItem");	// 6

var currentIndex = 0;	// ده علشان سهم يمين و شمال 


//2	//ده علشان لم اضغط ع اي صوره تظهر 
for (var i = 0; i < imgs.length; i++) {

	imgs[i].addEventListener("click", function (eventInfo) {

		lightBoxContainer.style.display = "flex";//4	// display = "flex" واقول styleوادخل جوه ال lightBoxContainer لم اضغط ع الصوره امسك 

		var imgSrc = eventInfo.target.getAttribute("src");	//5	// يعني اسم الصوره المسار src ده بيجيب target

		lightBoxItem.style.backgroundImage = "url(" + imgSrc + ")";	//7	// بتاع كل صوره src واحط backgroundImage وادخل style ادخل جوه lightBoxItem اجيب 

		// ده علشان سهم يمين و شمال 
		currentIndex = imgs.indexOf(eventInfo.target);//10	// currentIndex انا كده بقول هات رقم الصوره اللي ضغط عليها وحط في 
	})
}

//===================================


$("#next").click(function () {
	currentIndex++;

	if (currentIndex == imgs.length) {
		currentIndex = 0;
	}

	var imgSrc = imgs[currentIndex].getAttribute("src");
	lightBoxItem.style.backgroundImage = "url(" + imgSrc + ")";
});

$("#prev").click(function () {
	currentIndex--;
	if (currentIndex < 0) {
		currentIndex = imgs.length - 1;
	}
	var imgSrc = imgs[currentIndex].getAttribute("src");
	lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
});

//=============================
$("#close").click(function () {
	lightBoxContainer.style.display = "none";
});


//============================
//16	//انا كده بقول لم اضغط ب الكيبورد سهم يمين او شمال يحرك الصور 
document.addEventListener("keydown", function (eventInfo) {
	//console.log(eventInfo)
	if (eventInfo.code == "ArrowRight") { //سهم يمين في الكيبورد ArrowRightال
		nextSlide();
	}

	else if (eventInfo.code == "ArrowLeft") { //سهم شمال في الكيبورد ArrowLeftال
		prevSlide();
	}

	else if (eventInfo.code == "Escape") { //اللي بيعمل خروج للعنصر Escده الEscapeال
		closeSlide();
	}
})

//============================
// ده علشان لم اضغط في اي مكان بره الصوره ب الماوس يلاغي الصوره 
document.addEventListener("click", test)
function test(e) {
	//console.log(e.target)
	if (e.target == lightBoxContainer) {
		lightBoxContainer.style.display = "none";
	}
}




// -----------------------------------
// password ❤


$(".myFunction").click(function () {
	let stste2 = document.getElementById("inputPassword");

	if (stste2.type === "password") {
		stste2.type = "text";

		document.getElementById("hidePassword").style.display = "inline-block";
		document.getElementById("hidePassword").style.color = "#ff9c0c";
		document.getElementById("showPassword").style.display = 'none';
	}
	else {
		stste2.type = "password";
		document.getElementById("hidePassword").style.display = "none";
		document.getElementById("showPassword").style.display = 'inline-block';
		document.getElementById("showPassword").style.color = "#ff9c0c";
	}
});
$(".myFunctionRedme").click(function () {

	let stste2 = document.getElementById("inputRedmePassword");

	if (stste2.type === "password") {
		stste2.type = "text";

		document.getElementById("hidePasswordRedme").style.display = "inline-block";
		document.getElementById("hidePasswordRedme").style.color = "#ff9c0c";
		document.getElementById("showPasswordRedme").style.display = 'none';
	}
	else {
		stste2.type = "password";
		document.getElementById("hidePasswordRedme").style.display = "none";
		document.getElementById("showPasswordRedme").style.display = 'inline-block';
		document.getElementById("showPasswordRedme").style.color = "#ff9c0c";
	}
});


//=======================================================================================
// loading
$(document).ready(function () {
	$("#loading").fadeOut(3000, function () {
		$("body").css("overflow-y", "auto");
	});
});


$('.responsive').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,

  autoplay: true,
  autoplaySpeed: 2000,

  responsive: [
	{
		breakpoint: 1300,
		settings: {
		  slidesToShow: 4,
		  slidesToScroll: 1,
		  infinite: true,
		  dots: false
		}
	  },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
	









// ========================================================================
// sideBar
$('.btn-nav').click(function () {
	$(this).toggleClass("click");
	$('.sidebar-nav').toggleClass("show");
});


$('.sidebar-nav ul li a').click(function () {
	var id = $(this).attr('id');
	$('sidebar-nav ul li ul.item-show-' + id).toggleClass("show");
	$('sidebar-nav ul li #' + id + ' span').toggleClass("rotate");

});

$('sidebar-nav ul li').click(function () {
	$(this).addClass("active-sidebar").siblings().removeClass("active-sidebar");
});

let maunn = document.querySelector('.maunn');
maunn.addEventListener('click', function () {
	this.classList.toggle('is-active');
})


$(document).ready(function () {
	$('.mun-align').click(function () {
		$('.box-cilsh-nav').toggleClass('active')
	})
})

// =======================================================================================

var SwiperTop = new Swiper('.mySwiper', {
	spaceBetween: 0,
	effect: "coverflow",

	// speed: 10000,
	autoplay: {
		delay: 1500,
	},
	loop: true,
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: 'auto',
	allowTouchMove: false,
	disableOnInteraction: true,
	autoplayDisableOnInteraction: false,

	coverflowEffect: {
		rotate: 0,
		stretch: 0,
		depth: 300,
		modifier: 1,
		slideShadows: true,
	},

	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	// pagination: {
	// 	el: ".swiper-pagination",
	// 	clickable: true,
	//   },
});
$(".mySwiper").hover(function () {
	SwiperTop.autoplay.stop();
}, function () {
	SwiperTop.autoplay.start();
});

$('.slider-1').owlCarousel({
	nav: true,
	dots: false,
	center: true,
	loop: false,
	margin: 50,
	// rtl: true,
	autoplay: false,
	autoplayTimeout: 3000,
	autoplayHoverPause: true,
	responsiveClass: true,
	// animateOut: 'fadeOut',

	responsive: {
		0: {
			items: 1,
		},
		600: {
			items: 1,
		},
		1000: {
			items: 2,
		}
	}
});
