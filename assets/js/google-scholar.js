(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 300;  /* updated on 2023-03-29 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
