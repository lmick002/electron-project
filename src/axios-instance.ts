import axios from 'axios';

const BASE_URL = '';

/**
 * This is an axios's instance. we can configure some settings here in the future.
 */
export const AXIOS = axios.create({
  baseURL: BASE_URL,
});

/**
 * An axios-interceptor which will add auth-token to each request in future.
 */
AXIOS.interceptors.request.use();

/**
 * An axios-interceptor which will add auth-token to each request in future.
 * To add data on response in future.
 */
AXIOS.interceptors.response.use();
