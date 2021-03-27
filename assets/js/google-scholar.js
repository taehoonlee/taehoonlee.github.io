(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 205;  /* updated on 2021-03-27 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
