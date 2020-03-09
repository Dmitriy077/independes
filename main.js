$(function() {
	// Главный слайдер

	$('.main_slider').slick({
		// autoplay: true,
  		// autoplaySpeed: 3000,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		appendArrows:'.main_slider_arrows',
		prevArrow:'<div class="main_slider_arrows_prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
		nextArrow:'<div class="main_slider_arrows_next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
	});





	var arrow = $( ".main_slider_arrows" ).width();
    $( ".main_slider_arrows" ).css('margin-left', -arrow/2 );

    var about_img = $( ".main_about_img" ).height();
    $( ".main_about_img" ).css('margin-top', -about_img/2 );





	// Селекты

	$('.search_select').selectBoxIt({
    defaultText : 'Выбор категории',
    downArrowIcon : "icon", 
    mouseenter : 'none'
	});


// onepage_scroll

$("#fullpage").onepage_scroll({
   // sectionContainer: "section", // контейнер, к которому будет применяться скролл
   // easing: "ease", // Тип анимации "ease", "linear", "ease-in", "ease-out", "ease-in-out"
   // animationTime: 1000, // время анимации
   // pagination: false, // скрыть или отобразить пагинатор
   // updateURL: false // обновлять URL или нет
});


$('.onepage-pagination').addClass('scroll_c');
$('.onepage-pagination li:first-child a').html('<div class="icon_custom icon-home"><div class="icon_description"><p>Дом</p></div></div>');
$('.onepage-pagination li:nth-child(2) a').html('<div class="icon_custom icon-cat"><div class="icon_description"><p>Категории</p></div></div>');
$('.onepage-pagination li:nth-child(3) a').html('<div class="icon_custom icon-video"><div class="icon_description"><p>Видео</p></div></div>');
$('.onepage-pagination li:nth-child(4) a').html('<div class="icon_custom icon-cont"><div class="icon_description"><p>Контакты</p></div></div>');



// Маски

$(".form_tel").mask("+7 (999) 999-9999");





// popup

$('form').submit(function() {
	return false;
});

$('.header_push').on('click', function() {
	$(".popup_wrap").css('display', 'flex');
});

$('.popup_esc').on('click', function() {
	$(".popup_wrap").hide();
});
$(document).mouseup(function (e) {
    var container = $(".popup_wrap");
    if (container.has(e.target).length === 0){
        container.hide();
    }
});



});


ymaps.ready(init);
    function init(){ 
        // Создание карты.    
        var myMap = new ymaps.Map("mainMap", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.1382213582919,61.37796458984373],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 12
        });

        myMap.controls
        	.remove('geolocationControl')
        	.remove('searchControl')
        	.remove('trafficControl')
        	.remove('typeSelector')
        	.remove('fullscreenControl')
        	// .remove('zoomControl')
        	.remove('rulerControl')
        	.remove('control.Button');

        myMap.behaviors.disable([
			// 'drag',
			'scrollZoom'
        	]);


		myMap.setType('yandex#hybrid');

		
        var myPlacemark = new ymaps.Placemark([55.1702213582919,61.37796458984373], {}, {
    		iconLayout: 'default#image',
		    iconImageHref: 'img/pin.png',
		    iconImageSize: [44, 62],
		    iconImageOffset: [-10, -40],
		    // zIndex: 999,
        });
		myMap.geoObjects.add(myPlacemark);
    }