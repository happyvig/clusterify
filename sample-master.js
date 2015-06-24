/* utility to track HTTP requests received by all workers so far */
var runMasterRequestTracker = function () {

	var cluster = require('cluster');

	/* Keep track of http requests */
	var numReqs = 0;
	var requestHosts = [];
	setInterval(function () {
		console.log("\nMaster-HTTP-Request-Tracker reports total no. of requests so far as ", numReqs);
		requestHosts.forEach(function (host, index) {
			console.log('Host ' + (index + 1) + ': ' + host.hostName + ' / ' + host.hostIp);
		});
	}, 10000);

	/* count requests received by every workers*/
	var messageHandler = function (msg) {
		if (msg.cmd && msg.cmd.indexOf('notifyRequest') > -1) {
			numReqs += 1;
			var splits = msg.cmd.split(',');
			requestHosts.push({hostName: splits[1], hostIp: splits[2]});
		}
	};

	Object.keys(cluster.workers).forEach(function (id) {
		cluster.workers[id].on('message', messageHandler);
	});
};

module.exports.start = runMasterRequestTracker;