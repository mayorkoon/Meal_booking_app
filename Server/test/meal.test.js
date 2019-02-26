import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);
// let should = chai.should();
const { expect } = chai;

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
});

describe('GET /:id', () => {
  it('should return specific meal', (done) => {
    chai.request(app)
      .get('/server/v1/meals/2')
      .end((err, res) => {
        const { data } = res.body;
        expect(data.name).to.equal('Jollof Rice');
        expect(data.size).to.equal('Large');
        expect(data.price).to.equal('700');
        done();
      });
  });
});

describe('POST /', () => {
  it('should add a new meal', (done) => {
    const newMeal = {
      id: 5, name: 'Yam and Egg', size: 'small', price: '400',
    };
    chai.request(app)
      .post('/server/v1/meals')
      .send(newMeal)
      .end((err, res) => {
        const { data } = res.body;
        expect(res).to.have.status(200);
        expect(newMeal.id).to.equal(data.id);
        expect(newMeal.name).to.equal(data.name);
        expect(newMeal.size).to.equal(data.size);
        expect(newMeal.price).to.equal(data.price);
        done();
      });
  });
});

describe('PUT /:id', () => {
  it('should Update an existing meal', (done) => {
    const newUpdate = {
      id: 1, name: 'Bread and Beans', size: 'small', price: '700',
    };
    chai.request(app)
      .put('/server/v1/meals/1')
      .send(newUpdate)
      .end((err, res) => {
        const { data } = res.body;
        expect(res).to.have.status(200);
        expect(newUpdate.id).to.equal(data.id);
        expect(newUpdate.name).to.equal(data.name);
        expect(newUpdate.size).to.equal(data.size);
        expect(newUpdate.price).to.equal(data.price);
        done();
      });
  });
});
