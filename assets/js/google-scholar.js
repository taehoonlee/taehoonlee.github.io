(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 292;  /* updated on 2023-01-10 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
