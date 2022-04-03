(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 258;  /* updated on 2022-04-03 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
