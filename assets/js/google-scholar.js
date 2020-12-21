(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 163;  /* updated on 2020-12-21 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
