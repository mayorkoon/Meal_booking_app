import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);

const { expect } = chai;

describe('GET /', () => {
  it('should get all available menu', (done) => {
    chai.request(app)
      .get('/server/v1/menu')
      .end((err, res) => {
        const { data } = res.body;
        console.log(res.body, '<=====');
        expect(res).to.have.status(200);
        expect(res).to.be.an('object');
        expect(data).to.be.an('Array');
        done();
      });
  });
});

describe('POST /', () => {
  it('should add to an existing menu', (done) => {
    const newMenu = {
      day: 'Tuesday',
      category: 'Lunch',
      meals: [
        {
          id: 1,
          name: 'Pizza',
          size: 'Large',
          price: '600',
        },
        {
          id: 2,
          name: 'Poundo Yam',
          size: 'Medium',
          price: '700',
        },
        {
          id: 3,
          name: 'Small Chops',
          size: 'Large',
          price: '350',
        },
      ],
    };
    chai.request(app)
      .post('/server/v1/menu')
      .send(newMenu)
      .end((err, res) => {
        const { data } = res.body;
        console.log(res.body, '<=====');
        expect(res).to.have.status(200);
        expect(data).to.be.an('object');
        expect(newMenu.meals).to.be.an('Array');
        expect(newMenu.day).to.equal(data.day);
        expect(newMenu.category).to.equal(data.category);
        done();
      });
  });
});
