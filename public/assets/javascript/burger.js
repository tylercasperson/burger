$(function(){

    $(".eat").on("click", function(event){
        event.preventDefault();
        var id = $(this).data("id");
        console.log($(this).data());

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

    $(".delete").on("click", function(event){
        event.preventDefault();
        var id = $(this).data("id");
        console.log(id);

        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(function(){
            console.log(id);
            location.reload();
        });

    })
});
