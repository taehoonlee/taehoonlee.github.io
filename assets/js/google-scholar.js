(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 383;  /* updated on 2025-02-01 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
