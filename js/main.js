document.body.onload = function(){

  setTimeout(function(){

      var preloader = document.getElementById('page-preloader');
      if (!preloader.classList.contains('done')){
      preloader.classList.add('done');
      }
  }, 2000); 
}

$(document).ready(function () {
 
  $('.question-slider__item').on('click', function(){

    var question = $('.question-slider__item_one').closest('.question');
    
    if (question.find('.question-slider_surprice').length==0){
      // console.log(question.find('.question-slider_surprice'));
      
      question.removeClass('question_active');
      $('.question-slider__item_one').removeClass('question-slider__item_one');
      // console.log(question.next('.question').find('.question-slider__item'));
      question.next('.question').find('.question-slider__item').addClass('question-slider__item_one');
      question.next('.question').addClass('question_active');
      $('.question-slider__item_one').lazyLoadXT();
    }else{
    }
  });
  $('#questionNext').on('click', function(){
    var question = $('.question_active');
    question.removeClass('question_active');
    question.next('.question').find('.question-slider__item').addClass('question-slider__item_one');
    question.next('.question').addClass('question_active');
    $('.question_active').lazyLoadXT();
  });

  //Слайдеры 
  $('#CommentSlider').slick({
    // infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // dots: true,
    speed: 500,
    autoplay: false,
    prevArrow: $('.comment-arrow__left'),
    nextArrow: $('.comment-arrow__right'),
    responsive: [
      {
        breakpoint: 800,
        settings: {
          autoplay: true,
          autoplaySpeed: 2000,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
 
    ]
  });
  $('#productionSlider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 3000,

    prevArrow: $('.production-arrow__left'),
    nextArrow: $('.production-arrow__right'),
  });
  //тест + слайдеры к тесту 
  $('#question1').slick({
    infinite: true,
    slidesToShow: 6,
    // slidesToScroll: 1,
    speed: 1500,
    prevArrow: $('.test-arrow__left'),
    nextArrow: $('.test-arrow__right')
  });

  //Фильтрация каталога
  var i, itemToShow;

  $('.filter').on('click', function(){


    $('.blind').addClass('blind_active');
    // $('.filter').trigger('click');
    // $('.filter')./trigger('click');
    // setTimeout($('.blind').removeClass('blind_active'), 1000);
  
    setTimeout(function() {
    $('.blind').removeClass('blind_active')
    }, 700);
  });
  
  $('.catalog-wrap__item').addClass('catalog-wrap__item_show');
  
  $('#filter1').on('click', function(){
    itemToShow = $('.hallway');
    
    setTimeout(function() {
      $('.catalog-wrap__item').removeClass('catalog-wrap__item_show');

      for(i=0;i<itemToShow.length;i++){

        $(itemToShow[i]).addClass('catalog-wrap__item_show');
        $(itemToShow[i]).lazyLoadXT();// initLazyElements(); 

      }

    }, 300);
  });
  $('#filter2').on('click', function(){
    itemToShow = $('.integrated');
    setTimeout(function() {
      $('.catalog-wrap__item').removeClass('catalog-wrap__item_show');

      for(i=0;i<itemToShow.length;i++){

        $(itemToShow[i]).addClass('catalog-wrap__item_show');
        $(itemToShow[i]).lazyLoadXT();

      }
    }, 300);
    // $('.catalog-wrap__item').removeClass('catalog-wrap__item_show');
    // itemToShow = $('.integrated');
    // for(i=0;i<itemToShow.length;i++){
    //   $(itemToShow[i]).addClass('catalog-wrap__item_show');
    //   $(itemToShow[i]).lazyLoadXT();

    // }
  });
  $('#filter3').on('click', function(){
    itemToShow = $('.bedroom');
    setTimeout(function() {
      $('.catalog-wrap__item').removeClass('catalog-wrap__item_show');

      for(i=0;i<itemToShow.length;i++){

        $(itemToShow[i]).addClass('catalog-wrap__item_show');
        $(itemToShow[i]).lazyLoadXT();

      }
    }, 300);
   
  });
  $('#filter4').on('click', function(){
    itemToShow = $('.corner');
    setTimeout(function() {
      $('.catalog-wrap__item').removeClass('catalog-wrap__item_show');

      for(i=0;i<itemToShow.length;i++){

        $(itemToShow[i]).addClass('catalog-wrap__item_show');
        $(itemToShow[i]).lazyLoadXT();

      }
    }, 300);
   
  });
  $('#filter5').on('click', function(){
    itemToShow = $('.mirror');
    setTimeout(function() {
      $('.catalog-wrap__item').removeClass('catalog-wrap__item_show');

      for(i=0;i<itemToShow.length;i++){

        $(itemToShow[i]).addClass('catalog-wrap__item_show');
        $(itemToShow[i]).lazyLoadXT();

      }
    }, 300);
   
  });
  $('#filter6').on('click', function(){
    itemToShow = $('.lakobel');
    setTimeout(function() {
      $('.catalog-wrap__item').removeClass('catalog-wrap__item_show');

      for(i=0;i<itemToShow.length;i++){

        $(itemToShow[i]).addClass('catalog-wrap__item_show');
        $(itemToShow[i]).lazyLoadXT();

      }
    }, 300);
   
  });
  
  //Валидация форм
  $('#requestForm').validate({
    rules: {
      phone: {
        required: true
      }
    },
    messages: {
      phone: {
        required: jQuery.validator.format("Укажите телефон")
      },
    },
    /*label --> div*/
    errorElement: "div",
    errorClass: "invalid"
  });
 
  function validateForm() {
    $('#modalForm').validate({
      rules: {
        phone: {
          required: true
        }
      },
      messages: {
        phone:{
          required: jQuery.validator.format("Укажите номер телефона")
        }
        //  {
        //   required: jQuery.validator.format("Укажите телефон")
        // },
      },
      /*label --> div*/
      errorElement: "div",
      errorClass: "invalid"
    });
    jQuery.extend(jQuery.validator.messages, {
      required: "Укажите номер телефона",
      remote: "Please fix this field.",
      email: "Please enter a valid email address.",
      url: "Please enter a valid URL.",
      date: "Please enter a valid date.",
      dateISO: "Please enter a valid date (ISO).",
      number: "Please enter a valid number.",
      digits: "Please enter only digits.",
      creditcard: "Please enter a valid credit card number.",
      equalTo: "Please enter the same value again.",
      accept: "Please enter a value with a valid extension.",
      maxlength: jQuery.validator.format("Please enter no more than {0} characters."),
      minlength: jQuery.validator.format("Please enter at least {0} characters."),
      rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
      range: jQuery.validator.format("Please enter a value between {0} and {1}."),
      max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
      min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
  });
  };
 
  
  // modal-windows
  $('.toModal').on('click', function () {
    $('#modal').addClass('modal_active');
    var catalogInput = $('#feedbackInput').val();
    $('#modalInput').val(catalogInput);
  });

  $('#closeModal').on('click', function () {
    $('#modal').removeClass('modal_active');
  });

  $('#sendRequest').on('click', validateForm());
  var s1,s2,s,n;
  

  var i=1;

  $('.toGallery').on('click', function () {
    // initGallery;
    // $("body").css("overflow-y","hidden");
    $('.body').addClass('no-scroll');
    // jQuery('#scrollbar').tinyscrollbar({
    //   scroll: false,
    // });   
    s1 = '<div class="gallery-slider__item"><div class="gallery-slider__img"><img src="img/catalog/image (';
    s2 = ').jpg" alt=""></div></div>';
    n=93; //число картинок
    $('#gallery').addClass('gallery_active');
    for (var i=n;i>1;i--){
      s = s1 + i +s2;
      $('#gallerySliderFirst').after(s);
    }
    $('#gallerySliderFirst').lazyLoadXT();

    $("#galleryslider").slick('reinit');
    $('.gallery-arrow__img').lazyLoadXT();

  });

  $('#closeGallery').on('click', function () {
    // $("body").css("overflow-y","visible");
    $('.body').removeClass('no-scroll');
    var scrollTop = $('#toCatalog').offset().top;
    $(document).scrollTop(scrollTop);

    $('#gallery').removeClass('gallery_active');

    if($(document).width()<=800){
      $("#galleryslider").slick('unslick');
    }
  });

  $('#galleryslider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 700,
    rows: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    prevArrow: $('.gallery-arrow__left'),
    nextArrow: $('.gallery-arrow__right'),
    responsive: [
      {
        breakpoint: 800,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
 
    ]
  });

  

  $('.toGalleryPro').on('click', function () {
    // initGallery;
    // $("#gallerySliderPro").slick('unslick');
    // $("body").css("overflow-y","hidden");
    $('.body').addClass('no-scroll');

    s1 = '<div class="gallery-slider__item gallery-slider__item_pro"><div class="gallery-slider__img"><img src="img/production/production (';
    s2 = ').jpg" alt=""></div></div>';
    n=3; //число картинок
    $('#galleryPro').addClass('gallery_active');
    for (var i=n;i>1;i--){
      s = s1 + i +s2;
      $('#gallerySliderProFirst').after(s);
    }
    $('#gallerySliderProFirst').lazyLoadXT();

    $("#gallerySliderPro").slick('reinit');
    $('.gallery-arrow__img').lazyLoadXT();

  });

  $('#closeGalleryPro').on('click', function () {
    // $("body").css("overflow-y","visible");
    $('.body').removeClass('no-scroll');
    var scrollTop = $('#toPro').offset().top;
    $(document).scrollTop(scrollTop);

    $('#galleryPro').removeClass('gallery_active');

    if($(document).width()<=800){
      $("#gallerySliderPro").slick('unslick');
    }
  });
  
  $('#gallerySliderPro').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 700,
    rows: 1,
    autoplay: true,
    autoplaySpeed: 1500,

    prevArrow: $('.gallery-arrow__left'),
    nextArrow: $('.gallery-arrow__right'),
    responsive: [
      {
        breakpoint: 800,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
 
    ]
  });


  //Маски для форм 
  $('.input-phone').mask('8 (999) 999 99-99');
  $('.input-size').mask('999 x 999 x 999');

  // Динамическое создание элементов gallery

  // ползунки 

  $('#A').on('click', function(){
    valueA = $( "#A" ).slider("option", "value");
    console.log(valueA);
  });

  $(function () {
    var handle = $("#A");
    $("#sliderA").slider({
      min: 0,
      max: 300,
      value: 0,
      create: function () {
        handle.text($(this).slider("value"));
      },
      slide: function (event, ui) {
        handle.text(ui.value);
      }
    });
  });

  $(function () {
    var handle = $("#B");
    $("#sliderB").slider({
      min: 0,
      max: 300,
      create: function () {
        handle.text($(this).slider("value"));
      },
      slide: function (event, ui) {
        handle.text(ui.value);
      }
    });
  });

  $(function () {
    var handle = $("#C");
    $("#sliderC").slider({
      min: 0,
      max: 300,
      value: 0,
      create: function () {
        handle.text($(this).slider("value"));
      },
      slide: function (event, ui) {
        handle.text(ui.value);
      }
    });
  });
});