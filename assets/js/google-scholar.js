(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 358;  /* updated on 2024-05-22 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
