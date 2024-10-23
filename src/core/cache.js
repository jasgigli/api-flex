const cacheStore = new Map();

export const getFromCache = (key) => {
  const cached = cacheStore.get(key);
  if (cached && Date.now() - cached.timestamp < cached.expiry) {
    return cached.data;
  }
  cacheStore.delete(key);
  return null;
};

export const saveToCache = (key, data, expiry = 60000) => {
  cacheStore.set(key, { data, timestamp: Date.now(), expiry });
};
