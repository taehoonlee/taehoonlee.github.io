(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 115;  /* updated on 2019-11-10 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
