import Header from "../Header"
import { Outlet } from "react-router-dom"
import CartContainer from "../Cart/CartContainer"
import CartContext from "../store/CartContext"
import { useContext } from "react"

const RootLayout = () =>{
    const ctx = useContext(CartContext)
    
    return <>
    <Header/>
    {ctx.cartVisibility && <CartContainer></CartContainer>}
    <Outlet/>
    </>
}

export default RootLayout;
