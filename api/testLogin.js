delete TAO.require.cache[TAO.env.root_path + '/vendor/pg/node_modules/pg'];
var pg = TAO.require(TAO.env.root_path + '/vendor/pg/node_modules/pg');

delete TAO.require.cache[TAO.env.config_path + '/dbSetting.json'];
var setting =  TAO.require(TAO.env.config_path + '/dbSetting.json');
var connStr = "postgres://evergreen:Ahiuhwqceiuw168@mydbinstance1.clphgmho1uem.us-west-1.rds.amazonaws.com:5432/ebiztiedb";

setting.dev.PG_evergreen.connectionTimeoutMillis = 6000;

var client = new pg.Client(connStr);
// var client = new pg.Client(setting.dev.PG_evergreen);

client.connect(function(err) {
    if(err) {
        // TAO.res.send(err.message);
        console.log('error message is ' + err.message);
        client.end();
        return;
    }

    let str = 'SELECT * FROM eliteuser_basic;';
    client.query(str, function(err, res) {
        if(err) {
            console.log('error message is ' + err.message);
        }else {
            console.log(res);
        }
        cilent.end();
    });
});