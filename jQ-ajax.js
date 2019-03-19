$(document).ready(function () {

    $('#EpicButton').click(function () {

        $("#AJAXDiv").load("textfile.txt");

    });

    $('#EpicButton1').click(function () {

        $.getJSON("favourites.json", function (result) {
            console.log(result);

            $.each(result, function (index, value) {
                console.log(index + "-" + value);
            });
        });

    });

    $('#EpicButton2').click(function () {

        $.get("favourites.php",function(data, status){
            console.log(data);
            console.log(status);

            $("div").html(data);
        });

    });

    $('#EpicButton3').click(function(){
        $.post("favourites.php",
        {
            "food":"Pizza",
            "game":"Call of duty III"
        }, function(datas, statues){
            console.log(data);
        });
    });
    
});
