var controllerTLNo = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "0.7", duration: "0" , reverse:false}});
var controllerTL = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "1", duration: "0" , reverse:true}});
var controllerTL50 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "0.7", duration: "0" , reverse:true}});




// index animated on start
function animateIndexTop(){
	//top-screen elements animate
	var tl = new TimelineLite();
	tl.from('.no-device_xs .index-top-sect .sect-bg', 2, {opacity:0, scale:1.2}, 0.7);
	tl.from('.no-device_xs .index-top-sect .sect-titles', 2, {opacity:0, y:100}, 1.5);
	tl.from('.no-device_xs .index-top-sect .takeit-box', 2, {opacity:0, x:-50}, 2);
	tl.from('.no-device_xs .index-top-sect .graph-box',8, { opacity:0,width:0}, 1);
	tl.from('.no-device_xs .index-top-sect .analytics-box',1, { opacity:0}, 2);
	var counter1 = { score: stat.USD };
	var counter2 = { score: stat.BTC };
	var counter3 = { score: stat.ETH };
	var tl2 = new TimelineLite();
	tl2.staggerFrom('.stat-row .stat-item', 3, {y:110, opacity:0, ease: Power1.easeInOut}, 0.50, 1);
	tl2.from(counter1, 3, {score: 0, roundProps:"score",onUpdate:updateNumber, onComplete:completeNumber1, ease: Linear.easeNone}, 0.5);
	tl2.from(counter2, 4, {score: 0, roundProps:"score",onUpdate:updateNumber, onComplete:completeNumber2,ease:Circ.easeOut}, 0.5);
	tl2.from(counter3, 5, {score: 0, roundProps:"score",onUpdate:updateNumber, onComplete:completeNumber3,ease: Power1.easeInOut},0.5);
	function updateNumber() {
		$("#number_stat01").text(counter1.score);
		$("#number_stat02").text(counter2.score);
		$("#number_stat03").text(counter3.score);
	}
	function completeNumber1(){
		$("#number_stat01").css("opacity", 1)
	}
	function completeNumber2(){
		$("#number_stat02").css("opacity", 1)
	}
	function completeNumber3(){
		$("#number_stat03").css("opacity", 1)
	}
}

TweenLite.from('.no-device_xs .inner-tizer-sect .sect-bg', 2, {autoAlpha: 0, scale:1.2, delay:0.5 })

//Global  elements Animation
var objTitles = {};
$(".no-device_xs .jsTitleAnime").each(function (index, elem) {
	var title = $(this);
	objTitles[index] = new TimelineLite();
	new ScrollMagic.Scene({triggerElement: elem})
	.setTween(objTitles[index].from(title, 1, {opacity:0, y:80, ease: Power1.easeInOut} ))
	.duration(1000)
	.addTo(controllerTL);
});




//Global  elements Animation
var objTitles2 = {};
$(".no-device_xs .jsTitleAnime2").each(function (index, elem) {
	var title = $(this);
	objTitles2[index] = new TimelineLite();
	new ScrollMagic.Scene({triggerElement: elem})
	.setTween(objTitles2[index].from(title, 2, {opacity:0, y:100, ease: Power1.easeInOut} ))
	.duration(1000)
	.addTo(controllerTL);
});

var objStaggerY = {};
$(".no-device_xs  .jsAnimeStagger").each(function (index, elem) {
	var title = $(this).find(".js_AnimeStaggerItem");
	objStaggerY[index] = new TimelineLite();
	new ScrollMagic.Scene({triggerElement: elem})
	.setTween(objStaggerY[index].staggerFrom(title, 1, {opacity:0, y:50, ease: Power1.easeInOut}, 0.5 ))
	.duration(1000)
	.addTo(controllerTL);
});


var objTitlesFade = {};
$(".no-device_xs  .jsTitleAnimeFade").each(function (index, elem) {
	var title = $(this);
	objTitlesFade[index] = new TimelineLite();
	new ScrollMagic.Scene({triggerElement: elem})
	.setTween(objTitlesFade[index].from(title, 0.6, {opacity:0,  ease: Power1.easeInOut} ))
	.duration(1000)
	.addTo(controllerTL);
});

var objTitlesFade2 = {};
$(".no-device_xs  .jsTitleAnimeFade2").each(function (index, elem) {
	var title = $(this);
	objTitlesFade2[index] = new TimelineLite();
	new ScrollMagic.Scene({triggerElement: elem})
	.setTween(objTitlesFade2[index].from(title, 1, {opacity:0,  ease: Power1.easeInOut} ))
	.duration(1000)
	.addTo(controllerTL50);
});

var objTitlesScale = {};
$(".no-device_xs .jsTitleAnimeScale").each(function (index, elem) {
	var title = $(this);
	objTitlesScale[index] = new TimelineLite();
	new ScrollMagic.Scene({triggerElement: elem})
	.setTween(objTitlesScale[index].from(title, 1, {opacity:0, scale:2, ease: Power1.easeInOut} ))
	.duration(1000)
	.addTo(controllerTL);
});
var objTitlesScaleFrom = {};
$(".no-device_xs .jsTitleAnimeScaleFrom").each(function (index, elem) {
	var title = $(this);
	objTitlesScaleFrom[index] = new TimelineLite();
	new ScrollMagic.Scene({triggerElement: elem})
	.setTween(objTitlesScaleFrom[index].from(title, 2, { scale:0.7, opacity:0} ))
	.duration(1000)
	.addTo(controllerTL);
});



var objTitlesLeft1 = {};
$(".no-device_xs .jsTitleAnimeLeft").each(function (index, elem) {
	var title = $(this);
	objTitlesLeft1[index] = new TimelineLite();
	new ScrollMagic.Scene({triggerElement: elem})
	.setTween(objTitlesLeft1[index].from(title, 1, {opacity:0, x:-50, ease: Power1.easeInOut} ))
	.duration(1000)
	.addTo(controllerTL);
});

var objTitlesWidth = {};
$(".no-device_xs .jsTitleAnimeWidth").each(function (index, elem) {
	var title = $(this);
	objTitlesWidth[index] = new TimelineLite();
	new ScrollMagic.Scene({triggerElement: elem})
	.setTween(objTitlesWidth[index].from(title, 3, {opacity:0, width:0, ease: Power1.easeInOut} ))
	.duration(1000)
	.addTo(controllerTL);
});

var objTitlesTop = {};
$(".no-device_xs .jsTitleAnimeTop").each(function (index, elem) {
	var title = $(this);
	objTitlesTop[index] = new TimelineLite();
	new ScrollMagic.Scene({triggerElement: elem})
	.setTween(objTitlesTop[index].from(title, 1, {opacity:0, y:-100, ease: Power1.easeInOut} ))
	.duration(1000)
	.addTo(controllerTL);
});
var objTitlesRight = {};
$(".no-device_xs .jsTitleAnimeRight").each(function (index, elem) {
	var title = $(this);
	objTitlesRight[index] = new TimelineLite();
	new ScrollMagic.Scene({triggerElement: elem})
	.setTween(objTitlesRight[index].from(title, 1, {opacity:0, x:50, ease: Power1.easeInOut} ))
	.duration(1000)
	.addTo(controllerTL);
});

jQuery(document).ready(function($) {
	controllerTL.update();
	controllerTL50.update();
	
});