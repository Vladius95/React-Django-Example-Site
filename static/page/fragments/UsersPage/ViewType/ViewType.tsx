import * as React from "react";
import * as cn from "classnames";

import "./ViewType.scss";
import { CommonButton } from "static/page/components/buttons/CommonButton";

const List = require("./icons/list.svg");
const Grid = require("./icons/grid.svg");

export enum ViewTypes {
  list,
  grid
}

export interface ViewTypeProps {
  selected: ViewTypes;
  onSelect(type: ViewTypes): void;
}

function areEqualViewTypeProps(prevProps: ViewTypeProps, nextProps: ViewTypeProps) {
  return false;
}

export const ViewType: React.FC<ViewTypeProps> = React.memo(({ selected, onSelect }) => {
  return (
    <ul className="view-type">
      <li className="view-type__item">
        <CommonButton onClick={() => onSelect(ViewTypes.list)}>
          <img
            src={List}
            alt="List"
            className={cn("view-type__image view-type__list", {
              "view-type__image--selected": selected == ViewTypes.list
            })}
          />
        </CommonButton>
      </li>
      <li className="view-type__item">
        <CommonButton onClick={() => onSelect(ViewTypes.grid)}>
          <img
            src={Grid}
            alt="Grid"
            className={cn("view-type__image view-type__grid", {
              "view-type__image--selected": selected == ViewTypes.grid
            })}
          />
        </CommonButton>
      </li>
    </ul>
  );
}, areEqualViewTypeProps);

ViewType.displayName = "ViewType";
