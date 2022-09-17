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

// TYPES
export enum ScreenNames {
  HOME = "Home",
}
