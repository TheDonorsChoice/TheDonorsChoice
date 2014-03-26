define(["handlebars.runtime"],function(e){e=e["default"];var n=e.template,o=e.templates=e.templates||{};return o["aboutus-template"]=n(function(e,n,o,t,a){return this.compilerInfo=[4,">= 1.0.0"],o=this.merge(o,e.helpers),a=a||{},"<h1><center>About Us</center></h1>\n<div>\n<h3>Organization</h3>\n<p>The mission of TheDonorsChoice is to be a conduit for communication between member homeless and hunger non-profit organizations and donors who may have time, expertise, and material help to help meet the basic needs of others. TheDonorsChoice is a non-profit organization that makes no money in its mission to bring donors and organizations together.  </p> <p>It's TheDonorsChoice on how, where and when you donate, let us help you... help us!</p>\n</div>\n\n<div>\n<h3>Resources</h3>\n<p>TheDonorsChoice is simply a website and a team to support it.  TheDonorsChoice does not collect the donations or assist in the distribution of donations; it simply provides an outlet for member organizations to reach donors who may not know who needs what they have.  </p> <p>It's TheDonorsChoice on how, where and when you donate, let us help you... help us!</p>\n</div>\n\n<div>\n<h3>Internships</h3>\n<p>Because TheDonorsChoice does not collect any money from any source, any interns looking to help need to realise that they are donating their time.  That said, we would love to hear from folks who would like to work in Play Framework with Bootstrap environment.  Your donation of expertise is welcome.  Please see the Contact Us page and get in touch!</p> <p>It's TheDonorsChoice on how, where and when you donate, let us help you... help us!</p>\n</div>"}),o["alert-template"]=n(function(e,n,o,t,a){function s(e,n){var t,a;return(a=o.attribute)?t=a.call(e,{hash:{},data:n}):(a=e&&e.attribute,t=typeof a===h?a.call(e,{hash:{},data:n}):a),p(t)}function i(){return"success"}this.compilerInfo=[4,">= 1.0.0"],o=this.merge(o,e.helpers),a=a||{};var r,l,c="",h="function",p=this.escapeExpression,d=this;return c+=' <div class="alert alert-dismissable alert-',r=o["if"].call(n,n&&n.attribute,{hash:{},inverse:d.program(3,i,a),fn:d.program(1,s,a),data:a}),(r||0===r)&&(c+=r),c+='">\n            <button type="button" class="close" data-dismiss="alert">×</button>\n            ',(l=o.message)?r=l.call(n,{hash:{},data:a}):(l=n&&n.message,r=typeof l===h?l.call(n,{hash:{},data:a}):l),c+=p(r)+"\n </div>"}),o["body-comingsoon-template"]=n(function(e,n,o,t,a){this.compilerInfo=[4,">= 1.0.0"],o=this.merge(o,e.helpers),t=this.merge(t,e.partials),a=a||{};var s,i="",r=this;return s=r.invokePartial(t["header-template"],"header-template",n,o,t,a),(s||0===s)&&(i+=s),i+='\n<hr>\n<div class="bs-component">\n    <div class="jumbotron">\n        <h1><img style="padding-right: 5px;" src="/assets/images/clock.png" /> Coming soon</h1>\n        <br />\n        Soon this website will be jam packed full of features becoming your portal for helping those in need.\n        Whether you are looking to donate time, goods, or services to local shelters and other organizations, we will help you connect with local organizations.\n    </div>\n</div>'}),o["body-error-template"]=n(function(e,n,o,t,a){this.compilerInfo=[4,">= 1.0.0"],o=this.merge(o,e.helpers),t=this.merge(t,e.partials),a=a||{};var s,i="",r=this;return s=r.invokePartial(t["header-template"],"header-template",n,o,t,a),(s||0===s)&&(i+=s),i+='\n<hr>\n<div class="bs-component">\n    <div class="alert alert-danger">\n        <strong>We\'re not perfect...</strong>\n        <br /><br />We know you were really looking forward to the page you requested but we had an issue and couldn\'t find it.\n        <br />\n        <br />\n        If you feel that you have reached this message in error, please feel free to <a href="#contact">contact us.</a>\n    </div>\n</div>\n'}),o["faq-template"]=n(function(e,n,o,t,a){return this.compilerInfo=[4,">= 1.0.0"],o=this.merge(o,e.helpers),a=a||{},"<h1><center>Frequently Asked Questions</center></h1>\n<div>\n<h3>How Did This Organization Get Started?</h3>\n<p>TheDonorsChoice started out as a project for the Spring, 2014 Software Engineering class at Boston University.  It is evolving because someone on the team, Lauren, decided to turn a great beginning into a real organization!</p> <p>It's TheDonorsChoice on how, where and when you donate, let us help you... help us!</p>\n</div>\n\n<div>\n<h3>Is this a 501(c)3 charity?</h3>\n<p>No, it isn't.  Basically for one big reason:  we don't collect money on behalf of anyone.  TheDonorsChoice is simply a website and a team to support it.  TheDonorsChoice provides an outlet for member organizations to reach donors who may not know who needs what they have.  </p> <p>It's TheDonorsChoice on how, where and when you donate, let us help you... help us!</p>\n</div>\n\n<div>\n<h3>Does a person need to be a member to donate?</h3>\n<p>Yes, we ask both donors and recipient organizations to set up a user account.  This is to ensure that donors and recipient organizations have a comfort level that the people they're working with are legitimate. </p> <p>It's TheDonorsChoice on how, where and when you donate, let us help you... help us!</p>\n</div>\n\n<div>\n<h3>Is my information private?</h3>\n<p>Yes, we appreciate our donors and recipient organizations way too much to do anything but keep our members' information private.  We will NEVER sell or share our members list with anyone, including the member recipient organizations.  At most, we will send periodic updates on our work to our own member lists and we will always protect the names and email addresses. </p> <p>It's TheDonorsChoice on how, where and when you donate, let us help you... help us!</p>\n</div>\n\n<div>\n<h3>Are you planning on putting a map on the donor site so that we know which organizations are the closest to us geographically?</h3>\n<p>Wow!  We almost feel like you're psychic!  That is in our backlog of excellent things to do next! </p> <p>It's TheDonorsChoice on how, where and when you donate, let us help you... help us!</p>\n</div>\n\n<div>\n<h3>How can I get involved?</h3>\n<p>Well, if you have something to donate, please create a user account and browse the list of items that our recipient organizations need.  If you are a valid, government recognized charity organization that works with homelessness and hunger, please create a user account and let your needs be known.  If you're interested in helping out to keep the website updated, please go to our Contact Us page and shoot us an email - we will always reply to you with great appreciation.</p> <p>It's TheDonorsChoice on how, where and when you donate, let us help you... help us!</p>\n</div>\n"}),o["menu-template"]=n(function(e,n,o,t,a){function s(e,n){var t,a="";return a+="\n",t=o["if"].call(e,(t=e&&e.attributes,null==t||t===!1?t:t.dropdown),{hash:{},inverse:u.program(5,l,n),fn:u.program(2,i,n),data:n}),(t||0===t)&&(a+=t),a+="\n"}function i(e,n){var t,a="";return a+='\n<li class="dropdown">\n    <a class="dropdown-toggle" data-toggle="dropdown" id="'+d((t=e&&e.attributes,t=null==t||t===!1?t:t.id,typeof t===p?t.apply(e):t))+'">'+d((t=e&&e.attributes,t=null==t||t===!1?t:t.title,typeof t===p?t.apply(e):t))+' <span class="caret"></span></a>\n    <ul class="dropdown-menu" aria-labelledby="'+d((t=e&&e.attributes,t=null==t||t===!1?t:t.id,typeof t===p?t.apply(e):t))+'">\n        ',t=o.each.call(e,(t=e&&e.attributes,null==t||t===!1?t:t.dropdown),{hash:{},inverse:u.noop,fn:u.program(3,r,n),data:n}),(t||0===t)&&(a+=t),a+="\n    </ul>\n</li>\n"}function r(e,n){var t,a,s="";return s+='\n        <li><a href="',(a=o.link)?t=a.call(e,{hash:{},data:n}):(a=e&&e.link,t=typeof a===p?a.call(e,{hash:{},data:n}):a),s+=d(t)+'">',(a=o.title)?t=a.call(e,{hash:{},data:n}):(a=e&&e.title,t=typeof a===p?a.call(e,{hash:{},data:n}):a),s+=d(t)+"</a></li>\n        "}function l(e){var n,o="";return o+='\n<li><a href="'+d((n=e&&e.attributes,n=null==n||n===!1?n:n.link,typeof n===p?n.apply(e):n))+'">'+d((n=e&&e.attributes,n=null==n||n===!1?n:n.title,typeof n===p?n.apply(e):n))+"</a></li>\n"}this.compilerInfo=[4,">= 1.0.0"],o=this.merge(o,e.helpers),a=a||{};var c,h="",p="function",d=this.escapeExpression,u=this;return c=o.each.call(n,n&&n.models,{hash:{},inverse:u.noop,fn:u.program(1,s,a),data:a}),(c||0===c)&&(h+=c),h+="\n"}),o["user-account-template"]=n(function(e,n,o,t,a){return this.compilerInfo=[4,">= 1.0.0"],o=this.merge(o,e.helpers),a=a||{},'<hr>\n<div class="well bs-component">\n    <div class="row">\n    <div class="col-lg-6 col-lg-offset-3">\n        <form class="form-horizontal">\n            <fieldset>\n                <legend>New Account</legend>\n                <div class="form-group">\n                    <label for="inputFirstName" class="col-lg-2 control-label">First Name</label>\n                    <div class="col-lg-10">\n                        <input type="text" class="form-control" id="inputFirstName" placeholder="First Name" mouseev="true" autocomplete="off" keyev="true" clickev="true">\n                    </div>\n                </div>\n                <div class="form-group">\n                    <label for="inputLastName" class="col-lg-2 control-label">Last Name</label>\n                    <div class="col-lg-10">\n                        <input type="text" class="form-control" id="inputLastName" placeholder="Last Name" mouseev="true" autocomplete="off" keyev="true" clickev="true">\n                    </div>\n                </div>\n                <div class="form-group">\n                    <label for="inputEmail" class="col-lg-2 control-label">Email</label>\n                    <div class="col-lg-10">\n                        <input type="text" class="form-control" id="inputEmail" placeholder="Email" mouseev="true" autocomplete="off" keyev="true" clickev="true">\n                    </div>\n                </div>\n                <div class="form-group">\n                    <label for="inputPassword" class="col-lg-2 control-label">Password</label>\n                    <div class="col-lg-10">\n                        <input type="password" class="form-control" id="inputPassword" placeholder="Password" mouseev="true" autocomplete="off" keyev="true" clickev="true">\n                    </div>\n                </div>\n                <div class="form-group">\n                    <label for="inputConfirmPassword" class="col-lg-2 control-label">Confirm Password</label>\n                    <div class="col-lg-10">\n                        <input type="password" class="form-control" id="inputConfirmPassword" placeholder="Confirm Password" mouseev="true" autocomplete="off" keyev="true" clickev="true">\n                    </div>\n                </div>\n                <div class="form-group">\n                    <label for="select" class="col-lg-2 control-label">Account Type</label>\n                    <div class="col-lg-10">\n                        <select class="form-control" id="select">\n                            <option>Donor</option>\n                            <option>Recipient</option>\n                        </select>\n                    </div>\n                </div>\n                <div class="form-group">\n                    <div class="col-lg-10 col-lg-offset-2">\n                        <button type="submit" class="btn btn-primary" id="createAccount">Create Account</button>\n                    </div>\n                </div>\n            </fieldset>\n        </form>\n    </div>\n</div>\n</div>'}),o["user-dropdown-template"]=n(function(e,n,o,t,a){return this.compilerInfo=[4,">= 1.0.0"],o=this.merge(o,e.helpers),a=a||{},"\n"}),o["user-login-template"]=n(function(e,n,o,t,a){function s(e){var n,o="";return o+="\n    <div>\n        <h2>"+h((n=e&&e.attributes,n=null==n||n===!1?n:n.name,typeof n===c?n.apply(e):n))+'</h2>\n    </div>\n    <div class="col-md-12">\n        <a href="#">Account Settings</a>\n    </div>\n    <div class="col-md-12" style="margin-bottom: 25px">\n        <a id="btn-logout">Logout</a>\n    </div>\n'}function i(){return'\n    <div>\n        <h2>Login</h2>\n    </div>\n    <form id="loginform" class="form-horizontal" role="form">\n\n        <div style="margin-bottom: 25px" class="input-group">\n                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i>\n                </span>\n            <input id="login-username" type="text" class="form-control" name="username" value="" placeholder="Email">\n        </div>\n\n        <div style="margin-bottom: 25px" class="input-group">\n                <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i>\n                </span>\n            <input id="login-password" type="password" class="form-control" name="password" placeholder="Password">\n        </div>\n\n        <div style="margin-top:10px" class="form-group">\n            <div class="col-sm-12 controls">\n                <button id="btn-login" class="btn btn-success">Login</button>\n            </div>\n        </div>\n\n\n        <div class="form-group">\n            <div class="col-md-12 control">\n                <div style="border-top: 1px solid#888; padding-top:15px; font-size:85%">\n                    Need an account? <a href="#register">Sign Up Here</a>\n                </div>\n            </div>\n        </div>\n    </form>\n'}this.compilerInfo=[4,">= 1.0.0"],o=this.merge(o,e.helpers),a=a||{};var r,l="",c="function",h=this.escapeExpression,p=this;return r=o["if"].call(n,(r=n&&n.attributes,null==r||r===!1?r:r.loggedIn),{hash:{},inverse:p.program(3,i,a),fn:p.program(1,s,a),data:a}),(r||0===r)&&(l+=r),l+="\n\n"}),o});