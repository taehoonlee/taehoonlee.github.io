(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 328;  /* updated on 2023-10-17 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
