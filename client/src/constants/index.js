const keys = require("../config/keys");

export const API_BASE_URL = keys.apiBaseUrl;

export const ACCESS_TOKEN = "accessToken";

export const OAUTH2_REDIRECT_URI = keys.redirectUri;

export const GOOGLE_AUTH_URL = API_BASE_URL + "/oauth2/authorize/google?redirect_uri=" + OAUTH2_REDIRECT_URI;
