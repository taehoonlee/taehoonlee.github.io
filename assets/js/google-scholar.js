(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 391;  /* updated on 2025-08-14 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
