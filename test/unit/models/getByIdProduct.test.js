const { expect } = require('chai');
const sinon = require('sinon');
const productsModel = require('../../../models/productsModel');
const connection = require('../../../models/connection');

describe('Lists a specific product by its Id', () => {
  describe('When there is no product', () => {
    const resultExec = [[]];
    const id = 7

    before(() => {
      sinon.stub(connection, 'execute').resolves(resultExec);
    })

    after(() => {
      connection.execute.restore();
    })

    it('Should return an array', async () => {
      const result = await productsModel.getById(id);
      expect(result).to.be.an('array');
    })

    it('Should be empty', async () => {
      const result = await productsModel.getById(id);
      expect(result).to.be.empty;
    })
  })
  
  describe('When there is a specific product', async () => {
    const resultExec = [
      {
        id: 1,
        name: 'Martelo do Thor',
        quantity: 10
      }
    ];

    const id = 1;

    before(() => {
      sinon.stub(connection, 'execute').resolves(resultExec);
    })

    after(() => {
      connection.execute.restore();
    })

    it('Should return an array', async () => {
      const result = await productsModel.getById(1);
      expect(result).to.be.an('array');
    })

    it('Should not be empty', async () => {
      const result = await productsModel.getById(1);
      expect(result).to.be.not.empty;
    })

    it('Should have objects inside', async () => {
      const [result] = await productsModel.getById(1);
      expect(result).to.be.an('object');
    })

    it('Should have the keys id, name and quantity', async () =>{
      const [result] = await productsModel.getById(1);
      expect(result).to.be.includes.all.keys('id', 'name', 'quantity');
    })
  })
});