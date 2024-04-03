(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 355;  /* updated on 2024-04-03 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
