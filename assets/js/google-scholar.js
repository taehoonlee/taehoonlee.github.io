(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 125;  /* updated on 2019-12-18 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
