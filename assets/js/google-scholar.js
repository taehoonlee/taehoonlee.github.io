(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 217;  /* updated on 2021-07-13 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
