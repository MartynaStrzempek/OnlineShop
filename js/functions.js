$(function(){

    $('.formControl').on('focusout', function(){

        if($(this).val().length > 0) {
            $(this).addClass('hasValue');
        }
        else{
            $(this).removeClass('hasValue');
        }
    });
});
