$(document).ready(function(){

    var source = $("entry-template").html();
    var template = Handlebars.compile(source);

    $('form').on('submit', function(e){
        var $this = $(this);
        e.preventDefault();
        var firstName = $(this).serializeArray()[0];
        var lastName = $(this).serializeArray()[1];
        var data = {
            firstName: firstName.value,
            lastName: lastName.value
        };

        $.ajax({
            url: '/students',
            type: 'POST',
            data: data
        }).done(function(response, textStatus, jqXHR){
            console.log('Success!');

            var html = template({ student; data })
            if($this.siblings().length > 1) {
                $this.siblings().last().after(html);
            } else {
                $this.after(html);
            }
        }).fail(function(jqXHR, textStatus, errorThrown){
            console.log(jqXHR, textStatus, errorThrown);
        }).always(function(){
            console.log('Ajax Complete!');
        });

    })

});