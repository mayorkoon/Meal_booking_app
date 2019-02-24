import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index.js';

chai.use(chaiHttp);
let should = chai.should();
let expect = chai.expect;

describe('GET /', () => {
  it('should return all meals', (done) => {
    chai.request(app)
      .get('/server/v1/meals')
      .end((err, res) => {
        const { data } = res.body;
        expect(res).to.have.status(200);
        expect(res).to.be.an('object');
        expect(data).to.be.an('Array');
        expect(data.length).to.equal(4);
        done();
      });
  });
})

describe('GET /:id', () => {
  it('should return specific meal', (done) => {
    chai.request(app)
      .get('/server/v1/meals/2')
      .end((err, res) => {
        const data = res.body.data;
        expect(data.name).to.equal('Jollof Rice');
        expect(data.size).to.equal('Large');
        expect(data.price).to.equal('700');
        done();
      });
  });
});

describe('POST /', () => {
    it('should add a new meal', (done) => {
        const newpost = {id: 5, name: 'Yam and Egg',size: 'small',price: '400'};
        chai.request(app)
        .post('/server/v1/meals')
        .send(newpost)
        .end((err, res) => {
            const data = res.body.data;
            expect(newpost.id).to.equal(data.id);
            expect(newpost.name).to.equal(data.name);
            expect(newpost.size).to.equal(data.size);
            expect(newpost.price).to.equal(data.price);
            done();
        });
    })
})
