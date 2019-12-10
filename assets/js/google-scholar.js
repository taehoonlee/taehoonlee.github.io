(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 122;  /* updated on 2019-12-11 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
