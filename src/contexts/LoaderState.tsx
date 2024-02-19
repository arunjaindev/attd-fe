import React, { useContext, useState } from "react"
import LoaderContext from "./LoaderContext"

type LoaderProviderProps = {
  children : React.ReactNode
}

export const LoaderProvider = ({children} : LoaderProviderProps) => {
  const [isLoading, setIsLoading] = useState(false)

  const showLoader = () => {
    setIsLoading(true)
  }

  const hideLoader = () => {
    setIsLoading(false)
  }

  const value = {
    isLoading,
    showLoader,
    hideLoader,
  }

  return (
    <LoaderContext.Provider value={value}>
      {children}
    </LoaderContext.Provider>
  )
}

export const useLoaderContext = () => {
  const value = useContext(LoaderContext)
  return value
}
