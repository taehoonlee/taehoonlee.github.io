(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 374;  /* updated on 2024-09-23 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
