define(["handlebars.runtime"],function(e){e=e["default"];var n=e.template,t=e.templates=e.templates||{};return t["aboutus-template"]=n(function(e,n,t,o,a){this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,e.helpers),o=this.merge(o,e.partials),a=a||{};var i,s="",l=this;return i=l.invokePartial(o["header-template"],"header-template",n,t,o,a),(i||0===i)&&(s+=i),s+="\n<h1 style=\"text-align: center;\">About Us</h1>\n<div>\n<h3>Organization</h3>\n<p>The mission of TheDonorsChoice is to be a conduit for communication between member homeless and hunger non-profit organizations and donors who may have time, expertise, and material help to help meet the basic needs of others. TheDonorsChoice is a non-profit organization that makes no money in its mission to bring donors and organizations together.  </p> <p>It's TheDonorsChoice on how, where and when you donate, let us help you... help us!</p>\n</div>\n\n<div>\n<h3>Resources</h3>\n<p>TheDonorsChoice is simply a website and a team to support it.  TheDonorsChoice does not collect the donations or assist in the distribution of donations; it simply provides an outlet for member organizations to reach donors who may not know who needs what they have.  </p> <p>It's TheDonorsChoice on how, where and when you donate, let us help you... help us!</p>\n</div>\n\n<div>\n<h3>Internships</h3>\n<p>Because TheDonorsChoice does not collect any money from any source, any interns looking to help need to realise that they are donating their time.  That said, we would love to hear from folks who would like to work in Play Framework with Bootstrap environment.  Your donation of expertise is welcome.  Please see the Contact Us page and get in touch!</p> <p>It's TheDonorsChoice on how, where and when you donate, let us help you... help us!</p>\n</div>"}),t["alert-template"]=n(function(e,n,t,o,a){function i(e,n){var o,a;return(a=t.attribute)?o=a.call(e,{hash:{},data:n}):(a=e&&e.attribute,o=typeof a===p?a.call(e,{hash:{},data:n}):a),c(o)}function s(){return"success"}this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,e.helpers),a=a||{};var l,r,d="",p="function",c=this.escapeExpression,h=this;return d+=' <div class="alert alert-dismissable alert-',l=t["if"].call(n,n&&n.attribute,{hash:{},inverse:h.program(3,s,a),fn:h.program(1,i,a),data:a}),(l||0===l)&&(d+=l),d+='">\n            <button type="button" class="close" data-dismiss="alert">×</button>\n            ',(r=t.message)?l=r.call(n,{hash:{},data:a}):(r=n&&n.message,l=typeof r===p?r.call(n,{hash:{},data:a}):r),d+=c(l)+"\n </div>"}),t["body-comingsoon-template"]=n(function(e,n,t,o,a){this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,e.helpers),o=this.merge(o,e.partials),a=a||{};var i,s="",l=this;return i=l.invokePartial(o["header-template"],"header-template",n,t,o,a),(i||0===i)&&(s+=i),s+='\n<hr>\n<div class="bs-component">\n    <div class="jumbotron">\n        <h1><img style="padding-right: 5px;" src="/assets/images/clock.png" /> Coming soon</h1>\n        <br />\n        Soon this website will be jam packed full of features becoming your portal for helping those in need.\n        Whether you are looking to donate time, goods, or services to local shelters and other organizations, we will help you connect with local organizations.\n    </div>\n</div>'}),t["body-error-template"]=n(function(e,n,t,o,a){this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,e.helpers),o=this.merge(o,e.partials),a=a||{};var i,s="",l=this;return i=l.invokePartial(o["header-template"],"header-template",n,t,o,a),(i||0===i)&&(s+=i),s+='\n<hr>\n<div class="bs-component">\n    <div class="alert alert-danger">\n        <strong>We\'re not perfect...</strong>\n        <br /><br />We know you were really looking forward to the page you requested but we had an issue and couldn\'t find it.\n        <br />\n        <br />\n        If you feel that you have reached this message in error, please feel free to <a href="#contact">contact us.</a>\n    </div>\n</div>\n'}),t["contact-template"]=n(function(e,n,t,o,a){this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,e.helpers),o=this.merge(o,e.partials),a=a||{};var i,s="",l=this;return i=l.invokePartial(o["header-template"],"header-template",n,t,o,a),(i||0===i)&&(s+=i),s+='\n<h3 style="text-align: center;">Contact TheDonorsChoice!</h3>\n\n<div class="col-lg-6" style="margin-top: 2%; margin-left: 25%; margin-right: 25%;">\n	<div class="well bs-component">\n		<form class="form-horizontal" style="margin-top: 2%;">\n			<fieldset>\n				<div class="form-group">\n					<label for="inputName" class="col-lg-2 control-label">Name</label>\n					<div class="col-lg-10">\n						<input id="contact-name" type="text" class="form-control" placeholder="Name">\n					</div>\n    			</div>\n    			<div class="form-group">\n					<label for="inputEmail" class="col-lg-2 control-label">Email</label>\n					<div class="col-lg-10">\n						<input id="contact-email" type="text" class="form-control" placeholder="Email">\n					</div>\n    			</div>\n    			<div class="form-group">\n					<label for="textArea" class="col-lg-2 control-label">Comment</label>\n					<div class="col-lg-10">\n						<textarea id="contact-comment" class="form-control" rows="5" style="resize: none;" placeholder="Comment"></textarea>\n					</div>\n    			</div>\n				<div class="form-group">\n					<div class="col-lg-10 col-lg-offset-2">\n						<button id="contact-submit" type="submit" class="btn btn-primary">Submit</button>\n						<button id="contact-reset" type="reset" class="btn btn-default">Reset</button>\n					</div>\n				</div>\n			</fieldset>\n		</form>\n	</div>\n</div>'}),t["faq-template"]=n(function(e,n,t,o,a){this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,e.helpers),o=this.merge(o,e.partials),a=a||{};var i,s="",l=this;return i=l.invokePartial(o["header-template"],"header-template",n,t,o,a),(i||0===i)&&(s+=i),s+="\n<h1 style=\"text-align: center;\">Frequently Asked Questions</h1>\n<div>\n<h3>How Did This Organization Get Started?</h3>\n<p>TheDonorsChoice started out as a project for the Spring, 2014 Software Engineering class at Boston University.  It is evolving because someone on the team, Lauren, decided to turn a great beginning into a real organization!</p> <p>It's TheDonorsChoice on how, where and when you donate, let us help you... help us!</p>\n</div>\n\n<div>\n<h3>Is this a 501(c)(3) charity?</h3>\n<p>No, it isn't.  Basically for one big reason:  we don't collect money on behalf of anyone.  TheDonorsChoice is simply a website and a team to support it.  TheDonorsChoice provides an outlet for member organizations to reach donors who may not know who needs what they have.  </p> <p>It's TheDonorsChoice on how, where and when you donate, let us help you... help us!</p>\n</div>\n\n<div>\n<h3>Does a person need to be a member to donate?</h3>\n<p>Yes, we ask both donors and recipient organizations to set up a user account.  This is to ensure that donors and recipient organizations have a comfort level that the people they're working with are legitimate. </p> <p>It's TheDonorsChoice on how, where and when you donate, let us help you... help us!</p>\n</div>\n\n<div>\n<h3>Is my information private?</h3>\n<p>Yes, we appreciate our donors and recipient organizations way too much to do anything but keep our members' information private.  We will NEVER sell or share our members list with anyone, including the member recipient organizations.  At most, we will send periodic updates on our work to our own member lists and we will always protect the names and email addresses. </p> <p>It's TheDonorsChoice on how, where and when you donate, let us help you... help us!</p>\n</div>\n\n<div>\n<h3>Are you planning on putting a map on the donor site so that we know which organizations are the closest to us geographically?</h3>\n<p>Wow!  We almost feel like you're psychic!  That is in our backlog of excellent things to do next! </p> <p>It's TheDonorsChoice on how, where and when you donate, let us help you... help us!</p>\n</div>\n\n<div>\n<h3>How can I get involved?</h3>\n<p>Well, if you have something to donate, please create a user account and browse the list of items that our recipient organizations need.  If you are a valid, government recognized charity organization that works with homelessness and hunger, please create a user account and let your needs be known.  If you're interested in helping out to keep the website updated, please go to our Contact Us page and shoot us an email - we will always reply to you with great appreciation.</p> <p>It's TheDonorsChoice on how, where and when you donate, let us help you... help us!</p>\n</div>\n\n<div>\n<h3>What kind of donations do you accept?</h3>\n<p>We don't accept any donations directly, recipients can post what they need and donor's can post a variety of donations, there are not limitations. <p>It's TheDonorsChoice on how, where and when you donate, let us help you... help us!</p>\n</div>\n\n<div>\n<h3>If I have something to donate do I have to drop it off myself?</h3>\n<p>You don't always have to drop the donations off yourself, we recommend coordinating with the recipient if they can pick it up directly from the person donating</p>\n</div>\n"}),t["index-template"]=n(function(e,n,t,o,a){this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,e.helpers),o=this.merge(o,e.partials),a=a||{};var i,s="",l=this;return i=l.invokePartial(o["header-template"],"header-template",n,t,o,a),(i||0===i)&&(s+=i),s+='\n<hr>\n<h1 style="text-align: center;">Welcome</h1>\n<div class="jumbotron">\n  <h1>Jumbotron</h1>\n  <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>\n  <p><a class="btn btn-primary btn-lg">Learn more</a></p>\n<img src="/assets/images/PN.jpg" width="189px" height="283px" alt="kitchen work"></div>\n\n<div>\n    <h3>Who is The Donor\'s Choice?</h3>\n    <p>The Donor’s Choice is a channel for individuals or organizations with resources to distribute them in an effort to help the homeless and the hungry. This channel alleviates the tireless work of obtaining resources by shelter program directors, soup kitchen managers, and other volunteers involved in this work and allows them to focus on their core mission of engaging and helping the homeless and the hungry. Additionally, this channel reduces overall waste in the form of inventory and storage costs by local area businesses. </p><p> It’s The Donor\'s Choice on how, where and when you donate. Let us help you... help us! Join the Donor’s Choice today.</p>\n</div>\n<div  style="text-align: center;">\n    <a type="button" class="btn btn-danger" href="#resource">  Donate  </a>\n    <button type="button" class="btn btn-link"> </button>\n    <a type="button" class="btn btn-danger" href="#recipient">  Make Request  </a>\n    <button type="button" class="btn btn-link"> </button>\n    <a type="button" class="btn btn-danger" href="#faq">  Learn More  </a>\n</div>'}),t["menu-template"]=n(function(e,n,t,o,a){function i(e,n){var o,a="";return a+="\n",o=t["if"].call(e,(o=e&&e.attributes,null==o||o===!1?o:o.dropdown),{hash:{},inverse:u.program(5,r,n),fn:u.program(2,s,n),data:n}),(o||0===o)&&(a+=o),a+="\n"}function s(e,n){var o,a="";return a+='\n<li class="dropdown">\n    <a class="dropdown-toggle" data-toggle="dropdown" id="'+h((o=e&&e.attributes,o=null==o||o===!1?o:o.id,typeof o===c?o.apply(e):o))+'">'+h((o=e&&e.attributes,o=null==o||o===!1?o:o.title,typeof o===c?o.apply(e):o))+' <span class="caret"></span></a>\n    <ul class="dropdown-menu" aria-labelledby="'+h((o=e&&e.attributes,o=null==o||o===!1?o:o.id,typeof o===c?o.apply(e):o))+'">\n        ',o=t.each.call(e,(o=e&&e.attributes,null==o||o===!1?o:o.dropdown),{hash:{},inverse:u.noop,fn:u.program(3,l,n),data:n}),(o||0===o)&&(a+=o),a+="\n    </ul>\n</li>\n"}function l(e,n){var o,a,i="";return i+='\n        <li><a href="',(a=t.link)?o=a.call(e,{hash:{},data:n}):(a=e&&e.link,o=typeof a===c?a.call(e,{hash:{},data:n}):a),i+=h(o)+'">',(a=t.title)?o=a.call(e,{hash:{},data:n}):(a=e&&e.title,o=typeof a===c?a.call(e,{hash:{},data:n}):a),i+=h(o)+"</a></li>\n        "}function r(e){var n,t="";return t+='\n<li><a href="'+h((n=e&&e.attributes,n=null==n||n===!1?n:n.link,typeof n===c?n.apply(e):n))+'">'+h((n=e&&e.attributes,n=null==n||n===!1?n:n.title,typeof n===c?n.apply(e):n))+"</a></li>\n"}this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,e.helpers),a=a||{};var d,p="",c="function",h=this.escapeExpression,u=this;return d=t.each.call(n,n&&n.models,{hash:{},inverse:u.noop,fn:u.program(1,i,a),data:a}),(d||0===d)&&(p+=d),p+="\n"}),t["recipient-template"]=n(function(e,n,t,o,a){function i(e){var n,t="";return t+='\n			<tr id="info" style="border-top: solid 1px black;">\n				<td width="3%"><button style="background: none; border: none;"><i id="icon" class="glyphicon glyphicon-plus-sign"></i></button></td>\n				<td id="title" width="67%">'+d((n=e&&e.attributes,n=null==n||n===!1?n:n.title,typeof n===r?n.apply(e):n))+'</td>\n				<td width="10%">'+d((n=e&&e.attributes,n=null==n||n===!1?n:n.Type,typeof n===r?n.apply(e):n))+'</td>\n				<td width="10%">'+d((n=e&&e.attributes,n=null==n||n===!1?n:n.itemsNeeded,typeof n===r?n.apply(e):n))+'</td>\n				<td width="10%">04/05/2014</td>			\n			</tr>\n			<tr style="border-bottom: solid 1px black;">\n				<td colspan="5">\n					<div id="expand" class="jumbotron" style="margin-left: 1%; margin-right: 1%;">\n						<div>'+d((n=e&&e.attributes,n=null==n||n===!1?n:n.orgName,typeof n===r?n.apply(e):n))+"</div>\n						<div>"+d((n=e&&e.attributes,n=null==n||n===!1?n:n.email,typeof n===r?n.apply(e):n))+"</div>\n						<div>"+d((n=e&&e.attributes,n=null==n||n===!1?n:n.phoneNumber,typeof n===r?n.apply(e):n))+"</div>\n						<div>"+d((n=e&&e.attributes,n=null==n||n===!1?n:n.address,typeof n===r?n.apply(e):n))+"</div><br>\n						<div>"+d((n=e&&e.attributes,n=null==n||n===!1?n:n.description,typeof n===r?n.apply(e):n))+'</div>\n						<div style="margin-top: 5%; margin-right: 5px;">\n							<input type="button" class="btn btn-primary" onclick=showModal(\'edit\') value="Edit" />\n							<input type="button" class="btn btn-danger" style="margin-left: 5px;" onclick=showModal(\'delete\') value="Delete" />\n						</div>\n					</div>\n				</td>\n			</tr>\n			'}this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,e.helpers),o=this.merge(o,e.partials),a=a||{};var s,l="",r="function",d=this.escapeExpression,p=this;return s=p.invokePartial(o["header-template"],"header-template",n,t,o,a),(s||0===s)&&(l+=s),l+='\n<style>\n	#info td {padding-top: 8px; padding-bottom: 8px;}\n	\n	#page-wrap {\n		opacity: 1;\n		transition: opacity .25s ease-in-out;\n   		-moz-transition: opacity .25s ease-in-out;\n   		-webkit-transition: opacity .25s ease-in-out;\n   	}\n	\n	#heading th {padding-top: 8px; padding-bottom: 8px;}\n</style>\n\n<script>\n	function showModal(id) {\n    	$("#" + id).fadeIn(\'slow\');\n    	document.getElementById("page-wrap").setAttribute("style", "opacity: 0.3;");\n	}\n	\n	function hideModal(id) {\n    	$("#" + id).fadeOut(\'slow\');\n    	document.getElementById("page-wrap").setAttribute("style", "opacity: 1;");\n	}\n	\n	$(function() {\n		$("td[colspan=5]").find("#expand").hide();\n		$("button").click(function(event) {\n			this.blur();\n			var icon = $(this).children();\n			event.stopPropagation();\n        	var $target = $(event.target);\n        	\n        	if (icon.hasClass("glyphicon glyphicon-minus-sign")) {\n        		icon.removeClass("glyphicon glyphicon-minus-sign").addClass("glyphicon glyphicon-plus-sign");\n           		$target.closest("tr").next().find("#expand").slideToggle();\n        	} else if (icon.hasClass("glyphicon glyphicon-plus-sign")) {\n        		icon.removeClass("glyphicon glyphicon-plus-sign").addClass("glyphicon glyphicon-minus-sign");\n           		$target.closest("tr").next().find("#expand").slideToggle();\n        	}                    \n    	});\n	});\n</script>\n\n<div id="post" class="modal">\n  	<div class="modal-dialog">\n    	<div class="modal-content">\n     		<div class="modal-header">\n     			<div style="margin-bottom: 10px; padding-left: 15px;">New Post\n        			<button type="button" class="close" data-dismiss="modal" aria-hidden="true" onclick=hideModal(\'post\')>×</button>\n       			</div>\n       			<div style="margin-bottom: 10px">\n       				<input id="inputTitle" type="text" class="form-control" placeholder="Title">\n       			</div>\n       		</div>\n     		<div class="modal-body">\n     			<div class="input-group" style="margin-bottom: 25px">\n                	<span class="input-group-addon"><i class="glyphicon glyphicon-shopping-cart"></i></span>\n            		<input id="inputItemsNeeded" type="text" class="form-control" placeholder="Items Needed">\n            	</div>\n        		\n        		<div class="input-group" style="margin-bottom: 25px">\n        			<span class="input-group-addon"><i class="glyphicon glyphicon-tag"></i></span>\n        			<select id="inputType" class="form-control">\n        				<option>Shelter</option>\n        				<option>Pantry</option>\n        			</select>\n        		</div>\n        		\n        		<p>\n        			<textarea class="form-control" rows="10" id="textArea" style="resize: none;" placeholder="Description"></textarea>\n        		</p>\n      		</div>\n      		<div class="modal-footer">\n        		<button type="button" class="btn btn-default" data-dismiss="modal" onclick=hideModal(\'post\')>Close</button>\n        		<button type="submit" id="submit_post" class="btn btn-primary"  onclick=hideModal(\'post\')>Post</button>\n      		</div>\n    	</div>\n  	</div>\n</div>\n\n<div id="edit" class="modal">\n  	<div class="modal-dialog">\n    	<div class="modal-content">\n     		<div class="modal-header">\n     			<div style="margin-bottom: 10px; padding-left: 15px;">Edit Post\n        			<button type="button" class="close" data-dismiss="modal" aria-hidden="true" onclick=hideModal(\'edit\')>×</button>\n       			</div>\n       			<input type="text" class="form-control" id="inputEmail" placeholder="'+d((s=n&&n.model,s=null==s||s===!1?s:s.attributes,s=null==s||s===!1?s:s.email,typeof s===r?s.apply(n):s))+'">\n       		</div>\n     		<div class="modal-body">\n     			<div class="input-group" style="margin-bottom: 25px">\n                	<span class="input-group-addon"><i class="glyphicon glyphicon-shopping-cart"></i></span>\n            		<input id="inputItemsNeeded" type="text" class="form-control" placeholder="Items Needed">\n            	</div>\n        		\n        		<div class="input-group" style="margin-bottom: 25px">\n        			<span class="input-group-addon"><i class="glyphicon glyphicon-tag"></i></span>\n        			<select class="form-control">\n        				<option>Shelter</option>\n        				<option>Pantry</option>\n        			</select>\n        		</div>\n     		\n        		<p>\n        			<textarea class="form-control" rows="10" id="textArea" style="resize: none;" placeholder="Description"></textarea>\n        		</p>\n      		</div>\n      		<div class="modal-footer">\n        		<button type="button" class="btn btn-default" data-dismiss="modal" onclick=hideModal(\'edit\')>Close</button>\n        		<button type="button" class="btn btn-primary">Save</button>\n      		</div>\n    	</div>\n  	</div>\n</div>\n\n<div id="delete" class="modal">\n  	<div class="modal-dialog">\n    	<div class="modal-content">\n     		<div class="modal-header">\n     			<div style="margin-bottom: 10px; padding-left: 15px;">Delete Post\n        			<button type="button" class="close" data-dismiss="modal" aria-hidden="true" onclick=hideModal(\'delete\')>×</button>\n       			</div>\n       		</div>\n     		<div class="modal-body">\n        		<p>\n        			Are you sure you want to delete this post?\n        		</p>\n      		</div>\n      		<div class="modal-footer">\n        		<button type="button" class="btn btn-default" data-dismiss="modal" onclick=hideModal(\'delete\')>Close</button>\n        		<button type="button" class="btn btn-primary" id="delete_post" onclick=hideModal(\'delete\')>Delete</button>\n      		</div>\n    	</div>\n  	</div>\n</div>\n\n<div id="page-wrap">\n	<h1 style="text-align: center;">Shelter/Pantry</h1>\n\n	<p class="bs-component" style="margin-bottom: 25px; margin-top: 25px;">\n		<input type="button" class="btn btn-primary" value="New Post" style="float: right;" onclick=showModal(\'post\') />\n	</p>\n\n	<table style="padding: 20px; table-layout: fixed; width: 100%;">\n		<thead>\n			<tr id="heading">\n				<th width="3%"></th>\n				<th width="67%">Title</th>\n				<th width="10%">Category</th>\n				<th width="10%">Items Needed</th>\n				<th width="10%">Date</th>\n			</tr>\n		</thead>\n		<tbody>\n			',s=t.each.call(n,n&&n.models,{hash:{},inverse:p.noop,fn:p.program(1,i,a),data:a}),(s||0===s)&&(l+=s),l+="\n		</tbody>\n	</table>\n</div>"}),t["resetpassword1-template"]=n(function(e,n,t,o,a){return this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,e.helpers),a=a||{},'<h3 style="text-align: center;">Reset Your Password </h3>\n\n<div class="container">\n    <div class="row">\n        \n        <div class="col-md-10"><h1>TheDonorsChoice</h1>\n            <p>To reset your password, please enter your registered email address below...</p>\n       \n    </div>\n</div>\n\n<form action="" method="post" enctype="text/plain">\n    E-mail:<br>\n    <input id="resetpassword-email" type="text" name="mail-resetpw" value=""><br>\n\n    <input id="resetpassword-submit" type="submit" value="Send">\n</form>\n'}),t["resetpassword2-template"]=n(function(e,n,t,o,a){return this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,e.helpers),a=a||{},'<div class="well bs-component">\n    <div class="row">\n        <div class="col-lg-6 col-lg-offset-3">\n            <form class="form-horizontal">\n                <fieldset>\n                    <legend>Reset Password</legend>\n                    <div class="form-group">\n                        <label for="inputPassword" class="col-lg-4 control-label">Password</label>\n                        <div class="col-lg-8">\n                            <input type="password" class="form-control" id="reset-password" placeholder="Password" mouseev="true" autocomplete="off" keyev="true" clickev="true">\n                        </div>\n                    </div>\n                    <div class="form-group">\n                        <label for="inputConfirmPassword" class="col-lg-4 control-label">Confirm Password</label>\n                        <div class="col-lg-8">\n                            <input type="password" class="form-control" id="reset-password-confirm" placeholder="Confirm Password" mouseev="true" autocomplete="off" keyev="true" clickev="true">\n                        </div>\n                    </div>\n                    <div class="form-group">\n                        <div class="col-lg-8 col-lg-offset-4">\n                            <button type="submit" class="btn btn-primary" id="reset-submit">Update Password</button>\n                        </div>\n                    </div>\n                </fieldset>\n            </form>\n        </div>\n    </div>\n</div>'}),t["resource-mapwindow-template"]=n(function(e,n,t,o,a){this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,e.helpers),a=a||{};var i,s,l="",r="function",d=this.escapeExpression;return l+='<div class="mapWindow">\n    <h1>',(s=t.orgName)?i=s.call(n,{hash:{},data:a}):(s=n&&n.orgName,i=typeof s===r?s.call(n,{hash:{},data:a}):s),l+=d(i)+"</h1>\n    <div>\n\n        ",(s=t.address)?i=s.call(n,{hash:{},data:a}):(s=n&&n.address,i=typeof s===r?s.call(n,{hash:{},data:a}):s),l+=d(i)+"\n        ",(s=t.phoneNumber)?i=s.call(n,{hash:{},data:a}):(s=n&&n.phoneNumber,i=typeof s===r?s.call(n,{hash:{},data:a}):s),l+=d(i)+"\n        ",(s=t.email)?i=s.call(n,{hash:{},data:a}):(s=n&&n.email,i=typeof s===r?s.call(n,{hash:{},data:a}):s),l+=d(i)+"\n        ",(s=t.Type)?i=s.call(n,{hash:{},data:a}):(s=n&&n.Type,i=typeof s===r?s.call(n,{hash:{},data:a}):s),l+=d(i)+"\n        ",(s=t.itemsNeeded)?i=s.call(n,{hash:{},data:a}):(s=n&&n.itemsNeeded,i=typeof s===r?s.call(n,{hash:{},data:a}):s),l+=d(i)+"\n    </div>\n</div>"}),t["resource-template"]=n(function(e,n,t,o,a){this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,e.helpers),o=this.merge(o,e.partials),a=a||{};var i,s="",l=this;return s+='<div id="rl">\n<input id="filterinput" class="form-control" name="searchform" placeholder="Keywords" type="text" />\n	<div id="resourcelist">\n		',i=l.invokePartial(o["resource-list-template"],"resource-list-template",n,t,o,a),(i||0===i)&&(s+=i),s+='\n	</div>\n</div>\n<div id="map-canvas"></div>\n'}),t["user-account-template"]=n(function(e,n,t,o,a){return this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,e.helpers),a=a||{},'<div class="well bs-component">\n    <div class="row">\n    <div class="col-lg-6 col-lg-offset-3">\n        <form class="form-horizontal">\n            <fieldset>\n                <legend>New Account</legend>\n                <div class="form-group">\n                    <label for="inputName" class="col-lg-4 control-label">Full Name</label>\n                    <div class="col-lg-8">\n                        <input type="text" class="form-control" id="registration-name" placeholder="Full Name" mouseev="true" autocomplete="off" keyev="true" clickev="true">\n                    </div>\n                </div>\n                <div class="form-group">\n                    <label for="inputEmail" class="col-lg-4 control-label">Email</label>\n                    <div class="col-lg-8">\n                        <input type="text" class="form-control" id="registration-email" placeholder="Email" mouseev="true" autocomplete="off" keyev="true" clickev="true">\n                    </div>\n                </div>\n                <div class="form-group">\n                    <label for="inputPassword" class="col-lg-4 control-label">Password</label>\n                    <div class="col-lg-8">\n                        <input type="password" class="form-control" id="registration-password" placeholder="Password" mouseev="true" autocomplete="off" keyev="true" clickev="true">\n                    </div>\n                </div>\n                <div class="form-group">\n                    <label for="inputConfirmPassword" class="col-lg-4 control-label">Confirm Password</label>\n                    <div class="col-lg-8">\n                        <input type="password" class="form-control" id="registration-password-confirm" placeholder="Confirm Password" mouseev="true" autocomplete="off" keyev="true" clickev="true">\n                    </div>\n                </div>\n                <div class="form-group">\n                    <label for="select" class="col-lg-4 control-label">Account Type</label>\n                    <div class="col-lg-8">\n                        <select class="form-control" id="registration-account-type">\n                            <option value="INDIVIDUAL">Donor (Individual)</option>\n                            <option value="COMMERCIAL">Donor (Commercial)</option>\n                            <option value="PANTRY">Recipient (Pantry)</option>\n                            <option value="SHELTER">Recipient (Shelter)</option>\n                        </select>\n                    </div>\n                </div>\n                <div class="form-group">\n                    <div class="col-lg-8 col-lg-offset-4">\n                        <button type="submit" class="btn btn-primary" id="registration-submit">Create Account</button>\n                    </div>\n                </div>\n            </fieldset>\n        </form>\n    </div>\n</div>\n</div>'}),t["user-dropdown-template"]=n(function(e,n,t,o,a){return this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,e.helpers),a=a||{},"\n"}),t["user-login-template"]=n(function(e,n,t,o,a){function i(e){var n,t="";return t+="\n    <div>\n        <h2>"+p((n=e&&e.attributes,n=null==n||n===!1?n:n.name,typeof n===d?n.apply(e):n))+'</h2>\n    </div>\n    <div class="col-md-12">\n        <a href="#">Account Settings</a>\n    </div>\n    <div class="col-md-12" style="margin-bottom: 25px">\n        <a id="btn-logout">Logout</a>\n    </div>\n'}function s(){return'\n    <div>\n        <h2>Login</h2>\n    </div>\n    <form id="loginform" class="form-horizontal" role="form">\n\n        <div style="margin-bottom: 25px" class="input-group">\n                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i>\n                </span>\n            <input id="login-username" type="text" class="form-control" name="username" value="" placeholder="Email">\n        </div>\n\n        <div style="margin-bottom: 25px" class="input-group">\n                <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i>\n                </span>\n            <input id="login-password" type="password" class="form-control" name="password" placeholder="Password">\n        </div>\n\n        <div style="margin-top:10px" class="form-group">\n            <div class="col-sm-12 controls">\n                <button id="btn-login" class="btn btn-success">Login</button> \n                &nbsp;&nbsp;<a id="resetpassword1" href="#resetpassword1">Forget your password?</a>\n            </div>\n            \n        </div>\n\n\n        <div class="form-group">\n            <div class="col-md-12 control">\n                <div style="border-top: 1px solid#888; padding-top:15px; font-size:85%">\n                    Need an account? <a id="register" href="#register">Sign Up Here</a>\n                </div>\n\n            </div>\n        </div>\n    </form>\n'}this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,e.helpers),a=a||{};var l,r="",d="function",p=this.escapeExpression,c=this;return l=t["if"].call(n,(l=n&&n.attributes,null==l||l===!1?l:l.loggedIn),{hash:{},inverse:c.program(3,s,a),fn:c.program(1,i,a),data:a}),(l||0===l)&&(r+=l),r+="\n\n"}),t});