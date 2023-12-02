$(document).ready(function() {
    // go up button
    $.goup({
        trigger: 500,
        bottomOffset: 10,
        locationOffset: 20,
        containerRadius: 0,
        containerColor: '#fff',
        arrowColor: '#000',
        goupSpeed: 'normal'
    });
});

function goBottom() {
    console.log("goBottom clicked")
    console.log($(document).height())
    $('html, body, .slider').animate({scrollTop: 9999 }, 750);
}
