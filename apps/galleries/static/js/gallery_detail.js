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

    // Selecting images
    $('.gallery_image_item').click(function() {
        var ele = $(this);
        var image_pk = ele.data('pk');
        var thumb_overlay = ele.find('.gallery_thumbnail_overlay')

        thumb_overlay.show();
        thumb_overlay.fadeOut(400);

        var jqxhr = $.post('/toggle-select-gallery-image/', {'image_pk': image_pk}, function() {
            if (jqxhr.responseText == "True") {
                ele.addClass('selected');
            } else {
                ele.removeClass('selected');
            }

            update_selected_images();
        })
            .fail(function() {
                alert(
                "Oops, couldn't change that image.  If this keeps happening, please contact SparrowBleu"
                );
            });

    });

    // Selected images widget
    function update_selected_images() {
        var widget_included = $('#selected_images .included');
        var widget_extra = $('#selected_images .extra');
        var max = widget_included.data('max');
        var current = $('.gallery_image_item.selected').length;
        var cost_per_extra_image = $('#cost_per_extra_image').data('cost');

        var remaining;
        var extra;
        var extra_text;

        // update remaining images, min of 0
        if (current <= max) {
            remaining = max - current;
        } else {
            remaining = 0;
        }

        // update images extra
        if (current > max) {
            extra = Math.abs(max - current);
        } else {
            extra = 0;
        }

        // update the widget readout
        if (extra > 0) {
            extra_text = extra + " extra = $" + extra * cost_per_extra_image;

            widget_included.removeClass('primary');

            if (!widget_extra.hasClass('primary')) {
                widget_extra.addClass('primary');
            }

        } else {
            extra_text = extra + " extra";

            widget_extra.removeClass('primary');

            if (!widget_included.hasClass('primary')) {
                widget_included.addClass('primary');
            }
        }

        widget_included.text( remaining + " remaining");
        widget_extra.text(extra_text);

    }
    update_selected_images();
});

/**
 * Amazon S3 uploads
 */
function s3_upload() {
    var s3upload = new S3Upload({
        file_dom_selector: 'image',
        s3_sign_put_url: '/s3-sign-upload/',

        onProgress: function(percent, message) {
            $('#status').html('Upload progress: ' + percent + '%' + message);
        },
        onFinishS3Put: function(url) {
            $('#status').html('Upload completed.');
            $("#image_url").href(url);
            $("#preview").html('<img src="' + url + '" />');
        },
        onError: function(status) {
            $('#status').html('Upload error: ' + status);
        }
    });
}