import React from 'react';

import './CommonButton.scss';

interface CommonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  extraClass?: string;
}

export const CommonButton: React.SFC<CommonButtonProps> = ({
  extraClass = '', 
  ...buttonProps
}) => {
  return <button {...buttonProps} className={`common-button ${extraClass}`} />;
}
