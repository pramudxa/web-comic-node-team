class Mysql {

  constructor(user, password) {
    this.host = "localhost";
    this.user = user;
    this.password = password;
    this.database = "wComic";
  }

  makeConnection(){
    // ========================== //
      const c = this;
      const mysql = require('mysql');
      const con = mysql.createConnection({
        host : c.host,
        user : c.user,
        password : c.password,
        database: c.database
      });
      return Promise.resolve(con);
    // ==============================//
  }

  async executeQuery(query){
    return await new Promise(async (resolve, reject) => {
      await this.makeConnection()
        .then(con => {
          con.connect( (err) => {
            if(err) reject(err);
            con.query( query, (err, result, field) => {
              if(err) reject(err);
              resolve(result);
            });
          });
        })
    });
  }

}

module.exports = Mysql;
