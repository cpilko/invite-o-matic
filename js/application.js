window.IoM = Ember.Application.create();

IoM.Router.map(function() {
	this.resource('iom', { path: '/' });
});

IoM.iomRoute = Ember.Route.extend({
    model: function() {
        return emails;
    }
});

IoM.IomController = Ember.Controller.extend({
  name: "Chris",
  
  actions: {
      sendToEmail: function(){
	    var email_su = this.email1.subject;
            var email_body = $("#email-preview").text();
            var email_link = "mailto:?subject=" + encodeURIComponent( $.trim(email_su) ) + "&body=" + encodeURIComponent( $.trim(email_body));
            console.log(email_su);
            //window.open (email_link, "_blank");
      }
  }
});

var emails = [{
        subject: "Cub Scout Family Fun Day, Sunday 9/21 from 1-4pm @ Veteran’s Park Broomall"
}];