$(function() {
    $(document).on('click', '.product', function() {
        var link = $(this);
        if (link.hasClass('active')) {
            link.removeClass('active');
        } else {
            link.addClass('active');
        }
    });
});
