define(["handlebars.runtime"],function(n){n=n["default"];var e=n.template,t=n.templates=n.templates||{};return t["alert-template"]=e(function(n,e,t,a,l){function s(n,e){var a,l;return(l=t.attribute)?a=l.call(n,{hash:{},data:e}):(l=n&&n.attribute,a=typeof l===p?l.call(n,{hash:{},data:e}):l),d(a)}function o(){return"success"}this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,n.helpers),l=l||{};var i,r,c="",p="function",d=this.escapeExpression,u=this;return c+=' <div class="alert alert-dismissable alert-',i=t["if"].call(e,e&&e.attribute,{hash:{},inverse:u.program(3,o,l),fn:u.program(1,s,l),data:l}),(i||0===i)&&(c+=i),c+='">\n            <button type="button" class="close" data-dismiss="alert">×</button>\n            ',(r=t.message)?i=r.call(e,{hash:{},data:l}):(r=e&&e.message,i=typeof r===p?r.call(e,{hash:{},data:l}):r),c+=d(i)+"\n </div>"}),t["body-template"]=e(function(n,e,t,a,l){return this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,n.helpers),l=l||{},'<hr>\n<div class="bs-component">\n    <div class="jumbotron">\n        <h1><img style="padding-right: 5px;" src="@routes.Assets.at("images/clock.png")" /> Coming soon</h1>\n        <br />\n        Soon this website will be jam packed full of features becoming your portal for helping those in need.\n        Whether you are looking to donate time, goods, or services to local shelters and other organizations, we will help you connect with local organizations.\n    </div>\n</div>'}),t["header-template"]=e(function(n,e,t,a,l){this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,n.helpers),l=l||{};var s,o,i="",r="function",c=this.escapeExpression;return i+='\n        <div class="container">\n            <div class="row">\n                <div class="col-md-2"><img style="height:100px;width:100px;" src="@routes.Assets.at("images/logo.png")" /></div>\n                <div class="col-md-10"><h1>',(o=t.title)?s=o.call(e,{hash:{},data:l}):(o=e&&e.title,s=typeof o===r?o.call(e,{hash:{},data:l}):o),i+=c(s)+"</h1>\n                    <p>",(o=t.slogan)?s=o.call(e,{hash:{},data:l}):(o=e&&e.slogan,s=typeof o===r?o.call(e,{hash:{},data:l}):o),i+=c(s)+"</p>\n                </div>\n            </div>\n        </div>\n"}),t.main_template=e(function(n,e,t,a,l){return this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,n.helpers),l=l||{},"\n\n    \n\n   \n\n    \n\n    \n\n\n"}),t["menu-template"]=e(function(n,e,t,a,l){function s(n,e){var a,l="";return l+="\n",a=t["if"].call(n,(a=n&&n.attributes,null==a||a===!1?a:a.dropdown),{hash:{},inverse:m.program(5,r,e),fn:m.program(2,o,e),data:e}),(a||0===a)&&(l+=a),l+="\n"}function o(n,e){var a,l="";return l+='\n<li class="dropdown">\n    <a class="dropdown-toggle" data-toggle="dropdown" id="'+u((a=n&&n.attributes,a=null==a||a===!1?a:a.id,typeof a===d?a.apply(n):a))+'">'+u((a=n&&n.attributes,a=null==a||a===!1?a:a.title,typeof a===d?a.apply(n):a))+' <span class="caret"></span></a>\n    <ul class="dropdown-menu" aria-labelledby="'+u((a=n&&n.attributes,a=null==a||a===!1?a:a.id,typeof a===d?a.apply(n):a))+'">\n        ',a=t.each.call(n,(a=n&&n.attributes,null==a||a===!1?a:a.dropdown),{hash:{},inverse:m.noop,fn:m.program(3,i,e),data:e}),(a||0===a)&&(l+=a),l+="\n    </ul>\n</li>\n"}function i(n,e){var a,l,s="";return s+='\n        <li><a href="',(l=t.link)?a=l.call(n,{hash:{},data:e}):(l=n&&n.link,a=typeof l===d?l.call(n,{hash:{},data:e}):l),s+=u(a)+'">',(l=t.title)?a=l.call(n,{hash:{},data:e}):(l=n&&n.title,a=typeof l===d?l.call(n,{hash:{},data:e}):l),s+=u(a)+"</a></li>\n        "}function r(n){var e,t="";return t+='\n<li><a href="'+u((e=n&&n.attributes,e=null==e||e===!1?e:e.link,typeof e===d?e.apply(n):e))+'">'+u((e=n&&n.attributes,e=null==e||e===!1?e:e.title,typeof e===d?e.apply(n):e))+"</a></li>\n"}this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,n.helpers),l=l||{};var c,p="",d="function",u=this.escapeExpression,m=this;return c=t.each.call(e,e&&e.models,{hash:{},inverse:m.noop,fn:m.program(1,s,l),data:l}),(c||0===c)&&(p+=c),p+="\n"}),t["user-account-template"]=e(function(n,e,t,a,l){return this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,n.helpers),l=l||{},'        <hr>\n        <div class="well bs-component">\n            <div class="row">\n            <div class="col-lg-6 col-lg-offset-3">\n                <form class="form-horizontal">\n                    <fieldset>\n                        <legend>New Account</legend>\n                        <div class="form-group">\n                            <label for="inputFirstName" class="col-lg-2 control-label">First Name</label>\n                            <div class="col-lg-10">\n                                <input type="text" class="form-control" id="inputFirstName" placeholder="First Name" mouseev="true" autocomplete="off" keyev="true" clickev="true">\n                            </div>\n                        </div>\n                        <div class="form-group">\n                            <label for="inputLastName" class="col-lg-2 control-label">Last Name</label>\n                            <div class="col-lg-10">\n                                <input type="text" class="form-control" id="inputLastName" placeholder="Last Name" mouseev="true" autocomplete="off" keyev="true" clickev="true">\n                            </div>\n                        </div>\n                        <div class="form-group">\n                            <label for="inputEmail" class="col-lg-2 control-label">Email</label>\n                            <div class="col-lg-10">\n                                <input type="text" class="form-control" id="inputEmail" placeholder="Email" mouseev="true" autocomplete="off" keyev="true" clickev="true">\n                            </div>\n                        </div>\n                        <div class="form-group">\n                            <label for="inputPassword" class="col-lg-2 control-label">Password</label>\n                            <div class="col-lg-10">\n                                <input type="password" class="form-control" id="inputPassword" placeholder="Password" mouseev="true" autocomplete="off" keyev="true" clickev="true">\n                            </div>\n                        </div>\n                        <div class="form-group">\n                            <label for="inputConfirmPassword" class="col-lg-2 control-label">Confirm Password</label>\n                            <div class="col-lg-10">\n                                <input type="password" class="form-control" id="inputConfirmPassword" placeholder="Confirm Password" mouseev="true" autocomplete="off" keyev="true" clickev="true">\n                            </div>\n                        </div>\n                        <div class="form-group">\n                            <label for="select" class="col-lg-2 control-label">Account Type</label>\n                            <div class="col-lg-10">\n                                <select class="form-control" id="select">\n                                    <option>Donor</option>\n                                    <option>Recipient</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class="form-group">\n                            <div class="col-lg-10 col-lg-offset-2">\n                                <button type="submit" class="btn btn-primary" id="createAccount">Create Account</button>\n                            </div>\n                        </div>\n                    </fieldset>\n                </form>\n            </div>\n        </div>\n        </div>'}),t["user-dropdown-template"]=e(function(n,e,t,a,l){this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,n.helpers),l=l||{};var s,o,i="",r="function",c=this.escapeExpression;return i+='<span class="glyphicon glyphicon-user" style="padding-right: 10px;"></span>\n',(o=t.text)?s=o.call(e,{hash:{},data:l}):(o=e&&e.text,s=typeof o===r?o.call(e,{hash:{},data:l}):o),i+=c(s)+'\n<span class="caret"></span>\n'}),t["user-login-template"]=e(function(n,e,t,a,l){function s(n,e){var a,l,s="";return s+="\n    <div>\n        <h2>",(l=t.first_name)?a=l.call(n,{hash:{},data:e}):(l=n&&n.first_name,a=typeof l===c?l.call(n,{hash:{},data:e}):l),s+=p(a)+" ",(l=t.last_name)?a=l.call(n,{hash:{},data:e}):(l=n&&n.last_name,a=typeof l===c?l.call(n,{hash:{},data:e}):l),s+=p(a)+'</h2>\n    </div>\n    <div class="col-md-12">\n        <a href="#">Account Settings</a>\n    </div>\n    <div class="col-md-12" style="margin-bottom: 25px">\n        <a href="#logout">Logout</a>\n    </div>\n'}function o(){return'\n    <div>\n        <h2>Login</h2>\n    </div>\n    <form id="loginform" class="form-horizontal" role="form">\n\n        <div style="margin-bottom: 25px" class="input-group">\n            <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i>\n            </span>\n            <input id="login-username" type="text" class="form-control" name="username" value="" placeholder="Email">\n        </div>\n\n        <div style="margin-bottom: 25px" class="input-group">\n            <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i>\n            </span>\n            <input id="login-password" type="password" class="form-control" name="password" placeholder="Password">\n        </div>\n\n        <div style="margin-top:10px" class="form-group">\n            <div class="col-sm-12 controls">\n                <a id="btn-login" class="btn btn-success">Login</a>\n            </div>\n        </div>\n\n\n        <div class="form-group">\n            <div class="col-md-12 control">\n                <div style="border-top: 1px solid#888; padding-top:15px; font-size:85%">\n                    Need an account? <a href="#register">Sign Up Here</a>\n                </div>\n            </div>\n        </div>\n    </form>\n'}this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,n.helpers),l=l||{};var i,r="",c="function",p=this.escapeExpression,d=this;return i=t["if"].call(e,e&&e.user,{hash:{},inverse:d.program(3,o,l),fn:d.program(1,s,l),data:l}),(i||0===i)&&(r+=i),r+="\n\n"}),t});