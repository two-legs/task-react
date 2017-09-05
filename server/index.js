const express = require('express');

const app = express();

require('./static')(app);

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
  console.log(`Server started on http://localhost:${app.get('port')}`);
});