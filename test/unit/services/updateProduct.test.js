const { expect } = require('chai');
const sinon = require('sinon');
const productsModel = require('../../../models/productsModel');
const productsService = require('../../../services/productsService');

describe('Updates a product on the DB', () => {
  const name = 'Martelo do Thor';
  const quantity = 10;
  const id = 1;
  const resultExec = {
    id,
    name,
    quantity
  };

  before(() => {
    sinon.stub(productsModel, 'update').resolves(resultExec);
  })

  after(() => {
    productsModel.update.restore();
  })

  describe('When its successfully updated', () => {
    it('Should return an object', async () => {
      const result = await productsService.update(id, name, quantity);
      expect(result).to.be.an('object');
    })

    it('Should have the keys id, name and quantity', async () =>{
      const result = await productsService.update(name, quantity);
      expect(result).to.be.includes.all.keys('id', 'name', 'quantity');
    })
  })
});