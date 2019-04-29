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
});