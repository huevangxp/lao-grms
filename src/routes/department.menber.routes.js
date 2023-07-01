const controller = require('../controllers/department.menber.controller');

module.exports = (app) => {
    app.post('/department-menber', controller.create);
    app.get('/department-menber', controller.selectAll);
    app.get('/department-menber/:id', controller.selectById);
    app.delete('/department-menber/:id', controller.delete);
    app.put('/department-menber/:id', controller.update);
}