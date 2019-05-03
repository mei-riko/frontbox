import $ from "jquery";

$(document).ready(() => {
    //Input mask
    if ( $(".in-phone").length > 0 ) {
        $(".in-phone").inputmask({
            mask: "+7 999 999 99 99", 
            placeholder: "", 
            showMaskOnHover: true, 
            onincomplete: function(){ 
                $(this).closest("form").addClass('error-phone'); 
                $(this).addClass('error'); 
                $(this).siblings(".error_phone").addClass('error').html('Укажите корректный номер'); 
            }, 
            oncomplete: function(){ 
                $(this).closest("form").removeClass('error-phone'); 
                $(this).removeClass('error'); 
                $(this).siblings(".error_phone").removeClass('error').html(''); 
            }, 
        });
    }

    var inputs = document.querySelectorAll('.inputfile');
    Array.prototype.forEach.call(inputs, function(input){
    var label	 = input.nextElementSibling,
        labelVal = label.innerHTML;
    input.addEventListener('change', function(e){
        var fileName = '';
        if( this.files && this.files.length > 1 )
        fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
        else
        fileName = e.target.value.split( '\\' ).pop();
            if( fileName )
        label.querySelector( 'span' ).innerHTML = fileName;
        else
        label.innerHTML = labelVal;
        });
    });

    $('#service').slick({
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        dots: false, 
        infinite: true,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
          ]
    });

});