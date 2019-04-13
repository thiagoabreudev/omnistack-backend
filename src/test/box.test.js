let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server')
let should = chai.should();
let expect = chai.expect;


chai.use(chaiHttp)

describe('Boxes', ()=> {
    it('it should GET all boxes', (done)=>{
        chai.request(server)
            .get('/boxes')
            .end((err, res)=>{
                res.should.have.status(200); 
                res.body.should.be.a('array');             
                done()
            })            
    })

    it('it should POST box', (done)=>{
        let box = {title: 'box-test'}
        chai.request(server)
            .post('/boxes')
            .send({
                title: 'box-test'
            })
            .end((err, res)=>{
                res.should.have.status(200);
                res.body.should.be.a('object'); 
                expect(res.body.title).to.eql('box-test')
                done();
            })
    })

})