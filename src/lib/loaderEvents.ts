export const showLoader = () => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("global-loader-show"));
  }
};

export const hideLoader = () => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("global-loader-hide"));
  }
};
