define(["handlebars.runtime"],function(e){e=e["default"];var n=e.template,t=e.templates=e.templates||{};return t["aboutus-template"]=n(function(e,n,t,o,a){return this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,e.helpers),a=a||{},"<h1 style=\"text-align: center;\">About Us</h1>\n<div>\n<h3>Organization</h3>\n<p>The mission of TheDonorsChoice is to be a conduit for communication between member homeless and hunger non-profit organizations and donors who may have time, expertise, and material help to help meet the basic needs of others. TheDonorsChoice is a non-profit organization that makes no money in its mission to bring donors and organizations together.  </p> <p>It's TheDonorsChoice on how, where and when you donate, let us help you... help us!</p>\n</div>\n\n<div>\n<h3>Resources</h3>\n<p>TheDonorsChoice is simply a website and a team to support it.  TheDonorsChoice does not collect the donations or assist in the distribution of donations; it simply provides an outlet for member organizations to reach donors who may not know who needs what they have.  </p> <p>It's TheDonorsChoice on how, where and when you donate, let us help you... help us!</p>\n</div>\n\n<div>\n<h3>Internships</h3>\n<p>Because TheDonorsChoice does not collect any money from any source, any interns looking to help need to realise that they are donating their time.  That said, we would love to hear from folks who would like to work in Play Framework with Bootstrap environment.  Your donation of expertise is welcome.  Please see the Contact Us page and get in touch!</p> <p>It's TheDonorsChoice on how, where and when you donate, let us help you... help us!</p>\n</div>"}),t["alert-template"]=n(function(e,n,t,o,a){function i(e,n){var o,a;return(a=t.attribute)?o=a.call(e,{hash:{},data:n}):(a=e&&e.attribute,o=typeof a===h?a.call(e,{hash:{},data:n}):a),d(o)}function s(){return"success"}this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,e.helpers),a=a||{};var r,l,p="",h="function",d=this.escapeExpression,c=this;return p+=' <div class="alert alert-dismissable alert-',r=t["if"].call(n,n&&n.attribute,{hash:{},inverse:c.program(3,s,a),fn:c.program(1,i,a),data:a}),(r||0===r)&&(p+=r),p+='">\n            <button type="button" class="close" data-dismiss="alert">×</button>\n            ',(l=t.message)?r=l.call(n,{hash:{},data:a}):(l=n&&n.message,r=typeof l===h?l.call(n,{hash:{},data:a}):l),p+=d(r)+"\n </div>"}),t["body-comingsoon-template"]=n(function(e,n,t,o,a){this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,e.helpers),o=this.merge(o,e.partials),a=a||{};var i,s="",r=this;return i=r.invokePartial(o["header-template"],"header-template",n,t,o,a),(i||0===i)&&(s+=i),s+='\n<hr>\n<div class="bs-component">\n    <div class="jumbotron">\n        <h1><img style="padding-right: 5px;" src="/assets/images/clock.png" /> Coming soon</h1>\n        <br />\n        Soon this website will be jam packed full of features becoming your portal for helping those in need.\n        Whether you are looking to donate time, goods, or services to local shelters and other organizations, we will help you connect with local organizations.\n    </div>\n</div>'}),t["body-error-template"]=n(function(e,n,t,o,a){this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,e.helpers),o=this.merge(o,e.partials),a=a||{};var i,s="",r=this;return i=r.invokePartial(o["header-template"],"header-template",n,t,o,a),(i||0===i)&&(s+=i),s+='\n<hr>\n<div class="bs-component">\n    <div class="alert alert-danger">\n        <strong>We\'re not perfect...</strong>\n        <br /><br />We know you were really looking forward to the page you requested but we had an issue and couldn\'t find it.\n        <br />\n        <br />\n        If you feel that you have reached this message in error, please feel free to <a href="#contact">contact us.</a>\n    </div>\n</div>\n'}),t["contact-template"]=n(function(e,n,t,o,a){return this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,e.helpers),a=a||{},'<h3 style="text-align: center;">Contact TheDonorsChoice!</h3>\n<form action="" method="post" enctype="text/plain">\n    Name:<br>\n    <input id="contact-name" type="text" name="name" value=""><br>\n    E-mail:<br>\n    <input id="contact-email" type="text" name="mail" value=""><br>\n    Comment:<br>\n    <input id="contact-comment" type="text" name="comment" value="" size="50"><br><br>\n\n    <input id="contact-submit" type="submit" value="Send">\n    <input id="contact-reset" type="reset" value="Reset">\n</form>\n'}),t["faq-template"]=n(function(e,n,t,o,a){return this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,e.helpers),a=a||{},"<h1 style=\"text-align: center;\">Frequently Asked Questions</h1>\n<div>\n<h3>How Did This Organization Get Started?</h3>\n<p>TheDonorsChoice started out as a project for the Spring, 2014 Software Engineering class at Boston University.  It is evolving because someone on the team, Lauren, decided to turn a great beginning into a real organization!</p> <p>It's TheDonorsChoice on how, where and when you donate, let us help you... help us!</p>\n</div>\n\n<div>\n<h3>Is this a 501(c)(3) charity?</h3>\n<p>No, it isn't.  Basically for one big reason:  we don't collect money on behalf of anyone.  TheDonorsChoice is simply a website and a team to support it.  TheDonorsChoice provides an outlet for member organizations to reach donors who may not know who needs what they have.  </p> <p>It's TheDonorsChoice on how, where and when you donate, let us help you... help us!</p>\n</div>\n\n<div>\n<h3>Does a person need to be a member to donate?</h3>\n<p>Yes, we ask both donors and recipient organizations to set up a user account.  This is to ensure that donors and recipient organizations have a comfort level that the people they're working with are legitimate. </p> <p>It's TheDonorsChoice on how, where and when you donate, let us help you... help us!</p>\n</div>\n\n<div>\n<h3>Is my information private?</h3>\n<p>Yes, we appreciate our donors and recipient organizations way too much to do anything but keep our members' information private.  We will NEVER sell or share our members list with anyone, including the member recipient organizations.  At most, we will send periodic updates on our work to our own member lists and we will always protect the names and email addresses. </p> <p>It's TheDonorsChoice on how, where and when you donate, let us help you... help us!</p>\n</div>\n\n<div>\n<h3>Are you planning on putting a map on the donor site so that we know which organizations are the closest to us geographically?</h3>\n<p>Wow!  We almost feel like you're psychic!  That is in our backlog of excellent things to do next! </p> <p>It's TheDonorsChoice on how, where and when you donate, let us help you... help us!</p>\n</div>\n\n<div>\n<h3>How can I get involved?</h3>\n<p>Well, if you have something to donate, please create a user account and browse the list of items that our recipient organizations need.  If you are a valid, government recognized charity organization that works with homelessness and hunger, please create a user account and let your needs be known.  If you're interested in helping out to keep the website updated, please go to our Contact Us page and shoot us an email - we will always reply to you with great appreciation.</p> <p>It's TheDonorsChoice on how, where and when you donate, let us help you... help us!</p>\n</div>\n"}),t["menu-template"]=n(function(e,n,t,o,a){function i(e,n){var o,a="";return a+="\n",o=t["if"].call(e,(o=e&&e.attributes,null==o||o===!1?o:o.dropdown),{hash:{},inverse:u.program(5,l,n),fn:u.program(2,s,n),data:n}),(o||0===o)&&(a+=o),a+="\n"}function s(e,n){var o,a="";return a+='\n<li class="dropdown">\n    <a class="dropdown-toggle" data-toggle="dropdown" id="'+c((o=e&&e.attributes,o=null==o||o===!1?o:o.id,typeof o===d?o.apply(e):o))+'">'+c((o=e&&e.attributes,o=null==o||o===!1?o:o.title,typeof o===d?o.apply(e):o))+' <span class="caret"></span></a>\n    <ul class="dropdown-menu" aria-labelledby="'+c((o=e&&e.attributes,o=null==o||o===!1?o:o.id,typeof o===d?o.apply(e):o))+'">\n        ',o=t.each.call(e,(o=e&&e.attributes,null==o||o===!1?o:o.dropdown),{hash:{},inverse:u.noop,fn:u.program(3,r,n),data:n}),(o||0===o)&&(a+=o),a+="\n    </ul>\n</li>\n"}function r(e,n){var o,a,i="";return i+='\n        <li><a href="',(a=t.link)?o=a.call(e,{hash:{},data:n}):(a=e&&e.link,o=typeof a===d?a.call(e,{hash:{},data:n}):a),i+=c(o)+'">',(a=t.title)?o=a.call(e,{hash:{},data:n}):(a=e&&e.title,o=typeof a===d?a.call(e,{hash:{},data:n}):a),i+=c(o)+"</a></li>\n        "}function l(e){var n,t="";return t+='\n<li><a href="'+c((n=e&&e.attributes,n=null==n||n===!1?n:n.link,typeof n===d?n.apply(e):n))+'">'+c((n=e&&e.attributes,n=null==n||n===!1?n:n.title,typeof n===d?n.apply(e):n))+"</a></li>\n"}this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,e.helpers),a=a||{};var p,h="",d="function",c=this.escapeExpression,u=this;return p=t.each.call(n,n&&n.models,{hash:{},inverse:u.noop,fn:u.program(1,i,a),data:a}),(p||0===p)&&(h+=p),h+="\n"}),t["resetpassword1-template"]=n(function(e,n,t,o,a){return this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,e.helpers),a=a||{},'<h3 style="text-align: center;">Reset Your Password </h3>\n\n<div class="container">\n    <div class="row">\n        \n        <div class="col-md-10"><h1>TheDonorsChoice</h1>\n            <p>To reset your password, please enter your registered email address below...</p>\n       \n    </div>\n</div>\n\n<form action="" method="post" enctype="text/plain">\n    E-mail:<br>\n    <input id="contact-email" type="text" name="mail" value=""><br>\n\n    <input id="contact-submit" type="submit" value="Send">\n</form>\n'}),t["resource-template"]=n(function(e,n,t,o,a){function i(e){var n,t="";return t+="\n    <tr>\n        <td>"+p((n=e&&e.attributes,n=null==n||n===!1?n:n.orgName,typeof n===l?n.apply(e):n))+"</td>\n        <td>"+p((n=e&&e.attributes,n=null==n||n===!1?n:n.address,typeof n===l?n.apply(e):n))+"</td>\n        <td>"+p((n=e&&e.attributes,n=null==n||n===!1?n:n.phoneNumber,typeof n===l?n.apply(e):n))+"</td>\n        <td>"+p((n=e&&e.attributes,n=null==n||n===!1?n:n.email,typeof n===l?n.apply(e):n))+"</td>\n        <td>"+p((n=e&&e.attributes,n=null==n||n===!1?n:n.Type,typeof n===l?n.apply(e):n))+"</td>\n        <td>"+p((n=e&&e.attributes,n=null==n||n===!1?n:n.itemsNeeded,typeof n===l?n.apply(e):n))+"</td>\n    </tr>\n    "}this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,e.helpers),a=a||{};var s,r="",l="function",p=this.escapeExpression,h=this;return r+='<h1 style="text-align: center;">Welcome to the Donor\'s Page</h1>\n<div id="map-canvas" style="width:100%;height:400px"></div>\n<table class="table table-striped table-hover ">\n    <thead>\n    <tr>\n        <th>Organization</th>\n        <th>Address</th>\n        <th>Phone Number</th>\n        <th>EMail</th>\n        <th>User Type</th>\n        <th>Items Needed</th>\n    </tr>\n    </thead>\n    <tbody>\n    ',s=t.each.call(n,n&&n.models,{hash:{},inverse:h.noop,fn:h.program(1,i,a),data:a}),(s||0===s)&&(r+=s),r+="\n    </tbody>\n</table>\n</div>"}),t["user-account-template"]=n(function(e,n,t,o,a){return this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,e.helpers),a=a||{},'<div class="well bs-component">\n    <div class="row">\n    <div class="col-lg-6 col-lg-offset-3">\n        <form class="form-horizontal">\n            <fieldset>\n                <legend>New Account</legend>\n                <div class="form-group">\n                    <label for="inputName" class="col-lg-4 control-label">Full Name</label>\n                    <div class="col-lg-8">\n                        <input type="text" class="form-control" id="registration-name" placeholder="Full Name" mouseev="true" autocomplete="off" keyev="true" clickev="true">\n                    </div>\n                </div>\n                <div class="form-group">\n                    <label for="inputEmail" class="col-lg-4 control-label">Email</label>\n                    <div class="col-lg-8">\n                        <input type="text" class="form-control" id="registration-email" placeholder="Email" mouseev="true" autocomplete="off" keyev="true" clickev="true">\n                    </div>\n                </div>\n                <div class="form-group">\n                    <label for="inputPassword" class="col-lg-4 control-label">Password</label>\n                    <div class="col-lg-8">\n                        <input type="password" class="form-control" id="registration-password" placeholder="Password" mouseev="true" autocomplete="off" keyev="true" clickev="true">\n                    </div>\n                </div>\n                <div class="form-group">\n                    <label for="inputConfirmPassword" class="col-lg-4 control-label">Confirm Password</label>\n                    <div class="col-lg-8">\n                        <input type="password" class="form-control" id="registration-password-confirm" placeholder="Confirm Password" mouseev="true" autocomplete="off" keyev="true" clickev="true">\n                    </div>\n                </div>\n                <div class="form-group">\n                    <label for="select" class="col-lg-4 control-label">Account Type</label>\n                    <div class="col-lg-8">\n                        <select class="form-control" id="registration-account-type">\n                            <option value="INDIVIDUAL">Donor (Individual)</option>\n                            <option value="COMMERCIAL">Donor (Commercial)</option>\n                            <option value="PANTRY">Recipient (Pantry)</option>\n                            <option value="SHELTER">Recipient (Shelter)</option>\n                        </select>\n                    </div>\n                </div>\n                <div class="form-group">\n                    <div class="col-lg-8 col-lg-offset-4">\n                        <button type="submit" class="btn btn-primary" id="registration-submit">Create Account</button>\n                    </div>\n                </div>\n            </fieldset>\n        </form>\n    </div>\n</div>\n</div>'}),t["user-dropdown-template"]=n(function(e,n,t,o,a){return this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,e.helpers),a=a||{},"\n"}),t["user-login-template"]=n(function(e,n,t,o,a){function i(e){var n,t="";return t+="\n    <div>\n        <h2>"+h((n=e&&e.attributes,n=null==n||n===!1?n:n.name,typeof n===p?n.apply(e):n))+'</h2>\n    </div>\n    <div class="col-md-12">\n        <a href="#">Account Settings</a>\n    </div>\n    <div class="col-md-12" style="margin-bottom: 25px">\n        <a id="btn-logout">Logout</a>\n    </div>\n'}function s(){return'\n    <div>\n        <h2>Login</h2>\n    </div>\n    <form id="loginform" class="form-horizontal" role="form">\n\n        <div style="margin-bottom: 25px" class="input-group">\n                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i>\n                </span>\n            <input id="login-username" type="text" class="form-control" name="username" value="" placeholder="Email">\n        </div>\n\n        <div style="margin-bottom: 25px" class="input-group">\n                <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i>\n                </span>\n            <input id="login-password" type="password" class="form-control" name="password" placeholder="Password">\n        </div>\n\n        <div style="margin-top:10px" class="form-group">\n            <div class="col-sm-12 controls">\n                <button id="btn-login" class="btn btn-success">Login</button>\n            </div>\n        </div>\n\n\n        <div class="form-group">\n            <div class="col-md-12 control">\n                <div style="border-top: 1px solid#888; padding-top:15px; font-size:85%">\n                    Need an account? <a id="register" href="#register">Sign Up Here</a>\n                </div>\n            </div>\n        </div>\n    </form>\n'}this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,e.helpers),a=a||{};var r,l="",p="function",h=this.escapeExpression,d=this;return r=t["if"].call(n,(r=n&&n.attributes,null==r||r===!1?r:r.loggedIn),{hash:{},inverse:d.program(3,s,a),fn:d.program(1,i,a),data:a}),(r||0===r)&&(l+=r),l+="\n\n"}),t});