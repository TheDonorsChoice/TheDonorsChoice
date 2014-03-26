define(["handlebars.runtime"],function(e){e=e["default"];var o=e.template,n=e.templates=e.templates||{};return n["aboutus-template"]=o(function(e,o,n,t,a){return this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),a=a||{},"<h1><center>About Us</center></h1>\n<div>\n<h3>Organization</h3>\n<p>The mission of TheDonorsChoice is to be a conduit for communication between member homeless and hunger non-profit organizations and donors who may have time, expertise, and material help to help meet the basic needs of others. TheDonorsChoice is a non-profit organization that makes no money in its mission to bring donors and organizations together.  </p> <p>It's TheDonorsChoice on how, where and when you donate, let us help you... help us!</p>\n</div>\n\n<div>\n<h3>Resources</h3>\n<p>TheDonorsChoice is simply a website and a team to support it.  TheDonorsChoice does not collect the donations or assist in the distribution of donations; it simply provides an outlet for member organizations to reach donors who may not know who needs what they have.  </p> <p>It's TheDonorsChoice on how, where and when you donate, let us help you... help us!</p>\n</div>\n\n<div>\n<h3>Internships</h3>\n<p>Because TheDonorsChoice does not collect any money from any source, any interns looking to help need to realise that they are donating their time.  That said, we would love to hear from folks who would like to work in Play Framework with Bootstrap environment.  Your donation of expertise is welcome.  Please see the Contact Us page and get in touch!</p> <p>It's TheDonorsChoice on how, where and when you donate, let us help you... help us!</p>\n</div>"}),n["alert-template"]=o(function(e,o,n,t,a){function s(e,o){var t,a;return(a=n.attribute)?t=a.call(e,{hash:{},data:o}):(a=e&&e.attribute,t=typeof a===p?a.call(e,{hash:{},data:o}):a),h(t)}function i(){return"success"}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),a=a||{};var r,l,c="",p="function",h=this.escapeExpression,d=this;return c+=' <div class="alert alert-dismissable alert-',r=n["if"].call(o,o&&o.attribute,{hash:{},inverse:d.program(3,i,a),fn:d.program(1,s,a),data:a}),(r||0===r)&&(c+=r),c+='">\n            <button type="button" class="close" data-dismiss="alert">×</button>\n            ',(l=n.message)?r=l.call(o,{hash:{},data:a}):(l=o&&o.message,r=typeof l===p?l.call(o,{hash:{},data:a}):l),c+=h(r)+"\n </div>"}),n["body-comingsoon-template"]=o(function(e,o,n,t,a){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),t=this.merge(t,e.partials),a=a||{};var s,i="",r=this;return s=r.invokePartial(t["header-template"],"header-template",o,n,t,a),(s||0===s)&&(i+=s),i+='\n<hr>\n<div class="bs-component">\n    <div class="jumbotron">\n        <h1><img style="padding-right: 5px;" src="/assets/images/clock.png" /> Coming soon</h1>\n        <br />\n        Soon this website will be jam packed full of features becoming your portal for helping those in need.\n        Whether you are looking to donate time, goods, or services to local shelters and other organizations, we will help you connect with local organizations.\n    </div>\n</div>'}),n["faq-template"]=o(function(e,o,n,t,a){return this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),a=a||{},"<h1><center>Frequently Asked Questions</center></h1>\n<div>\n<h3>How Did This Organization Get Started?</h3>\n<p>TheDonorsChoice started out as a project for the Spring, 2014 Software Engineering class at Boston University.  It is evolving because someone on the team, Lauren, decided to turn a great beginning into a real organization!</p> <p>It's TheDonorsChoice on how, where and when you donate, let us help you... help us!</p>\n</div>\n\n<div>\n<h3>Is this a 501(c)3 charity?</h3>\n<p>No, it isn't.  Basically for one big reason:  we don't collect money on behalf of anyone.  TheDonorsChoice is simply a website and a team to support it.  TheDonorsChoice provides an outlet for member organizations to reach donors who may not know who needs what they have.  </p> <p>It's TheDonorsChoice on how, where and when you donate, let us help you... help us!</p>\n</div>\n\n<div>\n<h3>Does a person need to be a member to donate?</h3>\n<p>Yes, we ask both donors and recipient organizations to set up a user account.  This is to ensure that donors and recipient organizations have a comfort level that the people they're working with are legitimate. </p> <p>It's TheDonorsChoice on how, where and when you donate, let us help you... help us!</p>\n</div>\n\n<div>\n<h3>Is my information private?</h3>\n<p>Yes, we appreciate our donors and recipient organizations way too much to do anything but keep our members' information private.  We will NEVER sell or share our members list with anyone, including the member recipient organizations.  At most, we will send periodic updates on our work to our own member lists and we will always protect the names and email addresses. </p> <p>It's TheDonorsChoice on how, where and when you donate, let us help you... help us!</p>\n</div>\n\n<div>\n<h3>Are you planning on putting a map on the donor site so that we know which organizations are the closest to us geographically?</h3>\n<p>Wow!  We almost feel like you're psychic!  That is in our backlog of excellent things to do next! </p> <p>It's TheDonorsChoice on how, where and when you donate, let us help you... help us!</p>\n</div>\n\n<div>\n<h3>How can I get involved?</h3>\n<p>Well, if you have something to donate, please create a user account and browse the list of items that our recipient organizations need.  If you are a valid, government recognized charity organization that works with homelessness and hunger, please create a user account and let your needs be known.  If you're interested in helping out to keep the website updated, please go to our Contact Us page and shoot us an email - we will always reply to you with great appreciation.</p> <p>It's TheDonorsChoice on how, where and when you donate, let us help you... help us!</p>\n</div>\n"}),n["menu-template"]=o(function(e,o,n,t,a){function s(e,o){var t,a="";return a+="\n",t=n["if"].call(e,(t=e&&e.attributes,null==t||t===!1?t:t.dropdown),{hash:{},inverse:u.program(5,l,o),fn:u.program(2,i,o),data:o}),(t||0===t)&&(a+=t),a+="\n"}function i(e,o){var t,a="";return a+='\n<li class="dropdown">\n    <a class="dropdown-toggle" data-toggle="dropdown" id="'+d((t=e&&e.attributes,t=null==t||t===!1?t:t.id,typeof t===h?t.apply(e):t))+'">'+d((t=e&&e.attributes,t=null==t||t===!1?t:t.title,typeof t===h?t.apply(e):t))+' <span class="caret"></span></a>\n    <ul class="dropdown-menu" aria-labelledby="'+d((t=e&&e.attributes,t=null==t||t===!1?t:t.id,typeof t===h?t.apply(e):t))+'">\n        ',t=n.each.call(e,(t=e&&e.attributes,null==t||t===!1?t:t.dropdown),{hash:{},inverse:u.noop,fn:u.program(3,r,o),data:o}),(t||0===t)&&(a+=t),a+="\n    </ul>\n</li>\n"}function r(e,o){var t,a,s="";return s+='\n        <li><a href="',(a=n.link)?t=a.call(e,{hash:{},data:o}):(a=e&&e.link,t=typeof a===h?a.call(e,{hash:{},data:o}):a),s+=d(t)+'">',(a=n.title)?t=a.call(e,{hash:{},data:o}):(a=e&&e.title,t=typeof a===h?a.call(e,{hash:{},data:o}):a),s+=d(t)+"</a></li>\n        "}function l(e){var o,n="";return n+='\n<li><a href="'+d((o=e&&e.attributes,o=null==o||o===!1?o:o.link,typeof o===h?o.apply(e):o))+'">'+d((o=e&&e.attributes,o=null==o||o===!1?o:o.title,typeof o===h?o.apply(e):o))+"</a></li>\n"}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),a=a||{};var c,p="",h="function",d=this.escapeExpression,u=this;return c=n.each.call(o,o&&o.models,{hash:{},inverse:u.noop,fn:u.program(1,s,a),data:a}),(c||0===c)&&(p+=c),p+="\n"}),n["user-account-template"]=o(function(e,o,n,t,a){return this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),a=a||{},'<hr>\n<div class="well bs-component">\n    <div class="row">\n    <div class="col-lg-6 col-lg-offset-3">\n        <form class="form-horizontal">\n            <fieldset>\n                <legend>New Account</legend>\n                <div class="form-group">\n                    <label for="inputFirstName" class="col-lg-2 control-label">First Name</label>\n                    <div class="col-lg-10">\n                        <input type="text" class="form-control" id="inputFirstName" placeholder="First Name" mouseev="true" autocomplete="off" keyev="true" clickev="true">\n                    </div>\n                </div>\n                <div class="form-group">\n                    <label for="inputLastName" class="col-lg-2 control-label">Last Name</label>\n                    <div class="col-lg-10">\n                        <input type="text" class="form-control" id="inputLastName" placeholder="Last Name" mouseev="true" autocomplete="off" keyev="true" clickev="true">\n                    </div>\n                </div>\n                <div class="form-group">\n                    <label for="inputEmail" class="col-lg-2 control-label">Email</label>\n                    <div class="col-lg-10">\n                        <input type="text" class="form-control" id="inputEmail" placeholder="Email" mouseev="true" autocomplete="off" keyev="true" clickev="true">\n                    </div>\n                </div>\n                <div class="form-group">\n                    <label for="inputPassword" class="col-lg-2 control-label">Password</label>\n                    <div class="col-lg-10">\n                        <input type="password" class="form-control" id="inputPassword" placeholder="Password" mouseev="true" autocomplete="off" keyev="true" clickev="true">\n                    </div>\n                </div>\n                <div class="form-group">\n                    <label for="inputConfirmPassword" class="col-lg-2 control-label">Confirm Password</label>\n                    <div class="col-lg-10">\n                        <input type="password" class="form-control" id="inputConfirmPassword" placeholder="Confirm Password" mouseev="true" autocomplete="off" keyev="true" clickev="true">\n                    </div>\n                </div>\n                <div class="form-group">\n                    <label for="select" class="col-lg-2 control-label">Account Type</label>\n                    <div class="col-lg-10">\n                        <select class="form-control" id="select">\n                            <option>Donor</option>\n                            <option>Recipient</option>\n                        </select>\n                    </div>\n                </div>\n                <div class="form-group">\n                    <div class="col-lg-10 col-lg-offset-2">\n                        <button type="submit" class="btn btn-primary" id="createAccount">Create Account</button>\n                    </div>\n                </div>\n            </fieldset>\n        </form>\n    </div>\n</div>\n</div>'}),n["user-dropdown-template"]=o(function(e,o,n,t,a){return this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),a=a||{},"\n"}),n["user-login-template"]=o(function(e,o,n,t,a){function s(e){var o,n="";return n+="\n    <div>\n        <h2>"+p((o=e&&e.attributes,o=null==o||o===!1?o:o.name,typeof o===c?o.apply(e):o))+'</h2>\n    </div>\n    <div class="col-md-12">\n        <a href="#">Account Settings</a>\n    </div>\n    <div class="col-md-12" style="margin-bottom: 25px">\n        <a id="btn-logout">Logout</a>\n    </div>\n'}function i(){return'\n    <div>\n        <h2>Login</h2>\n    </div>\n    <form id="loginform" class="form-horizontal" role="form">\n\n        <div style="margin-bottom: 25px" class="input-group">\n                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i>\n                </span>\n            <input id="login-username" type="text" class="form-control" name="username" value="" placeholder="Email">\n        </div>\n\n        <div style="margin-bottom: 25px" class="input-group">\n                <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i>\n                </span>\n            <input id="login-password" type="password" class="form-control" name="password" placeholder="Password">\n        </div>\n\n        <div style="margin-top:10px" class="form-group">\n            <div class="col-sm-12 controls">\n                <button id="btn-login" class="btn btn-success">Login</button>\n            </div>\n        </div>\n\n\n        <div class="form-group">\n            <div class="col-md-12 control">\n                <div style="border-top: 1px solid#888; padding-top:15px; font-size:85%">\n                    Need an account? <a href="#register">Sign Up Here</a>\n                </div>\n            </div>\n        </div>\n    </form>\n'}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),a=a||{};var r,l="",c="function",p=this.escapeExpression,h=this;return r=n["if"].call(o,(r=o&&o.attributes,null==r||r===!1?r:r.loggedIn),{hash:{},inverse:h.program(3,i,a),fn:h.program(1,s,a),data:a}),(r||0===r)&&(l+=r),l+="\n\n"}),n});