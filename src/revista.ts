import {Observer} from './observable';
import {Observable} from './observable';
export enum MagazineEvent {'NoEvent', 'Read', 'NewID'}
/**
 * Clase Revista que implementa la interfaz observable
 */
export class Revista implements Observable {
  private observers: Observer[] = [];
  private event: MagazineEvent = MagazineEvent.NoEvent;
  constructor(private readonly id: number, private readonly name: string,
    private readonly author: string, private readonly pages: number,
    private readonly date: string) {
  }
/**
   * Muestra el evento que esta ocurriendo
   * @returns 
   */
 public getEvent() {
  return this.event;
}

  /**
   * Método que devuelve la id de la revista
   * @returns Id de la revista
   */
  public getId(): number {
    return this.id;
  }

  /**
   * Método que devuelve el nombre de la revista
   * @returns Nombre de la revista
   */
  public getName(): string {
    return this.name;
  }

  /**
   * Método que devuelve el nombre del autor
   * @returns Nombre del autor
   */
  public getAuthor(): string {
    return this.author;
  }

  /**
   * Método que devuelve las páginas de la revista
   * @returns Páginas de la revista
   */
  public getPages(): number {
    return this.pages;
  }

  /**
   * Método que devuelve la fecha de creación de la revista
   * @returns Fecha de creación de la revista
   */
  public getDate(): string {
    return this.date;
  }

  /**
   * Método que subscribe a una persona a la revista
   * @param observer Persona que se va a subscribir
   */
  public subscribe(observer: Observer): void {
    if (this.observers.includes(observer)) {
      throw new Error('EL observedor ya estaba subscrito');
    } else {
      this.observers.push(observer);
    }
  }

  /**
   * Método que desubscribe a una persona
   * @param observer Persona que se quiere desubscribir
   */
  public unsubscribe(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index === -1) {
      throw new Error('La persona no estaba subscrita');
    } else {
      this.observers.splice(index, 1);
    }
  }

  /**
   * Notifica si ha ocurrido un cambio
   */
  public notify(): void {
    this.observers.forEach((observer) => observer.update(this));
  }

  /**
   * Cambia el evento a leido
   */
  public onReadMagazine():void {
    this.event = MagazineEvent.Read;
  }

  /**
   * Cambia el evento a nueva ID
   */
  public onNewIdMagazine(): void {
    this.event = MagazineEvent.NewID;
  }
}
