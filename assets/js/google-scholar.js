(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 334;  /* updated on 2023-12-04 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
