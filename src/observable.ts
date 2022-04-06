/**
 * Interfaz que Observable
 */
export interface Observable {
  subscribe(observer: Observer): void;
  unsubscribe(observer: Observer): void;
  notify(): void;
}
/**
 * Interfaz Observer
 */
export interface Observer {
  update(observable: Observable): void;
}
