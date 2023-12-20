
import ButtonMain from "../ButtonMain";
import ButtonSecundary from "../ButtonSecundary";
import { ContainerHeader } from "./HeaderStyle";
import Logo from "../Logo";
import NavBar from "./NavBar";
import Separtor from "../Separator";



export default function Header() {
  return (

    <ContainerHeader>
      <Logo />
      <NavBar />
      <div>
        <ButtonSecundary textButtonSecondary="ENTRAR" />
        <ButtonMain textButtonMain="ABRIR CONTA" />
      </div>
    </ContainerHeader>

  )
}