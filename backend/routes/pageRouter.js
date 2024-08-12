const path = require('path')
const pageCtr = require(path.resolve('./controllers/pageCtr'))

module.exports = (app) => {
    app.get('/api/apps/all', pageCtr.all)
    app.post('/api/apps/create', pageCtr.create)
    app.get('/api/apps/find/:id', pageCtr.findpage)
    app.put('/api/apps/update/:id', pageCtr.update)
    app.delete('/api/apps/delete/:id', pageCtr.delete)
}