import { useEffect, useState } from "react";
import { fromPromise, Property } from "kefir";
import { noop } from "lodash";
import { SourceType } from "../core/source";

export function useSource<T>(source: SourceType<T>, onError?: VoidFunction, onEnd?: VoidFunction) {
  const [value, onChangeValue] = useState<T>();

  useEffect(() => {
    let _source: Property<T, void>;
    // Пришел промис - конвертируем его в поток
    if ("then" in source) {
      _source = fromPromise(source);
    } else {
      _source = source;
    }

    _source.observe(onChangeValue, onError || noop, onEnd || noop);
    return () => _source.offValue(onChangeValue);
  }, [source]);

  return value;
}
