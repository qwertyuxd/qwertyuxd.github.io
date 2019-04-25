$(document).ready(function () {

    //    from https://www.w3schools.com/howto/howto_js_scroll_to_top.asp 
    // When the user scrolls down set number of px from the top of the document, show the button
    window.onscroll = function () {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
            document.getElementById("btn-to-top").style.display = "block";
        } else {
            document.getElementById("btn-to-top").style.display = "none";
        }
    }
    
    
    // tooltip from https://www.w3schools.com/bootstrap/bootstrap_tooltip.asp
    $(document).ready(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });


});
