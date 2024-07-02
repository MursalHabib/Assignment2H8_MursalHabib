console.log("script loaded!");
let arrOutputs = [
	"outputName",
	"outputRole",
	"outputAvail",
	"outputAge",
	"outputLoc",
	"outputYoe",
	"outputEmail",
];
let arrInputs = [
	"inputName",
	"inputRole",
	"inputAvail",
	"inputAge",
	"inputLoc",
	"inputYoe",
	"inputEmail",
];

const showForm = () => {
	const form = document.getElementById("showForm");
	form.style.display = "block";
};

const updateData = () => {
	arrOutputs.forEach((element, index) => {
		if (document.getElementById(arrInputs[index]).value.length) {
			document.getElementById(element).innerHTML =
				document.getElementById(arrInputs[index]).value;
		}
	});
	const form = document.getElementById("showForm");
	form.style.display = "none";
};

const submitData = () => {
	updateData();
};
