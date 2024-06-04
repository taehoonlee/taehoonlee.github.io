(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 361;  /* updated on 2024-06-04 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
