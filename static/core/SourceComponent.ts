import {Component} from 'react';
import {Source, SourceType} from './source';

export class SourceComponent<Props = {}, State = {}> extends Component<Props, State> {
  protected _sources: Source<any>[] = [];

  constructor(props: Readonly<Props>) {
    super(props);
  }

  componentWillUnmount() {
    this._sources.map(s => s.release());
  }

  protected _addSource = <T>(source: SourceType<T>, onChange: (value: T) => void) => {
    this._sources.push(new Source(source, onChange, this._onError, this._onEnd));
  }

  protected _onError = error => {
    console.error(`Error on source in ${Object.prototype.toString.call(this).match(/^\[object\s(.*)\]$/)[1]}`, error);
  }

  protected _onEnd = () => {}
}