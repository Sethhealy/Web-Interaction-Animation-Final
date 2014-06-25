$(document).ready(function() {

    //when the form changes

    $('#mapForm').change(function(){

        // create a variable to hold the selected
        var selectedContinent =$('#mapForm option:selected').val();

        //if statment to test if it is all, then show all dots
        if(selectedContinent=="ALL"){
            $('a.dot').slideDown(1000);
        }else{
            //show only dots selected
            $('a.dot[continent = "'+selectedContinent+'"]').slideDown(1000);
            $('a.dot[continent != "'+selectedContinent+'"]').slideUp(1000);
        }

    });

    //dot code
    // when dot is clicked

    $('a.dot').click(function(){
        //remove selected class from dots
        $('a.dot').removeClass("selected");

        //Add selected class on the clicked anchor

        $(this).addClass('selected');

        //create a variable to hold the path of the matching div
        var country = ".country_detail#"+$(this).attr("country");

            //create to hold html code

        var htmlCode= $(country).html();

        //animate container to fade in and out
        $(".detail_container").fadeOut(500, function(){
            //container is hidden
            //put html in the container and fade it back up
            $(".detail_container .country_detail").html(htmlCode);
            $(".detail_container").fadeIn(500);
        });

    });

});






























