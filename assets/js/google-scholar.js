(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 340;  /* updated on 2024-02-02 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
