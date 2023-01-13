
module.exports = { 
	extractPlatform: function (str) {
		const matchedStr = str.match(/\((.*?)\)/);
		const platform = matchedStr && matchedStr.length ? matchedStr[1] : null;
		return platform;
	},
	extractBrowser: function (str) {
		let browser = null;

		if (str.toLowerCase().includes('opr')) {
			browser = 'Opera';
		} else if (str.toLowerCase().includes('firefox')) {
			browser = 'Firefox';
		} else if (str.toLowerCase().includes('chrome')) {
			browser = 'Chrome';
		} else {
			browser = 'Safari';
		}

		return browser;
	}
};