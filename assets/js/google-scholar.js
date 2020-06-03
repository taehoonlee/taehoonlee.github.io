(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 154;  /* updated on 2020-06-03 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
