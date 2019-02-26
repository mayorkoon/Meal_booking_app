import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);
// let should = chai.should();
const { expect } = chai;

describe('GET /', () => {
  it('should get all the orders', (done) => {
    chai.request(app)
      .get('/server/v1/orders')
      .end((err, res) => {
        const { data } = res.body;
        expect(res).to.have.status(200);
        expect(res).to.be.an('object');
        expect(data).to.be.an('Array');
        expect(data.length).to.equal(5);
        done();
      });
  });
});

describe('POST /', () => {
  it('should add to the existing menu', (done) => {
    const newOrder = {
      orderId: 15, customerName: 'Agboola Olaide', mealName: 'Chicken Pizza', quantity: '2', price: '3000', status: 'Completed',
    };
    chai.request(app)
      .post('/server/v1/orders')
      .send(newOrder)
      .end((err, res) => {
        const { data } = res.body;
        expect(res).to.have.status(200);
        expect(newOrder.orderId).to.equal(data.orderId);
        expect(newOrder.customerName).to.equal(data.customerName);
        expect(newOrder.mealName).to.equal(data.mealName);
        expect(newOrder.price).to.equal(data.price);
        expect(newOrder.quantity).to.equal(data.quantity);
        expect(newOrder.status).to.equal(data.status);
        done();
      });
  });
});

describe('PUT /:id', () => {
  it('should update an existing order', (done) => {
    const updateOrder = {
      orderId: 15, customerName: 'Oyawale Deborah', mealName: 'Chicken Wings', quantity: '1', price: '500', status: 'Completed',
    };
    chai.request(app)
      .put('/server/v1/orders/15')
      .send(updateOrder)
      .end((err, res) => {
        const { data } = res.body;
        expect(res).to.have.status(200);
        expect(updateOrder.orderId).to.equal(data.orderId);
        expect(updateOrder.customerName).to.equal(data.customerName);
        expect(updateOrder.mealName).to.equal(data.mealName);
        expect(updateOrder.price).to.equal(data.price);
        expect(updateOrder.quantity).to.equal(data.quantity);
        expect(updateOrder.status).to.equal(data.status);
        done();
      });
  });
});
