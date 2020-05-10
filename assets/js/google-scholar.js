(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 150;  /* updated on 2020-05-10 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
