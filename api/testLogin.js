delete TAO.require.cache[TAO.env.root_path + '/vendor/pg/node_modules/pg'];
var pg = TAO.require(TAO.env.root_path + '/vendor/pg/node_modules/pg');

delete TAO.require.cache[TAO.env.config_path + '/dbSetting.json'];
var setting =  TAO.require(TAO.env.config_path + '/dbSetting.json');

setting.dev.PG_evergreen.connectionTimeoutMillis = 6000;

var client = new pg.Client(setting.dev.PG_evergreen);

client.connect(function(err) {
    if(err) {
        // TAO.res.send(err.message);
        console.log('error message is ' + err.message);
        client.end();
        return;
    }

    let str = 'SELECT * FROM elites_basic;';
    client.query(str, function(err, res) {
        if(err) {
            console.log('error message is ' + err.message);
        }else {
            console.log(res.rows[0].now);
        }
        cilent.end();
    });
});