(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 166;  /* updated on 2021-01-18 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
