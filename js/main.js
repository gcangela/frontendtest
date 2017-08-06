// Task: Implement isNameInList function

var names = [
  'jax',
  'tryndamere',
  'anivia',
  'ahri'
];

function isNameInList(name) {
  return names.includes(name) ;

}

console.log('Is Pikachu a league of legends champion? ' , isNameInList('pikachu'));


$(document).ready(function() {
    var offset = 220;
    var duration = 500;
    $(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.back-to-top').fadeIn(duration);
        } else {
            jQuery('.back-to-top').fadeOut(duration);
        }
    });

    $('.back-to-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);

    })
});









