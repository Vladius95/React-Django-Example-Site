import { Property, stream, Emitter } from "kefir";
import { loadResource } from "../utils/resources";

export class ExternalEmitter<T, S> {
  _emitter: Emitter<T, S>;
  private _value: T;

  bind(e: Emitter<T, S>, value: T) {
    this._emitter = e;
    this._value = value;
    this.set(value);
  }

  set(value: T) {
    this._value = value;
    this._emitter.emit(value);
  }

  get(): T {
    return this._value;
  }
}

/**
 * Возвращает json-ответ сервера в виде потока и эмиттера к нему
 * @param query запрос к api
 */
export function propertyFromAPI<T>(query: string): [Property<T, void>, ExternalEmitter<T, void>] {
  const e: ExternalEmitter<T, void> = new ExternalEmitter();
  const _stream = stream<T, void>(emitter => {
    loadResource(query).then(data => {
      e.bind(emitter, JSON.parse(data));
    });
  });

  const property = _stream.toProperty();
  return [property, e];
}

export function propertyFromValue<T>(value: T): [Property<T, void>, ExternalEmitter<T, void>] {
  const e: ExternalEmitter<T, void> = new ExternalEmitter();
  const _stream = stream<T, void>(emitter => {
    e.bind(emitter, value);
  });

  const property = _stream.toProperty();
  return [property, e];
}
