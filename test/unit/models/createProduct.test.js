const { expect } = require('chai');
const sinon = require('sinon');
const productsModel = require('../../../models/productsModel');
const connection = require('../../../models/connection');

describe('Inserts a new product on the DB', () => {
  const name = 'Martelo do Thor';
  const quantity = 10;

  before(async () => {
    const execute = [{ insertId: 1 }];

    sinon.stub(connection, "execute").resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  });
  
  describe('When its successfully added', async () => {
    it('Should return an object', async () => {
      const result = await productsModel.create(name, quantity);
      expect(result).to.be.an('object');
    })
  })
})