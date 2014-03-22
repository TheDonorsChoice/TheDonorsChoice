define(['handlebars.runtime'], function(Handlebars) {
  Handlebars = Handlebars["default"];  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['alert-template'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.attribute) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.attribute); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program3(depth0,data) {
  
  
  return "success";
  }

  buffer += " <div class=\"alert alert-dismissable alert-";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.attribute), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">×</button>\n            ";
  if (helper = helpers.message) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.message); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n </div>";
  return buffer;
  });
templates['body-template'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "        <hr>\n        <div class=\"bs-component\">\n            <div class=\"jumbotron\">\n                <h1><img style=\"padding-right: 5px;\" src=\"@routes.Assets.at(\"images/clock.png\")\" /> Coming soon</h1>\n                <br />\n                Soon this website will be jam packed full of features becoming your portal for helping those in need.\n                Whether you are looking to donate time, goods, or services to local shelters and other organizations, we will help you connect with local organizations.\n            </div>\n        </div>";
  });
templates['header-template'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-2\"><img style=\"height:100px;width:100px;\" src=\"@routes.Assets.at(\"images/logo.png\")\" /></div>\n                <div class=\"col-md-10\"><h1>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h1>\n                    <p>";
  if (helper = helpers.slogan) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.slogan); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n                </div>\n            </div>\n        </div>\n";
  return buffer;
  });
templates['main_template'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "\n\n    \n\n   \n\n    \n\n    \n\n\n";
  });
templates['menu-template'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.dropdown), {hash:{},inverse:self.program(5, program5, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<li class=\"dropdown\">\n    <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " <span class=\"caret\"></span></a>\n    <ul class=\"dropdown-menu\" aria-labelledby=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n        ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.dropdown), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n</li>\n";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n        <li><a href=\"";
  if (helper = helpers.link) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.link); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></li>\n        ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<li><a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.link)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></li>\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, (depth0 && depth0.models), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
templates['user-account-template'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "        <hr>\n        <div class=\"well bs-component\">\n            <div class=\"row\">\n            <div class=\"col-lg-6 col-lg-offset-3\">\n                <form class=\"form-horizontal\">\n                    <fieldset>\n                        <legend>New Account</legend>\n                        <div class=\"form-group\">\n                            <label for=\"inputFirstName\" class=\"col-lg-2 control-label\">First Name</label>\n                            <div class=\"col-lg-10\">\n                                <input type=\"text\" class=\"form-control\" id=\"inputFirstName\" placeholder=\"First Name\" mouseev=\"true\" autocomplete=\"off\" keyev=\"true\" clickev=\"true\">\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"inputLastName\" class=\"col-lg-2 control-label\">Last Name</label>\n                            <div class=\"col-lg-10\">\n                                <input type=\"text\" class=\"form-control\" id=\"inputLastName\" placeholder=\"Last Name\" mouseev=\"true\" autocomplete=\"off\" keyev=\"true\" clickev=\"true\">\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"inputEmail\" class=\"col-lg-2 control-label\">Email</label>\n                            <div class=\"col-lg-10\">\n                                <input type=\"text\" class=\"form-control\" id=\"inputEmail\" placeholder=\"Email\" mouseev=\"true\" autocomplete=\"off\" keyev=\"true\" clickev=\"true\">\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"inputPassword\" class=\"col-lg-2 control-label\">Password</label>\n                            <div class=\"col-lg-10\">\n                                <input type=\"password\" class=\"form-control\" id=\"inputPassword\" placeholder=\"Password\" mouseev=\"true\" autocomplete=\"off\" keyev=\"true\" clickev=\"true\">\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"inputConfirmPassword\" class=\"col-lg-2 control-label\">Confirm Password</label>\n                            <div class=\"col-lg-10\">\n                                <input type=\"password\" class=\"form-control\" id=\"inputConfirmPassword\" placeholder=\"Confirm Password\" mouseev=\"true\" autocomplete=\"off\" keyev=\"true\" clickev=\"true\">\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"select\" class=\"col-lg-2 control-label\">Account Type</label>\n                            <div class=\"col-lg-10\">\n                                <select class=\"form-control\" id=\"select\">\n                                    <option>Donor</option>\n                                    <option>Recipient</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <div class=\"col-lg-10 col-lg-offset-2\">\n                                <button type=\"submit\" class=\"btn btn-primary\" id=\"createAccount\">Create Account</button>\n                            </div>\n                        </div>\n                    </fieldset>\n                </form>\n            </div>\n        </div>\n        </div>";
  });
templates['user-dropdown-template'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<span class=\"glyphicon glyphicon-user\" style=\"padding-right: 10px;\"></span>\n";
  if (helper = helpers.text) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.text); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n<span class=\"caret\"></span>\n";
  return buffer;
  });
templates['user-login-template'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <div>\n        <h2>";
  if (helper = helpers.first_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.first_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " ";
  if (helper = helpers.last_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.last_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h2>\n    </div>\n    <div class=\"col-md-12\">\n        <a href=\"#\">Account Settings</a>\n    </div>\n    <div class=\"col-md-12\" style=\"margin-bottom: 25px\">\n        <a href=\"#logout\">Logout</a>\n    </div>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\n    <div>\n        <h2>Login</h2>\n    </div>\n    <form id=\"loginform\" class=\"form-horizontal\" role=\"form\">\n\n        <div style=\"margin-bottom: 25px\" class=\"input-group\">\n            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i>\n            </span>\n            <input id=\"login-username\" type=\"text\" class=\"form-control\" name=\"username\" value=\"\" placeholder=\"Email\">\n        </div>\n\n        <div style=\"margin-bottom: 25px\" class=\"input-group\">\n            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i>\n            </span>\n            <input id=\"login-password\" type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\">\n        </div>\n\n        <div style=\"margin-top:10px\" class=\"form-group\">\n            <div class=\"col-sm-12 controls\">\n                <a id=\"btn-login\" class=\"btn btn-success\">Login</a>\n            </div>\n        </div>\n\n\n        <div class=\"form-group\">\n            <div class=\"col-md-12 control\">\n                <div style=\"border-top: 1px solid#888; padding-top:15px; font-size:85%\">\n                    Need an account? <a href=\"#register\">Sign Up Here</a>\n                </div>\n            </div>\n        </div>\n    </form>\n";
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.user), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  return buffer;
  });
return templates;
});