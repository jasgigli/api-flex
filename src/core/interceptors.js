const interceptors = { request: [], response: [] };

export const addInterceptor = (type, interceptor) => {
  const id = interceptors[type].push(interceptor) - 1;
  return id;
};

export const removeInterceptor = (type, id) => {
  interceptors[type].splice(id, 1);
};

export const applyInterceptors = async (type, data) => {
  let interceptedData = data;
  for (const interceptor of interceptors[type]) {
    interceptedData = await interceptor(interceptedData);
  }
  return interceptedData;
};
