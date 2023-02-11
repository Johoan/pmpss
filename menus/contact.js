window.$("#btn").click(function () {
	"use strict";
	window.$("#ovrly").fadeIn();
	window.$("#login").show();
	window.$("#login").animate({top: "100"});
});
window.$("#ovrly").click(function () {
	"use strict";
	window.$("#ovrly").hide();
	window.$("#login").hide();
	window.$("#login").css("top", "-310px");
});
window.$("#cross").click(function () {
	"use strict";
	window.$("#ovrly").hide();
	window.$("#login").hide();
	window.$("#login").css("top", "-310px");
});