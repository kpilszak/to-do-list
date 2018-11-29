$("ul").on("click", "li", function(){
    $(this).toggleClass("doneTask");
});

$("ul").on("click", "span", function(e){
    $(this).parent().fadeOut(200, function(){
        $(this).remove();
    });
    e.stopPropagation();
});

$("input[type='text']").keypress(function(e){
    if(e.which === 13){
        var taskToDo = $(this).val();
        $(this).val("");
        $("ul").append("<li><span>X</span>" + taskToDo + "</li>");
    }
});