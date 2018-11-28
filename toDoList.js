$("li").click(function(){
    if($(this).css("color") === "rgba(64, 62, 53, 0.5)"){
        $(this).css({
            "color": "rgb(64, 62, 53)",
            "text-decoration": "none",
            "font-size": "1.5rem"
       });
    }
    else {
        $(this).css({
            "color": "rgba(64, 62, 53, 0.5)",
            "text-decoration": "line-through",
            "font-size": "1rem"
        });
    }
});