import { type FC } from "react"
import { Header } from "./Header"

type AppProps = {
  children: React.ReactNode
}

export const Layout:FC<AppProps> = ({children}) =>{
  return(
    <div className="flex flex-col w-full h-[100vh]">
      <Header />
      {children}
    </div>
  )
}