(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 309;  /* updated on 2023-07-03 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
