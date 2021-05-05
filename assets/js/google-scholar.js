(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 209;  /* updated on 2021-05-05 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
