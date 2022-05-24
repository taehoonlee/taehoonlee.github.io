(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 266;  /* updated on 2022-05-24 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
