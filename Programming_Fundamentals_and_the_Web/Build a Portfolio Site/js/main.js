/**
 * Created by Oleg Dudkin on 7/13/2017.
 * Used technologies: jQuery, Bootstrap, flip, jQuery-viewport-checker
 */

jQuery(document).ready(function ($) {
    // The function defines effects for the elements
    function effectsSection(classCss, effectDo) {
        $(classCss).addClass('invisible').viewportChecker({
            classToRemove: 'invisible',
            classToAdd: 'visible animated ' + effectDo,
            offset: 100
        });
    }

    // TODO: Following code does visualisation for certificates and my works
    // I made this decision because this part of code will be changed
    $('#certificates-card').html(cardsDesign(certificateCard));
    $('#works-card').html(cardsDesign(worksCard));
    // TODO: The animation cards
    $('.toggle-card').flip({axis: 'y', trigger: 'hover'});

    // TODO: The animation effects
    effectsSection('.skills', 'fadeInRight');
    effectsSection('.experience', 'fadeInLeft');
    effectsSection('.education', 'fadeInRight');
    effectsSection('.certificates', 'fadeInLeft');
    effectsSection('.works', 'fadeInRight');
    effectsSection('.contact-container', 'fadeInLeft');
});