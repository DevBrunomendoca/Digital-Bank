import { SectionAbout } from "./AboutStyle"
import ButtonMain from "../ButtonMain"
import IconChecked from "../IconChecked"
import Paragraph from "../Paragraph"
import Subtitle from "../Subtitle"
import TitleSecond from "../TitleSecond"
import { GroupCheck } from "../GroupCheckStyle"
import Separtor from "../Separator"

export default function About() {
  return (
    <SectionAbout>
      <img  src="/img-about.png" alt="" />
      <div style={{ maxWidth: "600px", display: "flex", flexDirection: "column", gap: "2rem" }}>
        <TitleSecond textTitle="BENEFÍCIOS" />
        <Subtitle textSubtitle="Explorando o mundo dos investimentos" />
        <Paragraph TextParagraph="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et masa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur." />
        <GroupCheck >
          <div>
            <IconChecked />
            <Paragraph TextParagraph="Autenticação de dois fatores" />
          </div>
          <div>
            <IconChecked />
            <Paragraph TextParagraph="Cashback e descontos em compras" />
          </div>
        </GroupCheck>
        <ButtonMain textButtonMain="SABER MAIS"/>
      </div>
      
    </SectionAbout>

  )
}