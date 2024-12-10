(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 379;  /* updated on 2024-12-10 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
