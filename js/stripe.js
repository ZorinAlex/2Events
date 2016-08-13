$( document ).ready(function() {
    var stripe = $('.hor-line');
    var event_btn = $('#event .btn');
    var top_btn = event_btn.position().top + event_btn.outerHeight()+10;
    var bottom_btn = $('#next').position().top - event_btn.outerHeight()+10;
    stripe.css('top',top_btn+'px');
    stripe.css('height',bottom_btn+'px');


});