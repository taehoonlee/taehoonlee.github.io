(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 372;  /* updated on 2024-08-17 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
