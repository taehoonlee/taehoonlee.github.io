(function(exports) {
	exports.googleScholar = function (repo, callback) {
		var count = 112;  /* updated on 2019-11-01 */
		if (typeof(callback) == "function") {
			callback(count);
		} else {
			return count;
		}
	}
})(typeof exports !== 'undefined' ? exports : window);
