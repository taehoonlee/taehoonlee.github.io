(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 377;  /* updated on 2024-11-01 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
