$(function(){

    $(".eat").on("click", function(){
    var id = $(this).data("id");
    console.log("tyler");

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: true
        }).then(function(){
            console.log(id);
            location.reload();
        });
    });

    $(".submit").on("click", function(){
        var name = $("#burgerName").text();

        $.ajax("/api/burgers", {
            type: "POST",
            data: addBurger
        }).then(function(){
            location.reload();
        });
    });
});
