import 'mocha';
import {expect} from 'chai';
import {Subscriber} from '../src/subscriptor';

describe('Prueba de la clase subscriptor', () => {
  // eslint-disable-next-line max-len,
  const subscriptor = new Subscriber('Adrian', '42255530F', 'Las palitos', 922432324);
  it('Existen los diferentes metodos', () => {
    expect('getName' in subscriptor).to.be.equal(true);
    expect('getDni' in subscriptor).to.be.equal(true);
    expect('getAddress' in subscriptor).to.be.equal(true);
    expect('getPhone' in subscriptor).to.be.equal(true);
  });

  it('Comprobacion de los getters', () => {
    expect(subscriptor.getName()).to.be.equal('Adrian');
    expect(subscriptor.getDni()).to.be.equal('42255530F');
    expect(subscriptor.getAddress()).to.be.equal('Las palitos');
    expect(subscriptor.getPhone()).to.be.equal(922432324);
  });
});
