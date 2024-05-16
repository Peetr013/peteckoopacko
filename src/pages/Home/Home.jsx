import "./Home.css"
import NavBar from "../../components/NavBar/NavBar"
import Cards from "../../components/Cards/Cards"

export default function Home() {
    return(
        <>
            <NavBar></NavBar>
            <Cards Name="XD" Paragraph="Tran"></Cards>
            <Cards Name=":D" Paragraph="Tomášek"></Cards>
        </>
    )
}