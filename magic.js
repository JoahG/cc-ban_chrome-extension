var addBanner = function(){
	if(typeof(CCDATA.page)!='undefined'&&typeof(CCDATA.page.user)!='undefined'&&typeof(CCDATA.page.user._id)!='undefined'){
		action = $($(".user-banned-text")[0]).text().replace(/\s+/g, ' ').length == 1 ? "ban" : "unban"
		$(".user-details-show").append("<form action='/admin/forums/" + action + "_user?user_identifier=" + CCDATA.page.user.id + "' class='button_to' method='post'><div><input name='_method' type='hidden' value='put' class='ui-inited'><input data-confirm='Are you sure you want to " + action + " this user from the forums?' type='submit' value='" + action[0].toUpperCase() + action.substring(1,action.length) + " User' class='profile-user-present bttn ui-inited'><input name='authenticity_token' type='hidden' value='" + csrf_token + "' class='ui-inited'></div></form>");
		$("form:not(.user-details-edit, .user-avatar-editor)").css("display", "inline-block")
	}
}

var script = document.createElement("script");
script.textContent = "(" + addBanner.toString() + "())";
document.documentElement.appendChild(script);