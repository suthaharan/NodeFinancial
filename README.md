# nodefinancial

a [Sails](http://sailsjs.org) application

# Installing sails with --linker
$ sails new nodefinancial --linker (this is not needed after 0.10 version)


# MySQL 
- Connect to MySQL or start the MAMP server on the local instance
- Insert/Update/Delete/Select - Object rights
- Create/Alter/Index/Drop - DDL rights
- Create temporary table/Lock tables - Other rights
- Install MySQL as a dependency for the application. $ npm install --save sails-mysql
- Open config/connections.js where you will alter the database settings -> This is Sails DB middleware
- Edit the config/models.js which tells which adapter to use. Here under "migrate" make sure to set "alter". Make sure to set it to "safe" when in production mode.

# Firebase
- https://console.cloud.google.com/apis/credentials
- Create credentials for firebase admin
- Install Firebase driver : https://www.npmjs.com/package/sails-firebase
- $ npm install sails-firebase --save


# Layout integration

$ sails lift

- Routing takes place under config/routes.js
- Look at Views folder and create a static folder for holding static pages. views/static/index.ejs
- Change default route in config/routes.js to 'static/index'


# User sign up page, login
$ sails generate api user


# Environment based sails start

To use the env/development.js connection settings
$ sails lift NODE_ENV=development 

To use the production tasks taks/register/prod.js
$ sails lift --prod

$ sails www

Runs the build task (tasks/register/build.js) that compiles all the assets to www subfolder instead of .tmp/public using relative paths in references. This allows serving static content with Apache or Nginx instead of relying on 'www middleware'.

$ sails www --prod (production)

Runs the buildProd task (tasks/register/buildProd.js) that does the same as build task but also optimizes assets.

You may run other tasks by specifying setting NODE_ENV and creating a task list in tasks/register/ with the same name. For example, if NODE_ENV is QA, sails will run tasks/register/QA.js if it exists.


# sailsjs connect.session memorystore is not designed for production environment

All what is needed is to replace memory adapter in config/session.js with another adapter, Redis/Mongo. It allows multiple sailsjs servers to effectively manage sessions. You can also set the cookie life time in this. 
