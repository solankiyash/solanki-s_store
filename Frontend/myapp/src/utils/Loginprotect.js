import { jwtDecode } from 'jwt-decode'
import React, { useEffect, useState } from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
function Loginprotect({children}) {
    const [login,setLogin] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()
    const checkLoginUser = () => {
        const getUser = localStorage.getItem("auth-token")
        if(getUser){
            setLogin(true)
            navigate(location.pathname)
        }else{
            setLogin(false)
            navigate("/login")
        }
    }
    useEffect(() => {
        checkLoginUser()
    },[login])
    return <React.Fragment>{login ? children : null}</React.Fragment>;
}

export default Loginprotect
