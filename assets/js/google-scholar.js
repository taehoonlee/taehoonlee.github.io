(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 152;  /* updated on 2020-05-12 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
