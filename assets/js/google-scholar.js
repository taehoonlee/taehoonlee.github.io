(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 118;  /* updated on 2019-11-28 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
