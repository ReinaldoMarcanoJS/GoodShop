import { useSelector } from "react-redux"
import { IRootState } from "../reducers/rootReducer"
import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"

export const ProtectedRoutes = ():JSX.Element => {
    const isAuth = useSelector((state: IRootState) => state.ui.isAuth)
    const navigate = useNavigate()
    useEffect(() => {
        if(!isAuth){
            navigate("/login")
        }
    },[])
    return <Outlet/>
  }
