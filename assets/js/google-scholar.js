(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 149;  /* updated on 2020-04-28 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
