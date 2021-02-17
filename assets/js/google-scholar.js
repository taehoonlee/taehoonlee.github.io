(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 195;  /* updated on 2021-02-17 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
