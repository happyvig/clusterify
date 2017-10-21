# clusterify
Converts a simple (single-threaded) project into a 'node-cluster'ed project

## About
- Current version is tested with Node v0.10.21 and above.
- Contains samples of a master and a worker files for quick test & understanding.

## Folder structure
- /lib/interfaces/cli/main.js 
   - Receives the master file name and worker file name via command prompt and auto triggers cluster creation.         2. /lib/interfaces/web/main.js
- /lib/common/clusterController.js
   - The main file responsible for cluster creation through worker process forking.
   - Has options to set scheduling policy.
   - Has event listeners for all life cycle methods.
   - Calls the 'start' method of the passed master file in the master process.
   - Calls the 'start' method of the passed worker file in the worker process. 
- /enums.js
   - File that contains utility methods.


## Installation

```sh
npm install clusterify
```
> Current version is tested with Node v0.10.21 and above.


## CLI 

```
clusterify --master='/path/to/master/file' --worker='/path/to/worker/file'
```
or
```
clusterify -m '/path/to/master/file' -w '/path/to/worker/file'
```

You can run clusterify -h / clusterify --help for help

## Enhancements
- Write tests
- Add code comments
- Rethink optimizations

## License
Free to use and modify. Report any issues you encountered.

## PS
Just drop me a mail anytime and share me your experience & feedbacks. 
[ just a curious person, to get in touch with people who were interested in my repo..!! :) ]
