import { useState } from "react";
import LoaderContext from "./LoaderContext";

export const LoaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const showLoader = () => {
    setIsLoading(true);
  };

  const hideLoader = () => {
    setIsLoading(false);
  };

  const value = {
    isLoading,
    showLoader,
    hideLoader,
  };

  return (
    <LoaderContext.Provider value={value}>{children}</LoaderContext.Provider>
  );
};
