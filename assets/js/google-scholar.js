(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 326;  /* updated on 2023-10-05 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
