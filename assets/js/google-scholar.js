(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 211;  /* updated on 2021-06-01 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
