var pg = require(env.site_path + '/api/inc/pg/node_modules/pg');
var setting =  require(env.config_path + '/dbSetting.json');

var client = new pg.Client(setting.dev.PG);
client.connect(function(err) {
  if(err) {
    res.send(err.message);
    return true;
  }
  client.query('SELECT * FROM pg_catalog.pg_tables WHERE schemaname != "pg_catalog" AND schemaname != "information_schema";',
      function(err, result) {
            if(err) {
              res.send(err.message);
              return true;
            }
            res.send(result.rows);
            client.end();
      });
});
/*
const { Client } = require(env.site_path + '/api/inc/pg/node_modules/pg');
const client = new Client({
  host: 'my.database-server.com',
  port: 5334,
  user: 'database-user',
  password: 'secretpassword!!',
})
client.connect((err) => {
  if (err) {
    res.send(err.message);
    // console.error('connection error', err.stack)
  } else {
    res.send('connected');
    // console.log('connected')
  }
})
*/
