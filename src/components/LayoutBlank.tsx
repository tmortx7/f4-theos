import { type FC } from "react"

type AppProps = {
  children: React.ReactNode
}

export const LayoutBlank:FC<AppProps> = ({children}) =>{
  return(
    <div className="flex flex-col w-full h-[100vh]">
      {children}
    </div>
  )
}