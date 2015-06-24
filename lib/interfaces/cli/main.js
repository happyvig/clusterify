(function () {
	'use strict';

	var commandLineParser = require('yargs');
	var clusterController = require('./../../common/clusterController.js');

	var parseUserArguments = function (argv) {
		return commandLineParser
			.usage('Usage: $0 --master=[path] --worker=[path]')
			.demand(['master', 'worker'])
			.alias('master', 'm').nargs('master', 1).describe('master', 'Tasks to be done in master process')
			.alias('worker', 'w').nargs('worker', 1).describe('worker', 'Tasks to be done in worker processes')
			.example('$0 --master=foo.js --worker=bar.js', 'add tasks to master and worker processes')
			.help('h').alias('h', 'help')
			.argv;
	};

	var userArgs = parseUserArguments(process.argv);

	clusterController.createCluster(userArgs.master, userArgs.worker);
})();