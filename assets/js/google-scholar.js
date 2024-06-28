(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 368;  /* updated on 2024-06-28 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
