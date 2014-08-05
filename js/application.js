window.IoM = Ember.Application.create();

IoM.Router.map(function() {
	this.resource('iom', { path: '/' });
});

IoM.IomController = Ember.Controller.extend({
  name: "Chris",
  
  actions: {
      sendToEmail: function(){
	    var email_su = $("#subject-preview").text();
            var email_body = $("#email-preview").text();
            var email_link = "mailto:?subject=" + encodeURIComponent( $.trim(email_su) ) + "&body=" + encodeURIComponent( $.trim(email_body));
            window.open (email_link, "_blank");
      }
  }
});