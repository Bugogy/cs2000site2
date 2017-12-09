$(document).ready(function(e) {  

    $(".expander").click(function () {

        $expander = $(this);
        //getting the next element
        $content = $expander.next();
        //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
        $content.slideToggle(300, function () {
            //execute this after slideToggle is done
        });

    });

});