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


// fullpage

$("#fullpage").onepage_scroll({
   // sectionContainer: "section", // контейнер, к которому будет применяться скролл
   // easing: "ease", // Тип анимации "ease", "linear", "ease-in", "ease-out", "ease-in-out"
   // animationTime: 1000, // время анимации
   // pagination: false, // скрыть или отобразить пагинатор
   // updateURL: false // обновлять URL или нет
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