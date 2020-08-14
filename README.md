# js-simple-etl

This is a simple etl to get, transform and load data from mssql database to a rest api


---
## :bookmark_tabs: Summary

1. [Installation](#Installation)
1. [Usage](#usage)
1. [Libraries](#libraries)
1. [Folder Structure](#folder-structure)
1. [Contributing](#contributing)
1. [License](#license)


## :exclamation: Installation

Use the package manager [npm](https://www.npmjs.com/) to install js-simple-etl dependencies.

```bash
npm install
```

You need to create a .env file with follow command:
```bash
C:\project_path> copy .env.example .env
```

## :eyeglasses: Usage

In this project, you will be able to create your own classes, queries and loaders to make your loads

You need to create the follow things using foo files with example:
- Loader
- Sql
- Service

After create, you be able to look your ETL running with the following command
```bash
C:\project_path> npm run dev
```

## :books: Libraries
---
The following libs are dependencies in project:

- [axios](https://www.npmjs.com/package/axios)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [express](https://www.npmjs.com/package/express)
- [mssql](https://www.npmjs.com/package/mssql)
- [path](https://www.npmjs.com/package/path)

The following libs are dev dependencies: 
- [eslint](https://www.npmjs.com/package/eslint)
- [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)
- [eslint-plugin-node](https://www.npmjs.com/package/eslint-plugin-node)
- [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier)
- [git-commit-msg-linter](https://www.npmjs.com/package/git-commit-msg-linter)
- [husky](https://www.npmjs.com/package/husky)
- [lint-staged](https://www.npmjs.com/package/lint-staged)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [prettier](https://www.npmjs.com/package/prettier) 


## :open_file_folder: Folder Structure

---

- The project structure look like:

```
.
│
└───src
│   └───configs
│   │   └───database
│   └───loaders
│   │   └───fooLoader
│   └───services
│   │   └───authService
│   │   └───fooService
│   │   └───requestService
│   └───sql
│       └───query.sql
│
│   .env.example
│   .eslintignore
│   .eslintrc.js
│   .gitignore
│   .huskyrc.json
│   .lintstagedrc.js
│   LICENSE
│   package.json
│   package-lock.json
│   README.md
│   server.js
```


| Directory/File           |                     Description                     |
| --------------------------- | :-----------------------------------------------: |
| src                         |Full project source                				  |
| src/configs                 |Config files	              						  |
| src/configs/database        |Database config file              				  |
| src/loaders                 |Loaders                      					  |
| src/loaders/fooLoader       |FooLoader                     					  |
| src/services                |Services                     					  |
| src/services/authService    |AuthApi to get Bearer Token     	  				  |
| src/services/fooService     |FooService to send data to rest api       		  |
| src/services/requestService |Generic request service to make rest calls   	  |
| src/sql                     |Sql Queries                    					  |
| src/sql/query.sql           |Foo query                      					  |
| .env.example        		  |Environment file example            				  |
| .eslintignore        	  	  |Eslint ignore file                				  |
| .eslintrc.js        	  	  |Eslint config file                				  |
| .gitignore        	  	  |Git ignore file        		  					  |
| .huskyrc.json        	  	  |Husky config file                 				  |
| .lintstagedrc.js        	  |Lint staged config file    		  				  |
| LICENSE        	  	  	  |LICENSE     				  						  |
| package.json        	  	  |Dependencies file                 				  |
| package-lock.json        	  |Dependencies lock file               			  |
| README.md                   |Project Documentation                 			  |
| server.js        	  	  	  |Initial js file         		  					  |


## :muscle: Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## :white_check_mark: License 
[MIT](https://choosealicense.com/licenses/mit/)
