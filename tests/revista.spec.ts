import 'mocha';
import {expect} from 'chai';
import {Revista} from '../src/revista';

describe('Prueba de la clase revista', () => {
  const revista = new Revista(32, 'LOLA', 'Cervantes', 53, '29/8/2012');
  it('Existen los diferentes metodos', () => {
    expect('getEvent' in revista).to.be.equal(true);
    expect('getId' in revista).to.be.equal(true);
    expect('getName' in revista).to.be.equal(true);
    expect('getAuthor' in revista).to.be.equal(true);
    expect('getPages' in revista).to.be.equal(true);
    expect('getDate' in revista).to.be.equal(true);
    expect('subscribe' in revista).to.be.equal(true);
    expect('unsubscribe' in revista).to.be.equal(true);
    expect('notify' in revista).to.be.equal(true);
    expect('onReadMagazine' in revista).to.be.equal(true);
    expect('onNewIdMagazine' in revista).to.be.equal(true);
  });

  it('Comprobacion de los getters', () => {
    expect(revista.getId()).to.be.equal(32);
    expect(revista.getName()).to.be.equal('LOLA');
    expect(revista.getAuthor()).to.be.equal('Cervantes');
    expect(revista.getPages()).to.be.equal(53);
    expect(revista.getDate()).to.be.equal('29/8/2012');
  });
});
