let $laser = $('.laserShape'),
    $menuArray = $('nav a'),
    newLaserTop = 0;

$menuArray.hover(function(){
    updateNavColor($(this));
    $menuArray.click(function(){
        let $this = $(this);
        if ($this.text() === "CONTACT") {
            $('input[name="name"]').focus();
            updateLaserTop($contact);
        } else {
            updateNavColor($this);
        }
    });
}, function(){
    $menuArray.each(function(i){
        if (($menuArray.eq(i).position().top + 38) - $laser.position().top === 0) {
            updateNavColor($menuArray.eq(i));
        }
    })
});

function updateLaserTop($el) {
    newLaserTop = $el.position().top + 38;
    $laser.css({top:newLaserTop});
}

function updateNavColor ($el) {
    $nav.find('a').css({color:'#5a5a6c'});
    $el.css({color:'white'});
}


let $nav = $('.navMenu'),
    $exploitsDiv = $('#exploits'),
    $techDiv = $('#technology'),
    $productDiv = $('#product'),
    $companyDiv = $('#company'),
    $articlesDiv = $('#articles'),
    $contactDiv = $('#contact'),
    $home = $('nav a[href="#home"]'),
    $exploits = $('nav a[href="#exploits"]'),
    $tech = $('nav a[href="#technology"]'),
    $product = $('nav a[href="#product"]'),
    $company = $('nav a[href="#company"]'),
    $articles = $('nav a[href="#articles"]'),
    $contact = $('nav a[href="#contact"]');

$home.css({color:'white'});

function findNavPosition() {
    let $windowScroll = $(window).scrollTop() + 1;

    if ($homeDiv.visible(true)) {
        return $home;
    } else if ($exploitsDiv.visible(true) || $exploitsDiv.offset().top <= $windowScroll && $techDiv.offset().top >= $windowScroll) {
        return $exploits;
    } else if ($techDiv.offset().top <= $windowScroll && $productDiv.offset().top >= $windowScroll) {
        return $tech;
    } else if ($productDiv.offset().top <= $windowScroll && $companyDiv.offset().top >= $windowScroll) {
        return $product;
    } else if ($companyDiv.offset().top <= $windowScroll && $articlesDiv.offset().top >= $windowScroll && ($(window).scrollTop() + $(window).height()) < $(document).height()) {
        return $company;
    } else if ($articlesDiv.offset().top <= $windowScroll && ($(window).scrollTop() + $(window).height()) < $(document).height()) {
        return $articles;
    } else if (($(window).scrollTop() + $(window).height()) === $(document).height() && $articlesDiv.visible(true)) {
        return $articles;
    } else if ($contactDiv.visible(true)) {
        return $contact;
    }
}

