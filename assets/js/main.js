$("#time li a").click(function() {
    $("#time .active").removeClass('active');
    $(this).parent().addClass('active'); 
    e.preventDefault();
});