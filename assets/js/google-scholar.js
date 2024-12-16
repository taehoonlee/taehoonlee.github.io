(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 380;  /* updated on 2024-12-16 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
