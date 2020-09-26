let classes = ["web", "mobile", "iot", "desktop"];

const hide_other_El = (arg) => {
	for (var i = 0, len = arg.length; i < len; i++) {
		arg[i].style.display = "none";
	}
};

const show_El = (arg) => {
	for (var i = 0, len = arg.length; i < len; i++) {
		arg[i].style.display = "flex";
	}
};

const __hide = (target) => {
	classes.map((cl) => {
		let hide_classes = document.getElementsByClassName(cl);
		hide_other_El(hide_classes);
	});
	let show_classes = document.getElementsByClassName(target);
	show_El(show_classes);
};

const __show = () => {
	classes.map((cl, i) => {
		let show_classes = document.getElementsByClassName(cl);
		show_El(show_classes);
	});
};

const showElements = (target) => {
	const el = target || "all";
	el != "all" ? __hide(target) : __show();
};
