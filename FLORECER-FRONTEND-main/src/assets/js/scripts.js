/*
	Active by TEMPLATE STOCK
	templatestock.co @templatestock
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/


jQuery(function($){
    var ProductImg = document.getElementById("ProductImg");
    var SmallImg = Document.getElementByClassName("small-img");

    SmallImg[0].onclick= function()
    {
      ProductImg.scr = SmallImg[0].scr
    }
    SmallImg[1].onclick= function()
    {
      ProductImg.scr = SmallImg[1].scr
    }

'use strict';


    /* ---------------------------------------------- /*
     * Preloader
    /* ---------------------------------------------- */
	(function () {
	    $(window).load(function() {
	        $('#pre-status').fadeOut();
	        $('#st-preloader').delay(350).fadeOut('slow');
	    });
	}());
    /* ---------------------------------------------- /*
     * Full Screen
    /* ---------------------------------------------- */
    (function () {
        $(".st-fullHeight").height($(window).height());

        $(window).resize(function(){
            $(".st-fullHeight").height($(window).height());
        });

    }());

});

let collapsibles = document.querySelectorAll('.faq-container')

collapsibles.forEach(element => {
    element.addEventListener("click", () =>{
        element.querySelector('.faq-answer').classList.toggle('open');
        element.querySelector('.question').classList.toggle('active');
        element.querySelector('.arrow-container').classList.toggle('up');
    })
});