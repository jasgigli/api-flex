const requestInterceptors = [];
const responseInterceptors = [];

export const addInterceptor = (type, interceptor) => {
  if (type === "request") {
    requestInterceptors.push(interceptor);
  } else if (type === "response") {
    responseInterceptors.push(interceptor);
  }
};

export const removeInterceptor = (type, id) => {
  if (type === "request") {
    requestInterceptors.splice(id, 1);
  } else if (type === "response") {
    responseInterceptors.splice(id, 1);
  }
};

export const applyRequestInterceptors = (config) => {
  for (const interceptor of requestInterceptors) {
    config = interceptor(config);
  }
  return config;
};

export const applyResponseInterceptors = (response) => {
  for (const interceptor of responseInterceptors) {
    response = interceptor(response);
  }
  return response;
};
