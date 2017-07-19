/**
 * Created by Oleg Dudkin on 7/16/2017.
 */

jQuery(document).ready(function ($) {
    $('.card-box').flip({axis: 'y', trigger: 'hover'});

    // Pause the video when the modal is closed
    $(document).on('click', '.hanging-close, .modal-backdrop, .modal', function (event) {
        // Remove the src so the player itself gets removed, as this is the only
        // reliable way to ensure the video stops playing in IE
        $("#trailer-video-container").empty();
    });
    // Start playing the video whenever the trailer modal is opened
    $('.button-view').click(function (event) {
        var trailerYouTubeId = $(this).attr('data-trailer-youtube-id');
        var sourceUrl = 'http://www.youtube.com/embed/' + trailerYouTubeId + '?autoplay=1&html5=1';
        $("#trailer-video-container").empty().append($("<iframe></iframe>", {
            'id': 'trailer-video',
            'type': 'text-html',
            'src': sourceUrl,
            'frameborder': 0
        }));
    });
});
