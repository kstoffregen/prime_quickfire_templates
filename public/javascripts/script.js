$(document).ready(function(){


    $('form').on('submit', function(e){
        var $this = $(this);
        e.preventDefault();
        var firstName = $(this).serializeArray()[0];
        var lastName = $(this).serializeArray()[1];
        var data = {
            firstName: firstName.value,
            lastName: lastName.value
        };
        console.log(data);
        $.ajax({
            url: '/students',
            type: 'POST',
            data: data
        }).done(function(response, textStatus, jqXHR){
            console.log('Success!');

            ({ student: data })
            //if($this.siblings().length > 1) {
            //    $this.siblings().last().after(html);
            //} else {
            //    $this.after(html);
            //}
        }).fail(function(jqXHR, textStatus, errorThrown){
            console.log(jqXHR, textStatus, errorThrown);
        }).always(function(){
            console.log('Ajax Complete!');
        });

    })

});