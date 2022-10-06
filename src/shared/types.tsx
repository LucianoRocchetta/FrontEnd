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
  preset?: "play_button" | "info_button";
  disabled?: boolean;
  children?: any;
  onClick?: (e: any) => void;
  className?: string;
  style?: CSSProperties;
}
export interface NavItemProps {
  children?: any;
  className?: string;
  style?: CSSProperties;
  link: string;
  label: string;
}
export interface OptionsProps {
  style?: CSSProperties;
  link: string;
  label: string;
  children?: any;
  className?: string;
}
export interface ArrowButtonProps {
  hasNext: boolean;
  clickHandler: () => void;
  direction: "prev" | "next";
}

export interface MoviesGridProps {
  movies: {
    category: string;
    images: Array<string>;
  };
}

export interface CardProps {
  img: string;
}

// TYPES
export enum ScreenNames {
  HOME = "Home",
  GENRES = "Genres",
  MYLIST = "MyList",
}
