$(document).ready(function(){

    //for progressBar(index page)

    $(".progress .progress-bar").each(function(){

        if ($(this).attr("aria-valuenow") == 0)
        {
            $(this).css("color", "red");
        }

        else if ($(this).attr("aria-valuenow") <= 25)
        {
            $(this).addClass("progress-bar-danger");
        }

        else if($(this).attr("aria-valuenow") > 25 && $(this).attr("aria-valuenow") <= 50 )
        {
            $(this).addClass("progress-bar-warning");
        }

        else if($(this).attr("aria-valuenow") > 50 && $(this).attr("aria-valuenow") <= 75 )
        {
            $(this).addClass("progress-bar-info");
        }

        else
        {
            $(this).addClass("progress-bar-success");
        }
    });

    $(".brain-result").each(function() {
        var takeNumber = $(this).attr("title");
        if ( takeNumber == '1'){

            $(this).addClass('glyphicon-thumbs-down').css("color", "red");
        }
        else {
            $(this).addClass('glyphicon-thumbs-up').css("color", "green");;
        }
    });
});
