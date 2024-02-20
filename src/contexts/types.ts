export interface CredType {
    username: string
    password: string
  }
  
  export interface LoaderProviderProps {
    children : React.ReactNode
  }
  
  export interface User {
    ID: number
    CreatedAt: string
    UpdatedAt: string
    DeletedAt: string | null
    role: string
    firstName: string
    lastName: string
    email: string
    class: number
    password: string
  }
  
  export interface AuthContextType {
    user: User | null
    login: (creds: CredType) => void
    logout: () => void
  }