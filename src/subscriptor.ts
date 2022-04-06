import {Observable, Observer} from './observable';
import {Revista} from './revista';
import {MagazineEvent} from './revista';
/**
 * Clase Subcirber que implementa a la interfaz observer
 */
export class Subscriber implements Observer {
  constructor(private readonly name: string, private readonly DNI: string,
    private readonly address: string, private readonly phone: number) {}

  /**
   * Método que devuelve el nombre del subscriptor
   * @returns Nombre del subscriptor
   */
  public getName(): string {
    return this.name;
  }

  /**
   * Método que devuelve el dni del subscriptor
   * @returns Dni del subscriptor
   */
  public getDni(): string {
    return this.DNI;
  }

  /**
   * Método que devuelve la dirección del subscriptor
   * @returns Dirección del subscriptor
   */
  public getAddress(): string {
    return this.address;
  }

  /**
   * Método que devuelve el número de teléfono del subscriptor
   * @returns Teléfono del subscriptor
   */
  public getPhone(): number {
    return this.phone;
  }

  /**
   * Método que actualiza el evento y muestra por pantalla lo ocurrido
   * @param observable La revista que se le pasa por parametro
   */
  public update(observable: Observable): void {
    if (observable instanceof Revista) {
      switch (observable.getEvent()) {
        case MagazineEvent.Read:
          console.log('El subscriptor ' + this.getName() +
           'ha leido la revista');
          break;
        case MagazineEvent.NewID:
          console.log('La editorial ha sacado una nueva revista');
          break;
      }
    }
  }
}
