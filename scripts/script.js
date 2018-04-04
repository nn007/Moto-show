$(function() {
var landingSection = $('.landing-page'),
    enterButton = landingSection.find('.enter-button');

    setTimeout(function() {
      landingSection.removeClass('content-hidden');
    }, 500);

    enterButton.on('click', function() {
      landingSection.addClass('content-hidden').fadeOut();
    });

});
