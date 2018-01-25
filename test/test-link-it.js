const {
    app,
    runServer,
    closeServer
} = require('../server');


var chai = require('chai');
var chaiHttp = require('chai-http');


var link = require('../models/link.js');
var should = chai.should();

chai.use(chaiHttp);
describe('shopping-planner-node-capstone', function () {
    //    it('Should ', function () {});
    it('should add a link on POST', function (done) {
        chai.request(app)
            .post('/link/create')
            .send({
                'category': 'Music',
                'name': 'Nirvana',
                'url': 'https://www.youtube.com/watch?v=vabnZ9-ex7o',
                'message': '',
                'email': 'yekaterina.jalette@gmail.com'
            })
            .end(function (err, res) {
                //should.equal(err, null);
                res.should.have.status(201);
                done();
            });
    });
    it('Should show links by user', function () {
        chai.request(app)
            .get('/link/yekaterina.jalette@gmail.com')
            .then(function (res) {
                res.should.have.status(201);
                done();
            })
    });

    it('Should Delete a link', function () {
        chai.request(app)
            .delete('/delete-link/5a693445c3a4cffb405881f3')
            .then(function (res) {
                res.should.have.status(201);
                done();
            })
    });


});
