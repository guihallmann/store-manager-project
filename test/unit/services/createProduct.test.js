const { expect } = require('chai');
const sinon = require('sinon');
const productsModel = require('../../../models/productsModel');
const productsService = require('../../../services/productsService');

describe('Inserts a new product on the DB', () => {
  const name = 'Martelo do Thor';
  const quantity = 10;
  const id = 1;
  const resultExec = {
    id,
    name,
    quantity
  };

  before(() => {
    sinon.stub(productsModel, 'create').resolves(resultExec);
  })

  after(() => {
    productsModel.create.restore();
  })

  describe('When its successfully added', () => {
    it('Should return an object', async () => {
      const result = await productsService.create(name, quantity);
      expect(result).to.be.an('object');
    })

    it('Should have the keys id, name and quantity', async () =>{
      const result = await productsService.create(name, quantity);
      expect(result).to.be.includes.all.keys('id', 'name', 'quantity');
    })
  })
});