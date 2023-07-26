$(document).ready(function() {
    $(".image-container img").click(function() {
        var target = $(this).data("target");
        var $targetElement = jQuery("#" + target);

        if ($targetElement.is(":visible")) {
            $targetElement.fadeOut(1000);
        } else {
            $targetElement.fadeIn(1000);
        }
    });
});

$(document).ready(function() {
    $(".track-item").click(function() {
        var target = $(this).data("target");
        var $targetContent = $("#" + target);

        if ($targetContent.is(":visible"))  {
            $targetContent.hide();
        } else {
            $(".text-content").hide();
            $targetContent.show();
        }
    });
});