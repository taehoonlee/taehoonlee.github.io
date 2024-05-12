(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 357;  /* updated on 2024-05-12 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
