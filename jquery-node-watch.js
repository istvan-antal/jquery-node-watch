(function (window, document, $, unedefined) {
    function registerJQPlugin() {
        $.each( arguments, function(i, n) {
            // Short-circuit if the method doesn't exist
            if (!$.fn[n]) return;

            // Save a reference to the original method
            var old = $.fn[n];

            // Create a new method
            $.fn[n] = function() {
                // Call the original method
                var r = old.apply(this, arguments);

                this.trigger('nodeChange');

                // Return the original methods result
                return r;
            }
        });
    };
    
    registerJQPlugin('append', 'prepend', 'after', 'before', 'wrap', 'html', 'attr', 'removeAttr', 'addClass', 'removeClass', 'toggleClass', 'empty', 'remove', 'css');
}(window, document, jQuery));