/*
 * Isotope
 */
 $(window).load(function(){

    $(function(){
        var $container = $('.gallery_image_container');

        $container.isotope({
            itemSelector: '.gallery_image_item',
            layoutMode: 'cellsByRow',
            cellsByRow: {
                columnWidth: 360,
                rowHeight: 360
            }
        });
    });

});

/*
 * Selecting images
 */
$(document).ready(function() {


    // selecting an image
    $('.gallery_image_item').click(function() {

        // TODO: This needs to use the csrf token https://docs.djangoproject.com/en/dev/ref/contrib/csrf/
        // Assign handlers immediately after making the request, and remember the jqxhr object for this request
        var image_pk = $(this).data('pk');

        var jqxhr = $.post( document.URL + "/select_image/" + image_pk, function() {
            console.log( "first success" );
            $(this).toggleClass('selected');

            // flash the thumb if selected
            if ($(this).hasClass('selected')) {
                var thumb = $(this).find('.gallery_thumbnail')
                thumb.hide();
                thumb.fadeIn(800);
            }
        })
            .done(function() {
                console.log( "second success" );
            })
            .fail(function() {
                console.log( "error" );
            })
            .always(function() {
                console.log( "finished" );
        });

        // Perform other work here ...

        // Set another completion function for the request above
        jqxhr.always(function() {
            console.log( "second finished" );
        });
    });



});

