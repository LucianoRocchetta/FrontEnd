import { CSSProperties } from "react";

// API SERVICE TYPES
export interface BaseApiParams {
    url: string;
    unauthorizedCallback?: any;
    showSuccessMessage?: boolean;
}

export interface GetParams extends BaseApiParams {}

export interface ReprocessData {
    method: "GET" | "POST" | "PATCH" | "DELETE";
    body: any;
    url: string;
}

// COMPONENTS PROPS
export interface NavbarProps {
    currentScreen: ScreenNames;
}
export interface GenericButtonProps {
    label: string;
    onClick?: (e: any) => void;
    className?: string;
    style?: CSSProperties;
}

// TYPES
export enum ScreenNames {
    HOME = "Home",
    GENRES = "Genres",
    MYLIST = "MyList",
}
