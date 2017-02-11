# nodefinancial

a [Sails](http://sailsjs.org) application

# MySQL 
- Connect to MySQL or start the MAMP server on the local instance
- Insert/Update/Delete/Select - Object rights
- Create/Alter/Index/Drop - DDL rights
- Create temporary table/Lock tables - Other rights
- Install MySQL as a dependency for the application. $ npm install --save sails-mysql
- Open config/connections.js where you will alter the database settings -> This is Sails DB middleware
- Edit the config/models.js which tells which adapter to use. Here under "migrate" make sure to set "alter". Make sure to set it to "safe" when in production mode.

