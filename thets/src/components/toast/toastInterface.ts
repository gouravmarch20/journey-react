export interface ToastProps {
    message: string;
    type?: "success" | "error" | "info";
    onClose?: () => void;
}

export interface ToastT {
    id: string;
    message: string;
    type: "success" | "error" | "info";
}