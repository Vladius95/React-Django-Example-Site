import { fromPromise, Property } from "kefir";
import { noop } from "lodash";

export type SourceType<T> = Property<T, void> | Promise<T>;

export class Source<T> {
  protected _source: Property<T, void>;
  protected _onChange: (value: T) => void;

  constructor(source: SourceType<T>, onChange: (value: T) => void, onError?: (error) => void, onEnd?: () => void) {
    let _source: Property<T, void>;
    // Пришел промис - конвертируем его в поток
    if ("then" in source) {
      _source = fromPromise(source);
    } else {
      _source = source;
    }

    _source.observe(onChange, onError || noop, onEnd || noop);

    this._source = _source;
    this._onChange = onChange;
  }

  release = () => this._source.offValue(this._onChange);
}
