(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 362;  /* updated on 2024-06-26 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
