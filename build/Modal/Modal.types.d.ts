/// <reference types="react" />
export interface ModalProps {
    children: React.ReactNode;
    className?: string;
    wrapperClassName?: string;
    collapsed: boolean;
    heading?: string;
    action?: React.ReactNode;
    onClose: Function;
    type: 'empty' | 'small' | 'default';
}
