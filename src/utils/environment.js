// src/utils/emvironment
export const isNode = () => {
  return (
    typeof process !== "undefined" &&
    process.versions != null &&
    process.versions.node != null
  );
};

export const isBrowser = () => {
  return (
    typeof window !== "undefined" && typeof window.document !== "undefined"
  );
};
