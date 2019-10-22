(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 110;  /* updated on 2019-10-22 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
