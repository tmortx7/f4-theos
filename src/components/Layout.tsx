import { type FC } from "react"

type AppProps = {
  children: React.ReactNode
}

export const Layout:FC<AppProps> = ({children}) =>{
  return(
    <div className="flex flex-row w-full h-[100vh]">
      {children}
    </div>
  )
}