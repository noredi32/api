const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');

app.use(helmet());
app.use(cors());

// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', require('./routes'));
/*app.listen(3001, () => {
    console.log(`Express on port 3001`);
});
*/

app.set('port', (processs.env.PORT || 3000));

//For avoidong Heroku $PORT error
app.listen('/', function(request, response){
    var result = 'App is running'
    response.send(result);
}) .listen(app.listen('port'), function() {
    console.log('App is running, server is listening on port', app.listen('port'));
});

