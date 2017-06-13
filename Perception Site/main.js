
// form functions

$(".formBox").click(function(){
    $(this).find('.formInput').focus();
    $("html, body").animate({ scrollTop: $(document).height()-$(window).height() });
    updateNavColor($contact);
    updateLaserTop($contact);
});

let $messageArea = $('.messageArea'),
    $sendBtn = $('.sendBtn');

$messageArea.keyup(function(e){
        if ($messageArea.val() === "") {
            $sendBtn.removeClass('sendActive').addClass('sendDeactive');
        } else {
            $sendBtn.addClass('sendActive').removeClass('sendDeactive');
        }
});

// from functions




// setting #home div size



let windowHeight = $(window).height(),
    titleHeight = $('.title').height(),
    newHomeHeight = windowHeight - titleHeight - 40,
    $homeDiv = $('#home');
    $homeDiv.css({height:newHomeHeight + 'px'});



// setting #home div size

$(document).ready(function(){
    $(window).scrollTop(0);
});



