import { useContext, useState } from "react";
import LoaderContext from "./LoaderContext";

export const LoaderProvider = (props: { children: React.ReactNode }) => {
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
    <LoaderContext.Provider value={value}>
      {props.children}
    </LoaderContext.Provider>
  );
};

export const useLoaderContext = () => {
  const value = useContext(LoaderContext);
  return value;
};
