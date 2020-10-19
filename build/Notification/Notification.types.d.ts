/// <reference types="react" />
export interface NotificationProps {
    toastList: Array<{
        id: Number;
        title: string;
        description: string;
        backgroundColor: string;
        icon: JSX.Element | string;
    }>;
    position: "top-left" | "top-right" | "bottom-right" | "bottom-left";
    autoDelete: boolean;
    dismissTime: number;
}
