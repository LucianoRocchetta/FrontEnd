import endpoints from "../config/endpoints";
import generalConfig from "../config/general-config";
import { unauthorizedCallback } from "../core/auth/AuthService";
import { BaseApiParams, GetParams, ReprocessData } from "./types";

const apiGet = async (params: GetParams) => {
  try {
    const { url } = params;
    const response = await fetch(url, { method: "GET", headers: getHeaders() });

    return processJsonResponse(params, response, { method: "GET", url });
  } catch (error) {
    console.error({ error });
  }
};

const getHeaders = () => {
  //   const jwtToken = getToken();
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  //   if (jwtToken) headers.append("Authorization", `Bearer ${jwtToken}`);
  return headers;
};

const processJsonResponse = async (
  params: BaseApiParams,
  response: Response,
  reprocessData: any
) => {
  const contentType = response.headers.get("content-type");
  if (
    response.status === 200 &&
    contentType?.indexOf("application/json") !== -1
  ) {
    return await response.json();
  } else if (response.status === 200) {
    return await response.text();
  } else if (response.status === 201) {
    const r: any = await response.text();
    return JSON.parse(r);
  }

  return await processResponse(params, response, reprocessData);
};

const getErrorFromServiceResponse = async (response: Response) => {
  const objectResponse = await response.json();
  if (
    objectResponse &&
    objectResponse.errors &&
    Array.isArray(objectResponse.errors) &&
    objectResponse.errors.length
  ) {
    const firstError = objectResponse.errors[0];
    if (firstError) {
      return firstError.errorMessage || firstError.errorCode;
    }
  } else if (objectResponse.message) {
    return objectResponse.message;
  } else if (objectResponse.msg) {
    return objectResponse.msg;
  }

  return null;
};

const processResponse = async (
  params: BaseApiParams,
  response: any,
  reprocessData: ReprocessData
) => {
  let message: string | undefined = undefined;
  const code = response.status;

  switch (code) {
    case 401:
      const verify = `${generalConfig.API_URL}/${endpoints.API_URL}`;
      const refresh = `${generalConfig.API_URL}/${endpoints.API_URL}`;
      const localResponse = JSON.parse(await response.text());
      if (
        localResponse &&
        localResponse.message === "JWT expired" &&
        reprocessData.url !== refresh
      ) {
        // refreshTokenAndResendRequest(reprocessData);
      } else if (reprocessData.url === verify) {
        let customR = { error_description: "" };
        if (reprocessData.body.type === "signup") {
          customR.error_description =
            "Falló la verificación de creación de cuenta.";
        } else {
          customR.error_description =
            "Fallo la verificacion de cambio de contraseña.";
        }
        return customR;
      } else {
        message = "Se ha producido un error. Verifique sus credenciales";
        console.error("Unauthorized [401]");
        params.unauthorizedCallback();
      }
      break;

    case 403:
      let res = JSON.parse(await response.text());
      throw new Error(res.message);

    case 404:
      throw new Error("Se ha producido un error inesperado");

    case 405:
    case 422:
    case 400:
      const errorMessage =
        (await getErrorFromServiceResponse(response)) ||
        "Se ha producido un error inesperado";
      if (errorMessage) {
        throw new Error(errorMessage);
      } else {
        unauthorizedCallback();
      }
      break;

    case 409:

    case 415:
    case 500:
      message = await response.text();
  }

  return message && message.replace(/['"]+/g, "");
};

export { apiGet };
