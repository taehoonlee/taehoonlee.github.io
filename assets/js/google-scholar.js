(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 117;  /* updated on 2019-11-12 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
