const controller = require('../controllers/ministry.controller');
const verify = require("../middleware/token");

module.exports = (app) => {
    app.post('/ministry',verify, controller.create);
    app.get('/ministry', controller.selectAll);
    app.get('/ministry/:id', controller.selectById);
    app.delete('/ministry/:id', controller.delete);
    app.put('/ministry/:id', controller.update);
}