function fakeAjax(url,cb) {
	var fake_responses = {
		"file1": "The first text",
		"file2": "The middle text",
		"file3": "The last text"
	};
	var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

	console.log("Requesting: " + url);

	setTimeout(function(){
		cb(fake_responses[url]);
	},randomDelay);
}

// **************************************
// Mikkel's async/await solution

function getFile(file) {
	return new Promise( (resolve) => fakeAjax(file,resolve) );
};

let fun = async (fileNames) => {
	let promiseArray = fileNames.map(getFile);
	for(promise of promiseArray) {
		console.log(await promise);
	}
	console.log("Complete!");
};

fun(["file1", "file2", "file3"]);