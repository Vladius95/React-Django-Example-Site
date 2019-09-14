import { isUndefined } from "lodash";

import * as React from "react";
import { InfiniteLoader } from "./InfiniteLoader";
import { Message } from "./Message/Message";

import "./ContentObserver.scss";

export function ContentObserver<P>(listName: string, WrappedComponent, extraClass = "") {
  return class EmptyListOrLoaderOrComponent extends React.Component<P> {
    renderContent() {
      const list = this.props[listName];
      if (isUndefined(list)) {
        return <InfiniteLoader extraClass="content-observer__loader" />;
      } else if (list.length === 0) {
        return <Message message="Nothing Found" extraClass="content-observer__empty-list" />;
      } else {
        return <WrappedComponent {...this.props} />;
      }
    }

    render() {
      return <div className={`content-observer ${extraClass}`}>{this.renderContent()}</div>;
    }
  };
}
