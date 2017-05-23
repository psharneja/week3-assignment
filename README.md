## Week 3 Assignment - Boilerplate

> To get started - perform the following commands:

```sh
$ git clone https://gitlab-wd.stackroute.in/assignments/wk3-seed-boilerplate.git wk3assignment
$ cd wk3assignment
```
You need to initialize and associate your gitlab repository with this folder. Please create a blank repository on your Gitlab account and copy the Gitlab's repository URL. Within the ```wk3assignment``` folder, perform the following commands:
```sh
$ rm -rf .git/
$ git init
$ git remote add origin <PASTE YOUR REPOSITORY URL HERE>
```
Do the first commit, by performing the following commands :
```sh
$ git add .
$ git commit -m "My first commit of Week 3 Assignment"
```
If you commit fails, for instance it may show a message such as please provide information such as user.name and user.email. Please run the commands as shown on the error log and then do the git commit again. Finally, do a ```$ git push``` to commit changes on the gitlab repository.

The folders and files you see in this repositories, is how it is expected to be in projects, which are submitted for automated evaluation by Hobbes

	Project
	|
	├── test	 // Test cases, which are executed using mocha, files should end with or suffix at end with 'test.js', these test cases can run before or in parallel to running of the application/program. The test cases for most of the exercises of the assignment are available - go through this to give a better idea of how test cases are written)
	|
	├── index.js     // The main entry point for the project, it need not be index.js if `npm start` in package.json points to correct main file. Please do not delete or change this file.solutions // All |
	├── solutions    // Solutions to exercises must be written in this folder only
	├── package.json 		// Must have file, Hobbes will invoke npm commands, such as `npm start`, `npm test`, which refer to this file
	|
	├── .hobbes   			// Hobbes specific config options, such as type of evaluation schema, type of tech stack etc., Have saved a default values for convenience
	|
	├── .eslintrc.js 		// Rules for Javascript lint checks, these are common or generic JS rules, project is evaluated against these rule, if any customization is needed in the rules, you can override this file in your project repo
	|
	├── .htmlhintrc 		// Rules for HTML Lint rules, project is evaluated against these rule, if any customization is needed in the rules, you can override this file in your project repo
	|
	├── .smellsrc.js 			// ESLint based code smell rules, project is evaluated against these rule, if any customization is needed in the rules, you can override this file in your project repo
	|
	├── HINTS.md 			// Hints for the assignment exercises - not necessarily will be there
	|
	└── PROBLEM.md  		// Describe about the problem of the assignment/project, you can provide as much as information and clarification you want about the project in this file

> PS: All lint rule files are by default copied during the evaluation process, however if need to be customizing, you should copy from this repo and modify in your project repo
