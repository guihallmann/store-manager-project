const { expect } = require('chai');
const sinon = require('sinon');
const productsModel = require('../../../models/productsModel');
const connection = require('../../../models/connection');

describe('Lists all the products on the DB', () => {
  describe('When there are no products', () => {
    
    const resultExec = [[]];

    before(() => {
      sinon.stub(connection, 'execute').resolves(resultExec);
    })

    after(() => {
      connection.execute.restore();
    })

    it('Should return an array', async () => {
      const result = await productsModel.getAll();
      expect(result).to.be.an('array');
    })

    it('Should be empty', async () => {
      const result = await productsModel.getAll();
      expect(result).to.be.empty;
    })
  });
  
  describe('When there is products on the DB', () => {
    const resultExec = [
      {
        id: 1,
        name: 'Martelo do Thor',
        quantity: 10
      }
    ];

    before(() => {
      sinon.stub(connection, 'execute').resolves(resultExec);
    })

    after(() => {
      connection.execute.restore();
    })

    it('Should return an array', async () => {
      const result = await productsModel.getAll();
      expect(result).to.be.an('array');
    })

    it('Should be empty', async () => {
      const result = await productsModel.getAll();
      expect(result).to.be.not.empty;
    })

    it('Should have objects inside', async () => {
      const [result] = await productsModel.getAll();
      expect(result).to.be.an('object');
    })

    it('Should have the keys id, name and quantity', async () =>{
      const [result] = await productsModel.getAll();
      expect(result).to.be.includes.all.keys('id', 'name', 'quantity');
    })
  })
});