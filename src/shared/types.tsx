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
export interface LayoutProps {
  children?: any;
}
export interface NavbarProps {
  currentScreen: ScreenNames;
}
export interface GenericButtonProps {
  preset?: "play_button" | "info_button" | "add_button";
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
  onClick?: (e: any) => void;
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
  id: string;
  category: string;
  movies: CardProps[];
  type: string;
}

export interface CardCarouselProps {
  id: string;
  cards: CardProps[];
  cardClassName?: string;
  cardStyles?: CSSProperties;
  className?: string;
}

export interface CardProps {
  backgroundImage: string;
  to?: string;
  video?: any;
  title?: string;
  type?: "stretch" | "wide";
}

export interface MovieInfoCardProps {
  backgroundImage: string;
  to?: string;
}

// TYPES
export enum ScreenNames {
  HOME = "Home",
  GENRES = "Genres",
  MYLIST = "MyList",
}
