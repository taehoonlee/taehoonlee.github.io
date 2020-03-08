(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 143;  /* updated on 2020-03-08 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
