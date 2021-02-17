const express = require('express');
const app = express();
const db = require('./models');
const port = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const apiRoutes = require('./routes/apiRoutes');
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    res.send('Hello World');
})

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
});