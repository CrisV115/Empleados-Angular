const app = require ('./app');
require('./database');
app.listen(app.get('port'));
console.log('Servidor sobre el puerto', app.get('port'));
