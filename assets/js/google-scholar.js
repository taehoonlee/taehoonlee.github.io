(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 153;  /* updated on 2020-05-20 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
