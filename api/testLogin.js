var user = TAO.req.body.user;
var pass = TAO.req.body.pass;
var passwordHash = require('PasswordHash');

delete TAO.require.cache[TAO.env.root_path + '/vendor/pg/node_modules/pg'];
var pg = TAO.require(TAO.env.root_path + '/vendor/pg/node_modules/pg');

delete TAO.require.cache[TAO.env.config_path + '/dbSetting.json'];
var setting =  TAO.require(TAO.env.config_path + '/dbSetting.json');


setting.prod.PG.connectionTimeoutMillis = 6000;
var client = new pg.Client(setting.prod.PG);
var q_data = {};
var q_result = {};
client.connect(function(err) {
    if(err) {
        TAO.res.send(err.message);
        return true;
    }
    let sqlStr = "SELECT * FROM eliteuser_basic where email='" + user + "';";
    q_result.str = sqlStr;
    client.query(sqlStr,
        function(err, result) {
            if(err) {
                q_data.data  = ["error", err.message];
            } else {
                q_data.data = result.rows;
            }
            client.end();
            setTimeout(
                function() {
                    // q_result.token = "";
                    // if(passwordHash.verify(pass, q_data.data[0].passWordHash)) {
                    //     q_result.token = '123456789';
                    // }
                    TAO.res.send(q_data);
                    // TAO.res.send(q_result);
                }, Math.floor(Math.random() * 3 + 3) * 500
            );
        });
});
// var token = "";
// if(passwordHash.verify(pass, q_result.data[0].passWordHash)) {
//    token = '123456789';
// }
// setTimeout(
//     function() {
//         TAO.res.send(token);
//     }, Math.floor(Math.random() * 3 + 3) * 500
// );
