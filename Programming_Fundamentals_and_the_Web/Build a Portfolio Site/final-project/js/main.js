/**
 * Created by Oleg Dudkin on 7/13/2017.
 * Used technologies: jQuery, Bootstrap, flip
 */

jQuery(document).ready(function ($) {
    // TODO: The animation cards
    $('#design').flip({axis: 'y', trigger: 'hover'});
    $('#coding').flip({axis: 'y', trigger: 'hover'});
    $('#linux').flip({axis: 'y', trigger: 'hover'});
    // TODO: This part controls the menu button
    $('.nav-menu-button').click(function () {
        $('.nav').toggle()
    });
});