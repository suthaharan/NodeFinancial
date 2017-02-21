 /**
 * Connections
 * (sails.config.connections)
 *
 * `Connections` are like "saved settings" for your adapters.  What's the difference between
 * a connection and an adapter, you might ask?  An adapter (e.g. `sails-mysql`) is generic--
 * it needs some additional information to work (e.g. your database host, password, user, etc.)
 * A `connection` is that additional information.
 *
 * Each model must have a `connection` property (a string) which is references the name of one
 * of these connections.  If it doesn't, the default `connection` configured in `config/models.js`
 * will be applied.  Of course, a connection can (and usually is) shared by multiple models.
 * .
 * Note: If you're using version control, you should put your passwords/api keys
 * in `config/local.js`, environment variables, or use another strategy.
 * (this is to prevent you inadvertently sensitive credentials up to your repository.)
 *
 * For more information on configuration, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.connections.html
 */

module.exports.connections = {

  /***************************************************************************
  *                                                                          *
  * Local disk storage for DEVELOPMENT ONLY                                  *
  *                                                                          *
  * Installed by default.                                                    *
  *                                                                          *
  ***************************************************************************/
  localDiskDb: {
    adapter: 'sails-disk'
  },

  /***************************************************************************
  *                                                                          *
  * MySQL is the world's most popular relational database.                   *
  * http://en.wikipedia.org/wiki/MySQL                                       *
  *                                                                          *
  * Run: npm install sails-mysql                                             *
  *                                                                          *
  ***************************************************************************/
  nfMysqlServer: {
    adapter: 'sails-mysql',
    host: 'localhost',
    user: 'root', //optional
    password: 'root', //optional
    database: 'nodefinancial' //optional
  },

  /***************************************************************************
  *                                                                          *
  * MongoDB is the leading NoSQL database.                                   *
  * http://en.wikipedia.org/wiki/MongoDB                                     *
  *                                                                          *
  * Run: npm install sails-mongo                                             *
  *                                                                          *
  ***************************************************************************/
  // someMongodbServer: {
  //   adapter: 'sails-mongo',
  //   host: 'localhost',
  //   port: 27017,
  //   user: 'username', //optional
  //   password: 'password', //optional
  //   database: 'your_mongo_db_name_here' //optional
  // },

  /***************************************************************************
  *                                                                          *
  * PostgreSQL is another officially supported relational database.          *
  * http://en.wikipedia.org/wiki/PostgreSQL                                  *
  *                                                                          *
  * Run: npm install sails-postgresql                                        *
  *                                                                          *
  *                                                                          *
  ***************************************************************************/
  // somePostgresqlServer: {
  //   adapter: 'sails-postgresql',
  //   host: 'YOUR_POSTGRES_SERVER_HOSTNAME_OR_IP_ADDRESS',
  //   user: 'YOUR_POSTGRES_USER', // optional
  //   password: 'YOUR_POSTGRES_PASSWORD', // optional
  //   database: 'YOUR_POSTGRES_DB' //optional
  // }


  /***************************************************************************
  *                                                                          *
  * More adapters: https://github.com/balderdashy/sails                      *
  *                                                                          *
  ***************************************************************************/
  firebase: {
    adapter: 'sails-firebase',
 
    credential: 
    {
      "type": "service_account",
      "project_id": "budget-9d799",
      "private_key_id": "a2fe3bcd5a19f024a82ccb9c81fd7d4c970dc1bb",
      "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDgX6AqvlfzDzss\nsx+UAfo+MuMWgIqO2GcixnrFvBrKEF8Bwl08UfX58TqOOSc42nu9BA2AlcnjRhB+\ntEu2JYuuGVVm9ay4766GlC0E7n6K3RJzgDuSJ+Sn0Rjvk0NbS1SjMqjoQecYx0NH\nZaCHvDJZhf2oQvGA0pZZLXSepUmZRhNkE37EkL2UfMTRTqURoTDYXnr97MCdoBQm\ntKLeKpagAXC3e6uUqaWJYt2FqApRGPYMNH/O9djzXVLuYvmpRrB/oSgR3VlUkQK9\nkdbEZnZ8gvNSHkN4f/YZsTYJJ/fClk1ygfpsjUX5FZjzh16Dv42l/z7ysIgr4y+I\nnUfDNLpHAgMBAAECggEAd4kaiIsdygVMTlUjtrOTAT4VE7DpoI6T68f4Mo4za4Fr\nTEGjcHZt6Hnm60xxo+1qTNny45VpmGaEdSxSxbidAOTIRfEO0vwGa/ZXQbBZxFtg\n8B3aHtSYEfvpIAHBucqZTdS4ffxWRTIrmsb+zjGqVV14NQNtLGeE5/+6iKagXkIi\nwJFV6jf0gwFzvOBRzQavQvh2zPtphEFh9UdWvegOgshDhQ1kQVQ1qB/QDAnlf9CE\nGzl3POmFBjHYh2s8xrcYjBGwR3dPB0e5XMB2odkOSZiaW5b0cWuoBblI32KZTE4x\nAHV8uW09uABn7lJzq7plYWyAIBwYXfaI7XnG1eg6wQKBgQDyzh+7+SHhquhq4cB/\nsR3vDqv/H5fDFrfnW1ULLuonxqjDuK1bMlQpo5BKgcQy0RUz1QCITkYbURq2qEaK\n6LJyk2iQUetQad510ySuiD5V73cduXFm7UtsLaZeHBkf9qVzO1mTTYu9ySMI3wEf\nQGZDeAPDeJXuksWmSxwXoq3EYQKBgQDskRVB+RsIf8j2ARfcFxfJ1H33PCjCbsj7\nkbnwO4I+KGNTu2y0+aK0pyx4yDUKcC9A0h5bEdlZ0RsbbrInC3SQuQx1VtIomg24\nZhzcUPPt0qDrCpWW1baVt3JvKQBwDjoIIa+VUF2qfgxMiBcMdSt8QlZNCdGRoLCt\nZQx89l3/pwKBgQCvP0L8Y3am8LpL2qEcCPR4BPjzbRQWhSE7ZVpedgAfsW1Bxtuo\nxQyl+R4+CKdZnjtVa9m0h/pl4QYM7CvuOsIBnI+OCvJy2dbs5/bD2iZT1ED/PUey\naHdVnyVDK7ier2D/aMjgXsoLs08MKhkfO1YUQF1HCpP83Aa4XeHq1UniQQKBgHCt\n6mIyNR4nP6Ftg9/hYANSo21PylpSSokJMHes4KyasDUB4RWSkl1aA2TEd/8w0FEf\nxDW8mrqdTzwRzemrGyqT+csqP4/3UPG0Mar/JDDzUpKhx/7AbOeDKY6pCPxWym11\nHh0Q2oyK3XDWoaPda4kUT+cB9kBXOdBdgUVEVCGhAoGANA+IUy1xkYmPGKJUgf73\nnsQMCR6iERCe5/pwOx2cqyscp1NW3tcAL7ZeBF01acwKun/MrQGz6UG6Dno4fXt3\nm4PynqD/IxT4SBHrQpscDvMijIJs5vvhRfuSH2MpjzekcWZ1M2/qEj1RpumSqB5R\nZo/TicU50bUWUEc2HEpLrNQ=\n-----END PRIVATE KEY-----\n",
      "client_email": "firebase-adminsdk-k0cvu@budget-9d799.iam.gserviceaccount.com",
      "client_id": "114178698541978719619",
      "auth_uri": "https://accounts.google.com/o/oauth2/auth",
      "token_uri": "https://accounts.google.com/o/oauth2/token",
      "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
      "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-k0cvu%40budget-9d799.iam.gserviceaccount.com"
    },
 
    databaseURL: "https://budget-9d799.firebaseio.com/",
  },

  firebaseprod: {
    adapter: 'sails-firebase',
 
    credential: 
    {
      "type": "service_account",
      "project_id": "budget-9d799",
      "private_key_id": "a2fe3bcd5a19f024a82ccb9c81fd7d4c970dc1bb",
      "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDgX6AqvlfzDzss\nsx+UAfo+MuMWgIqO2GcixnrFvBrKEF8Bwl08UfX58TqOOSc42nu9BA2AlcnjRhB+\ntEu2JYuuGVVm9ay4766GlC0E7n6K3RJzgDuSJ+Sn0Rjvk0NbS1SjMqjoQecYx0NH\nZaCHvDJZhf2oQvGA0pZZLXSepUmZRhNkE37EkL2UfMTRTqURoTDYXnr97MCdoBQm\ntKLeKpagAXC3e6uUqaWJYt2FqApRGPYMNH/O9djzXVLuYvmpRrB/oSgR3VlUkQK9\nkdbEZnZ8gvNSHkN4f/YZsTYJJ/fClk1ygfpsjUX5FZjzh16Dv42l/z7ysIgr4y+I\nnUfDNLpHAgMBAAECggEAd4kaiIsdygVMTlUjtrOTAT4VE7DpoI6T68f4Mo4za4Fr\nTEGjcHZt6Hnm60xxo+1qTNny45VpmGaEdSxSxbidAOTIRfEO0vwGa/ZXQbBZxFtg\n8B3aHtSYEfvpIAHBucqZTdS4ffxWRTIrmsb+zjGqVV14NQNtLGeE5/+6iKagXkIi\nwJFV6jf0gwFzvOBRzQavQvh2zPtphEFh9UdWvegOgshDhQ1kQVQ1qB/QDAnlf9CE\nGzl3POmFBjHYh2s8xrcYjBGwR3dPB0e5XMB2odkOSZiaW5b0cWuoBblI32KZTE4x\nAHV8uW09uABn7lJzq7plYWyAIBwYXfaI7XnG1eg6wQKBgQDyzh+7+SHhquhq4cB/\nsR3vDqv/H5fDFrfnW1ULLuonxqjDuK1bMlQpo5BKgcQy0RUz1QCITkYbURq2qEaK\n6LJyk2iQUetQad510ySuiD5V73cduXFm7UtsLaZeHBkf9qVzO1mTTYu9ySMI3wEf\nQGZDeAPDeJXuksWmSxwXoq3EYQKBgQDskRVB+RsIf8j2ARfcFxfJ1H33PCjCbsj7\nkbnwO4I+KGNTu2y0+aK0pyx4yDUKcC9A0h5bEdlZ0RsbbrInC3SQuQx1VtIomg24\nZhzcUPPt0qDrCpWW1baVt3JvKQBwDjoIIa+VUF2qfgxMiBcMdSt8QlZNCdGRoLCt\nZQx89l3/pwKBgQCvP0L8Y3am8LpL2qEcCPR4BPjzbRQWhSE7ZVpedgAfsW1Bxtuo\nxQyl+R4+CKdZnjtVa9m0h/pl4QYM7CvuOsIBnI+OCvJy2dbs5/bD2iZT1ED/PUey\naHdVnyVDK7ier2D/aMjgXsoLs08MKhkfO1YUQF1HCpP83Aa4XeHq1UniQQKBgHCt\n6mIyNR4nP6Ftg9/hYANSo21PylpSSokJMHes4KyasDUB4RWSkl1aA2TEd/8w0FEf\nxDW8mrqdTzwRzemrGyqT+csqP4/3UPG0Mar/JDDzUpKhx/7AbOeDKY6pCPxWym11\nHh0Q2oyK3XDWoaPda4kUT+cB9kBXOdBdgUVEVCGhAoGANA+IUy1xkYmPGKJUgf73\nnsQMCR6iERCe5/pwOx2cqyscp1NW3tcAL7ZeBF01acwKun/MrQGz6UG6Dno4fXt3\nm4PynqD/IxT4SBHrQpscDvMijIJs5vvhRfuSH2MpjzekcWZ1M2/qEj1RpumSqB5R\nZo/TicU50bUWUEc2HEpLrNQ=\n-----END PRIVATE KEY-----\n",
      "client_email": "firebase-adminsdk-k0cvu@budget-9d799.iam.gserviceaccount.com",
      "client_id": "114178698541978719619",
      "auth_uri": "https://accounts.google.com/o/oauth2/auth",
      "token_uri": "https://accounts.google.com/o/oauth2/token",
      "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
      "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-k0cvu%40budget-9d799.iam.gserviceaccount.com"
    },
 
    databaseURL: "https://budget-9d799.firebaseio.com/",
  }
};
