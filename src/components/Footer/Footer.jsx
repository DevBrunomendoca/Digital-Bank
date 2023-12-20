import Logo from "../Logo";
import Paragraph from "../Paragraph";
import { SocialMedia } from "./MediasStyle"
import { FooterContainer } from "./FooterStyle"
import { ContentRightFooter } from "./ContentContainer"
import { ContentLeftFooter } from "./ContentContainer"


export default function Footer() {
  return(
    <FooterContainer>
      <ContentRightFooter>
        <Logo/>
        <Paragraph TextParagraph="Lorem ipsum dolor sit am oledop consectetur adipiscing elit Ut et massa mi. Aliquam"/>
        <SocialMedia>
          <img src="/icon-instagram.png" alt="icone instagram"/>
          <img src="/icon-facebook.png" alt="icone facebook"/>
          <img src="/icon-twitter.png" alt="icone twiter" />
          <img src="/icon-linkedin.png" alt="icone linkedin"/>
        </SocialMedia>
      </ContentRightFooter>
      <ContentLeftFooter>
        <Paragraph TextParagraph="© Copyright | Developed By BRUNO MENDONÇA"/>
      </ContentLeftFooter>
    </FooterContainer>
  )
}