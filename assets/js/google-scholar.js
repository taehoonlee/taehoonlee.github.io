(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 327;  /* updated on 2023-10-12 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
