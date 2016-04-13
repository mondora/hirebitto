(function($) {
    // Form
    var container = $('#containerErrorForm');

    $("#contact-form").validator().on('submit', function (e) {
        if (e.isDefaultPrevented()) {
            $('#containerErrorForm').show();
        }
    })

})(jQuery); // End of use strict
