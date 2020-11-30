(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 160;  /* updated on 2020-11-30 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
