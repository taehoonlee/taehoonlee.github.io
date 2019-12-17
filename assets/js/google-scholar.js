(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 123;  /* updated on 2019-12-17 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
