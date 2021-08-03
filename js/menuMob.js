$(document).ready(function(){
    $(".check").click(function(){
        $(this).toggleClass("active")
        $(".nav-list").toggleClass("active")
    });
});