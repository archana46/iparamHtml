$(document).ready( function() {
    app.initialized()
        .then(function(_client) {
          var client = _client;
          client.events.on('app.activated',
            function() {
                client.data.get('ticket')
                    .then(function(ticketdata) {
                        console.log('ticketdata',ticketdata);
                        $("#apptext").text("Ticket status is" +ticketdata.ticket.status);
                    });
                client.data.get('contact')
                    .then(function(contactdata){
                        console.log('contactdata',contactdata);
                        var contactname = contactdata.contact.name;
                        $("#apptext").append(contactname);
                    })
                    .catch(function(f){
                        console.log('Exception -',f);
                    });
                    $("#modal").click(function(){
                        console.log('modal clicked');
                        client.interface.trigger("showModal", {title: "Sample Modal", template: "modal.html"});

                    });
        });
    });
});
