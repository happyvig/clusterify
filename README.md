# clusterify
	
	- Converts a simple (single-threaded) project into a 'node-cluster'ed project

	- Current version is tested with Node v0.10.21 and above.

	- Contains samples of a master and a worker files for quick test & understanding.


###Description on repo contents
-------------------------------

 1. /lib/interfaces/cli/main.js 
                
                - Receives the master file name and worker file name via command prompt and auto triggers cluster creation.
        
 2. /lib/interfaces/web/main.js
 
                - work in progress

 3. /lib/common/clusterController.js
                
                - The main file responsible for cluster creation through worker process forking.
                - Has options to set scheduling policy.
                - Has event listeners for all life cycle methods.
                - Calls the 'start' method of the passed master file in the master process.
                - Calls the 'start' method of the passed worker file in the worker process. 
                
 3. enums.js
 
                - File that contains utility methods.


###Installation
---------------
```sh
npm install clusterify

```
> Current version is tested with Node v0.10.21 and above.


###CLI 
------
```
* clusterify --master='/path/to/master/file' --worker='/path/to/worker/file'

* clusterify -m '/path/to/master/file' -w '/path/to/worker/file'

```

You can run clusterify -h [OR] clusterify --help

###Todo's
---------
    - Write tests
    - Add code comments
    - Rethink optimizations

###License
----------
Free to use and modify. Report any issues you encountered.


###P.S
------
Just drop me a mail anytime and share me your experience & feedbacks. [ just a curious kid, to get in touch with people who download my repo..!! :) ]