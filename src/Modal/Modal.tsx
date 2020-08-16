import React from 'react';
import { H4 } from '../Typography';

interface ModalProps {
  children: React.ReactNode;
  className?: string;
  wrapperClassName?: string;
  collapsed: boolean;
  heading?: string;
  action?: React.ReactNode;
  onClose: Function;
  type?: string;
}

export const Modal = (props: ModalProps) => {
  // Handle empty className
  const className = props.className || '';
  const wrapperClassName = props.wrapperClassName || '';

  switch (props.type) {
    case 'empty':
      return <ModalEmpty {...props} />;
    case 'small':
      return (
        <ModalDefault
          {...props}
          className={className}
          wrapperClassName={wrapperClassName + 'modal--small'}
        />
      );
    case 'default':
    default:
      return <ModalDefault {...props} />;
  }
};

const ModalDefault = (props: ModalProps) => {
  const { collapsed, onClose } = props;

  // if the state is false, do not show it
  const open = collapsed ? 'modal--open' : '';

  const onClickMain = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onClose();
  };

  const onClickUi = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // Do not close if the click is inside the box
    e.stopPropagation();
  };

  return (
    <div
      {...props}
      className={`modal ${open} ${props.wrapperClassName}`}
      onClick={onClickMain}>
      <div className={`modal__ui ${props.className}`} onClick={onClickUi}>
        <div className="modal__heading">
          <H4>{props.heading}</H4>
        </div>
        <div className="modal__main">{props.children}</div>
        <div className="modal__footer">{props.action}</div>
      </div>
    </div>
  );
};

const ModalEmpty = (props: ModalProps) => {
  const { collapsed, onClose } = props;

  // if the state is false, do not show it
  const open = collapsed ? 'modal--open' : '';

  const onClickMain = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onClose();
  };

  const onClickUi = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // Do not close if the click is inside the box
    e.stopPropagation();
  };

  return (
    <div
      {...props}
      className={`modal modal--empty ${open} ${props.wrapperClassName}`}
      onClick={onClickMain}>
      <div className={`modal__ui ${props.className}`} onClick={onClickUi}>
        <div className="modal__main">{props.children}</div>
      </div>
    </div>
  );
};
