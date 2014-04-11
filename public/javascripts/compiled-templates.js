define(["handlebars.runtime"],function(e){e=e["default"];var t=e.template,n=e.templates=e.templates||{};return n["aboutus-template"]=t(function(e,t,n,o,a){return this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),a=a||{},"<h1 style=\"text-align: center;\">About Us</h1>\n<div>\n<h3>Organization</h3>\n<p>The mission of TheDonorsChoice is to be a conduit for communication between member homeless and hunger non-profit organizations and donors who may have time, expertise, and material help to help meet the basic needs of others. TheDonorsChoice is a non-profit organization that makes no money in its mission to bring donors and organizations together.  </p> <p>It's TheDonorsChoice on how, where and when you donate, let us help you... help us!</p>\n</div>\n\n<div>\n<h3>Resources</h3>\n<p>TheDonorsChoice is simply a website and a team to support it.  TheDonorsChoice does not collect the donations or assist in the distribution of donations; it simply provides an outlet for member organizations to reach donors who may not know who needs what they have.  </p> <p>It's TheDonorsChoice on how, where and when you donate, let us help you... help us!</p>\n</div>\n\n<div>\n<h3>Internships</h3>\n<p>Because TheDonorsChoice does not collect any money from any source, any interns looking to help need to realise that they are donating their time.  That said, we would love to hear from folks who would like to work in Play Framework with Bootstrap environment.  Your donation of expertise is welcome.  Please see the Contact Us page and get in touch!</p> <p>It's TheDonorsChoice on how, where and when you donate, let us help you... help us!</p>\n</div>"}),n["alert-template"]=t(function(e,t,n,o,a){function i(e,t){var o,a;return(a=n.attribute)?o=a.call(e,{hash:{},data:t}):(a=e&&e.attribute,o=typeof a===p?a.call(e,{hash:{},data:t}):a),c(o)}function s(){return"success"}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),a=a||{};var r,l,d="",p="function",c=this.escapeExpression,h=this;return d+=' <div class="alert alert-dismissable alert-',r=n["if"].call(t,t&&t.attribute,{hash:{},inverse:h.program(3,s,a),fn:h.program(1,i,a),data:a}),(r||0===r)&&(d+=r),d+='">\n            <button type="button" class="close" data-dismiss="alert">×</button>\n            ',(l=n.message)?r=l.call(t,{hash:{},data:a}):(l=t&&t.message,r=typeof l===p?l.call(t,{hash:{},data:a}):l),d+=c(r)+"\n </div>"}),n["body-comingsoon-template"]=t(function(e,t,n,o,a){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),o=this.merge(o,e.partials),a=a||{};var i,s="",r=this;return i=r.invokePartial(o["header-template"],"header-template",t,n,o,a),(i||0===i)&&(s+=i),s+='\n<hr>\n<div class="bs-component">\n    <div class="jumbotron">\n        <h1><img style="padding-right: 5px;" src="/assets/images/clock.png" /> Coming soon</h1>\n        <br />\n        Soon this website will be jam packed full of features becoming your portal for helping those in need.\n        Whether you are looking to donate time, goods, or services to local shelters and other organizations, we will help you connect with local organizations.\n    </div>\n</div>'}),n["body-error-template"]=t(function(e,t,n,o,a){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),o=this.merge(o,e.partials),a=a||{};var i,s="",r=this;return i=r.invokePartial(o["header-template"],"header-template",t,n,o,a),(i||0===i)&&(s+=i),s+='\n<hr>\n<div class="bs-component">\n    <div class="alert alert-danger">\n        <strong>We\'re not perfect...</strong>\n        <br /><br />We know you were really looking forward to the page you requested but we had an issue and couldn\'t find it.\n        <br />\n        <br />\n        If you feel that you have reached this message in error, please feel free to <a href="#contact">contact us.</a>\n    </div>\n</div>\n'}),n["contact-template"]=t(function(e,t,n,o,a){return this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),a=a||{},'<h3 style="text-align: center;">Contact TheDonorsChoice!</h3>\n<form action="" method="post" enctype="text/plain">\n    Name:<br>\n    <input id="contact-name" type="text" name="name" value=""><br>\n    E-mail:<br>\n    <input id="contact-email" type="text" name="mail" value=""><br>\n    Comment:<br>\n    <input id="contact-comment" type="text" name="comment" value="" size="50"><br><br>\n\n    <input id="contact-submit" type="submit" value="Send">\n    <input id="contact-reset" type="reset" value="Reset">\n</form>\n'}),n["faq-template"]=t(function(e,t,n,o,a){return this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),a=a||{},"<h1 style=\"text-align: center;\">Frequently Asked Questions</h1>\n<div>\n<h3>How Did This Organization Get Started?</h3>\n<p>TheDonorsChoice started out as a project for the Spring, 2014 Software Engineering class at Boston University.  It is evolving because someone on the team, Lauren, decided to turn a great beginning into a real organization!</p> <p>It's TheDonorsChoice on how, where and when you donate, let us help you... help us!</p>\n</div>\n\n<div>\n<h3>Is this a 501(c)(3) charity?</h3>\n<p>No, it isn't.  Basically for one big reason:  we don't collect money on behalf of anyone.  TheDonorsChoice is simply a website and a team to support it.  TheDonorsChoice provides an outlet for member organizations to reach donors who may not know who needs what they have.  </p> <p>It's TheDonorsChoice on how, where and when you donate, let us help you... help us!</p>\n</div>\n\n<div>\n<h3>Does a person need to be a member to donate?</h3>\n<p>Yes, we ask both donors and recipient organizations to set up a user account.  This is to ensure that donors and recipient organizations have a comfort level that the people they're working with are legitimate. </p> <p>It's TheDonorsChoice on how, where and when you donate, let us help you... help us!</p>\n</div>\n\n<div>\n<h3>Is my information private?</h3>\n<p>Yes, we appreciate our donors and recipient organizations way too much to do anything but keep our members' information private.  We will NEVER sell or share our members list with anyone, including the member recipient organizations.  At most, we will send periodic updates on our work to our own member lists and we will always protect the names and email addresses. </p> <p>It's TheDonorsChoice on how, where and when you donate, let us help you... help us!</p>\n</div>\n\n<div>\n<h3>Are you planning on putting a map on the donor site so that we know which organizations are the closest to us geographically?</h3>\n<p>Wow!  We almost feel like you're psychic!  That is in our backlog of excellent things to do next! </p> <p>It's TheDonorsChoice on how, where and when you donate, let us help you... help us!</p>\n</div>\n\n<div>\n<h3>How can I get involved?</h3>\n<p>Well, if you have something to donate, please create a user account and browse the list of items that our recipient organizations need.  If you are a valid, government recognized charity organization that works with homelessness and hunger, please create a user account and let your needs be known.  If you're interested in helping out to keep the website updated, please go to our Contact Us page and shoot us an email - we will always reply to you with great appreciation.</p> <p>It's TheDonorsChoice on how, where and when you donate, let us help you... help us!</p>\n</div>\n"}),n["index-template"]=t(function(e,t,n,o,a){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),o=this.merge(o,e.partials),a=a||{};var i,s="",r=this;return i=r.invokePartial(o["header-template"],"header-template",t,n,o,a),(i||0===i)&&(s+=i),s+='\n<hr>\n<h1 style="text-align: center;">Welcome</h1>\n<div>\n    <h3>Who is The Donor\'s Choice?</h3>\n    <p>The Donor\'s Choice is an organization dedicated to helping those with items or time to donate find organizations who need what they have.</p>\n</div>\n<div  style="text-align: center;">\n    <a type="button" class="btn btn-danger" href="#resource">  Donate  </a>\n    <button type="button" class="btn btn-link">        </button>\n    <button type="button" class="btn btn-danger"> Request  </button>\n    <button type="button" class="btn btn-link">        </button>\n    <button type="button" class="btn btn-danger">Learn More</button>\n</div>'}),n["menu-template"]=t(function(e,t,n,o,a){function i(e,t){var o,a="";return a+="\n",o=n["if"].call(e,(o=e&&e.attributes,null==o||o===!1?o:o.dropdown),{hash:{},inverse:u.program(5,l,t),fn:u.program(2,s,t),data:t}),(o||0===o)&&(a+=o),a+="\n"}function s(e,t){var o,a="";return a+='\n<li class="dropdown">\n    <a class="dropdown-toggle" data-toggle="dropdown" id="'+h((o=e&&e.attributes,o=null==o||o===!1?o:o.id,typeof o===c?o.apply(e):o))+'">'+h((o=e&&e.attributes,o=null==o||o===!1?o:o.title,typeof o===c?o.apply(e):o))+' <span class="caret"></span></a>\n    <ul class="dropdown-menu" aria-labelledby="'+h((o=e&&e.attributes,o=null==o||o===!1?o:o.id,typeof o===c?o.apply(e):o))+'">\n        ',o=n.each.call(e,(o=e&&e.attributes,null==o||o===!1?o:o.dropdown),{hash:{},inverse:u.noop,fn:u.program(3,r,t),data:t}),(o||0===o)&&(a+=o),a+="\n    </ul>\n</li>\n"}function r(e,t){var o,a,i="";return i+='\n        <li><a href="',(a=n.link)?o=a.call(e,{hash:{},data:t}):(a=e&&e.link,o=typeof a===c?a.call(e,{hash:{},data:t}):a),i+=h(o)+'">',(a=n.title)?o=a.call(e,{hash:{},data:t}):(a=e&&e.title,o=typeof a===c?a.call(e,{hash:{},data:t}):a),i+=h(o)+"</a></li>\n        "}function l(e){var t,n="";return n+='\n<li><a href="'+h((t=e&&e.attributes,t=null==t||t===!1?t:t.link,typeof t===c?t.apply(e):t))+'">'+h((t=e&&e.attributes,t=null==t||t===!1?t:t.title,typeof t===c?t.apply(e):t))+"</a></li>\n"}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),a=a||{};var d,p="",c="function",h=this.escapeExpression,u=this;return d=n.each.call(t,t&&t.models,{hash:{},inverse:u.noop,fn:u.program(1,i,a),data:a}),(d||0===d)&&(p+=d),p+="\n"}),n["recipient-template"]=t(function(e,t,n,o,a){function i(e){var t,n="";return n+='\n			<tr id="info" style="border-top: solid 1px black;">\n				<td width="3%"><input type="button" class="btn btn-info btn-xs" value="+"></td>\n				<td id="title" width="77%">'+d((t=e&&e.attributes,t=null==t||t===!1?t:t.title,typeof t===l?t.apply(e):t))+'</td>\n				<td width="10%">Shelter</td>\n				<td width="10%">04/05/2014</td>			\n			</tr>\n			<tr style="border-bottom: solid 1px black;">\n				<td colspan="4">\n					<div id="expand" class="jumbotron" style="margin-left: 1%; margin-right: 1%;">\n						<div>'+d((t=e&&e.attributes,t=null==t||t===!1?t:t.orgName,typeof t===l?t.apply(e):t))+"</div>\n						<div>"+d((t=e&&e.attributes,t=null==t||t===!1?t:t.email,typeof t===l?t.apply(e):t))+"</div>\n						<div>"+d((t=e&&e.attributes,t=null==t||t===!1?t:t.phoneNumber,typeof t===l?t.apply(e):t))+"</div>\n						<div>"+d((t=e&&e.attributes,t=null==t||t===!1?t:t.address,typeof t===l?t.apply(e):t))+"</div><br>\n						<div>"+d((t=e&&e.attributes,t=null==t||t===!1?t:t.description,typeof t===l?t.apply(e):t))+'</div>\n						<button type="button" class="btn btn-primary" style="margin-top: 5%;" onclick=showModal(\'reply\')>Reply</button>\n					</div>\n				</td>\n			</tr>\n			'}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),a=a||{};var s,r="",l="function",d=this.escapeExpression,p=this;return r+='<style>\n	div.post, div.reply {   \n    	position: absolute;\n    	border: solid 1px black;\n    	margin-top: 30%;\n    	background-color: white;\n    	text-align: right\n    	width: 160px;\n	}\n	\n	#info td {padding-top: 8px; padding-bottom: 8px;}\n	\n	#heading th {padding-top: 8px; padding-bottom: 8px;}\n</style>\n\n<script>\n	function showModal(id) {\n    	$("#" + id).fadeIn(\'slow\');\n	}\n	\n	function hideModal(id) {\n    	$("#" + id).fadeOut(\'slow\');\n	}\n	\n	$(function() {\n		$("td[colspan=4]").find("#expand").hide();\n		$("input").click(function(event) {\n			event.stopPropagation();\n        	var $target = $(event.target);\n        	\n        	if ($target.closest("td").attr("colspan") > 1) {\n            	$target.slideUp();\n        	} else {\n            	$target.closest("tr").next().find("#expand").slideToggle();\n        	}                    \n    	});\n	});\n</script>\n\n<div id="post" class="modal">\n  	<div class="modal-dialog">\n    	<div class="modal-content">\n     		<div class="modal-header">\n     			<div style="margin-bottom: 10px; padding-left: 15px;">New Post\n        			<button type="button" class="close" data-dismiss="modal" aria-hidden="true" onclick=hideModal(\'post\')>×</button>\n       			</div>\n       			<input type="text" class="form-control" id="inputEmail" placeholder="Title">\n       		</div>\n     		<div class="modal-body">\n        		<p>\n        			<textarea class="form-control" rows="10" id="textArea" style="resize: none;" placeholder="Description"></textarea>\n        		</p>\n      		</div>\n      		<div class="modal-footer">\n        		<button type="button" class="btn btn-default" data-dismiss="modal" onclick=hideModal(\'post\')>Close</button>\n        		<button type="button" class="btn btn-primary">Post</button>\n      		</div>\n    	</div>\n  	</div>\n</div>\n\n<div id="reply" class="modal">\n  	<div class="modal-dialog">\n    	<div class="modal-content">\n     		<div class="modal-header">\n     			<div style="margin-bottom: 10px; padding-left: 15px;">Reply Post\n        			<button type="button" class="close" data-dismiss="modal" aria-hidden="true" onclick=hideModal(\'reply\')>×</button>\n       			</div>\n       			<input type="text" class="form-control" id="inputTitle" placeholder="RE:">\n       		</div>\n     		<div class="modal-body">\n        		<p>\n        			<textarea class="form-control" rows="10" id="textArea" style="resize: none;" placeholder="Message"></textarea>\n        		</p>\n      		</div>\n      		<div class="modal-footer">\n        		<button type="button" class="btn btn-default" data-dismiss="modal" onclick=hideModal(\'reply\')>Close</button>\n        		<button type="button" class="btn btn-primary">Reply</button>\n      		</div>\n    	</div>\n  	</div>\n</div>\n\n<div id="page-wrap">\n	<h1 style="text-align: center;">Shelter/Pantry</h1>\n\n	<div class="col-md-12" style="margin-bottom: 10px; margin-top: 10px;">\n		<input type="button" class="btn btn-primary" value="New Post" style="float: right;" onclick=showModal(\'post\') />\n	</div>\n\n	<table style="padding: 20px; table-layout: fixed; width: 100%;">\n		<thead>\n			<tr id="heading">\n				<th width="4%"></th>\n				<th width="76%">Title</th>\n				<th width="10%">Category</th>\n				<th width="10%">Date</th>\n			</tr>\n		</thead>\n		<tbody>\n			',s=n.each.call(t,t&&t.models,{hash:{},inverse:p.noop,fn:p.program(1,i,a),data:a}),(s||0===s)&&(r+=s),r+="\n		</tbody>\n	</table>\n</div>"}),n["resetpassword1-template"]=t(function(e,t,n,o,a){return this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),a=a||{},'<h3 style="text-align: center;">Reset Your Password </h3>\n\n<div class="container">\n    <div class="row">\n        \n        <div class="col-md-10"><h1>TheDonorsChoice</h1>\n            <p>To reset your password, please enter your registered email address below...</p>\n       \n    </div>\n</div>\n\n<form action="" method="post" enctype="text/plain">\n    E-mail:<br>\n    <input id="resetpassword-email" type="text" name="mail-resetpw" value=""><br>\n\n    <input id="resetpassword-submit" type="submit" value="Send">\n</form>\n'}),n["resource-template"]=t(function(e,t,n,o,a){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),o=this.merge(o,e.partials),a=a||{};var i,s="",r=this;return s+='<h1 style="text-align: center;">Welcome to the Donor\'s Page</h1>\n\n<input id="filterinput" name="searchform" placeholder="Keywords" type="text" />\n\n<script type="text/javascript" src="https://www.google.com/cse/tools/onthefly?form=searchbox_demo&lang="></script>\n\n<h5 style="text-align: left; ">Are you here to donate services or commodities?</h5>\n<form>\n    <input type="radio" name="donate" value="Services">Services<br>\n    <input type="radio" name="donate" value="Commodities">Commodities<br>\n    <input type="submit" name="radiosubmit" value="submit" />\n</form>\n<h3 style="text-align: left;">Requests Made By Recipients</h3>\n<table class="table table-striped table-hover ">\n    <thead>\n	    <tr>\n	        <th>Organization</th>\n	        <th>Address</th>\n	        <th>Phone Number</th>\n	        <th>EMail</th>\n	        <th>User Type</th>\n	        <th>Items Needed</th>\n	    </tr>\n    </thead>\n    <tbody id="resourcelist">\n    	',i=r.invokePartial(o["resource-list-template"],"resource-list-template",t,n,o,a),(i||0===i)&&(s+=i),s+='\n	</tbody>\n</table>\n<h3 style="text-align: left;">Google Maps</h3>\n<!-- Use of this code assumes agreement with the Google Custom Search Terms of Service. -->\n<!-- The terms of service are available at http://www.google.com/cse/docs/tos.html -->\n<form style="text-align: left;" name="cse" id="searchbox_demo" action="http://www.google.com/cse">\n    <input type="hidden" name="cref" value="" />\n    <input type="hidden" name="ie" value="utf-8" />\n    <input type="hidden" name="hl" value="" />\n    <input name="q" type="text" size="40" />\n    <input type="submit" name="sa" value="Search" />\n</form>\n</br>\n<div id="map-canvas" style="width:100%;height:400px"></div>\n'}),n["user-account-template"]=t(function(e,t,n,o,a){return this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),a=a||{},'<div class="well bs-component">\n    <div class="row">\n    <div class="col-lg-6 col-lg-offset-3">\n        <form class="form-horizontal">\n            <fieldset>\n                <legend>New Account</legend>\n                <div class="form-group">\n                    <label for="inputName" class="col-lg-4 control-label">Full Name</label>\n                    <div class="col-lg-8">\n                        <input type="text" class="form-control" id="registration-name" placeholder="Full Name" mouseev="true" autocomplete="off" keyev="true" clickev="true">\n                    </div>\n                </div>\n                <div class="form-group">\n                    <label for="inputEmail" class="col-lg-4 control-label">Email</label>\n                    <div class="col-lg-8">\n                        <input type="text" class="form-control" id="registration-email" placeholder="Email" mouseev="true" autocomplete="off" keyev="true" clickev="true">\n                    </div>\n                </div>\n                <div class="form-group">\n                    <label for="inputPassword" class="col-lg-4 control-label">Password</label>\n                    <div class="col-lg-8">\n                        <input type="password" class="form-control" id="registration-password" placeholder="Password" mouseev="true" autocomplete="off" keyev="true" clickev="true">\n                    </div>\n                </div>\n                <div class="form-group">\n                    <label for="inputConfirmPassword" class="col-lg-4 control-label">Confirm Password</label>\n                    <div class="col-lg-8">\n                        <input type="password" class="form-control" id="registration-password-confirm" placeholder="Confirm Password" mouseev="true" autocomplete="off" keyev="true" clickev="true">\n                    </div>\n                </div>\n                <div class="form-group">\n                    <label for="select" class="col-lg-4 control-label">Account Type</label>\n                    <div class="col-lg-8">\n                        <select class="form-control" id="registration-account-type">\n                            <option value="INDIVIDUAL">Donor (Individual)</option>\n                            <option value="COMMERCIAL">Donor (Commercial)</option>\n                            <option value="PANTRY">Recipient (Pantry)</option>\n                            <option value="SHELTER">Recipient (Shelter)</option>\n                        </select>\n                    </div>\n                </div>\n                <div class="form-group">\n                    <div class="col-lg-8 col-lg-offset-4">\n                        <button type="submit" class="btn btn-primary" id="registration-submit">Create Account</button>\n                    </div>\n                </div>\n            </fieldset>\n        </form>\n    </div>\n</div>\n</div>'}),n["user-dropdown-template"]=t(function(e,t,n,o,a){return this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),a=a||{},"\n"}),n["user-login-template"]=t(function(e,t,n,o,a){function i(e){var t,n="";return n+="\n    <div>\n        <h2>"+p((t=e&&e.attributes,t=null==t||t===!1?t:t.name,typeof t===d?t.apply(e):t))+'</h2>\n    </div>\n    <div class="col-md-12">\n        <a href="#">Account Settings</a>\n    </div>\n    <div class="col-md-12" style="margin-bottom: 25px">\n        <a id="btn-logout">Logout</a>\n    </div>\n'}function s(){return'\n    <div>\n        <h2>Login</h2>\n    </div>\n    <form id="loginform" class="form-horizontal" role="form">\n\n        <div style="margin-bottom: 25px" class="input-group">\n                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i>\n                </span>\n            <input id="login-username" type="text" class="form-control" name="username" value="" placeholder="Email">\n        </div>\n\n        <div style="margin-bottom: 25px" class="input-group">\n                <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i>\n                </span>\n            <input id="login-password" type="password" class="form-control" name="password" placeholder="Password">\n        </div>\n\n        <div style="margin-top:10px" class="form-group">\n            <div class="col-sm-12 controls">\n                <button id="btn-login" class="btn btn-success">Login</button>\n            </div>\n        </div>\n\n\n        <div class="form-group">\n            <div class="col-md-12 control">\n                <div style="border-top: 1px solid#888; padding-top:15px; font-size:85%">\n                    Need an account? <a id="register" href="#register">Sign Up Here</a>\n                </div>\n            </div>\n        </div>\n    </form>\n'}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),a=a||{};var r,l="",d="function",p=this.escapeExpression,c=this;return r=n["if"].call(t,(r=t&&t.attributes,null==r||r===!1?r:r.loggedIn),{hash:{},inverse:c.program(3,s,a),fn:c.program(1,i,a),data:a}),(r||0===r)&&(l+=r),l+="\n\n"}),n});