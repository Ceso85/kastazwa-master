$(document).ready(function() {
    $(".image-container img").click(function() {
        var target = $(this).data("target");
        var $targetElement = jQuery("#" + target);

        $targetElement.fadeToggle(1000);
    });

    $(".track-item").click(function() {
        var target = $(this).data("target");
        var $targetContent = $("#" + target);

        $(".text-content").not($targetContent).hide();
        $targetContent.toggle();

    });
});