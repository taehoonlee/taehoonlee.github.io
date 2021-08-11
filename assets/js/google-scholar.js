(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 222;  /* updated on 2021-08-11 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
