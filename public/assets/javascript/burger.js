$(function(){

    $(".eat").on("click", function(event){
        event.preventDefault();
    var id = $(this).data("id");
    console.log("tyler");

        $.ajax("/burgers/" + id, {
            type: "PUT",
            data: true
        }).then(function(){
            console.log(id);
            location.reload();
        });
    });

    $(".submit").on("click", function(event){
        event.preventDefault();
        var name = $("#burgerName").text();
        $.ajax("/api/burgers", {
            type: "POST",
            data: addBurger
        }).then(function(){
            location.reload();
        });
    });
});
