import {
  Mjml,
  MjmlBody,
  MjmlWrapper,
  MjmlSection,
  MjmlColumn,
  MjmlText,
  MjmlImage,
} from "mjml-react";
import Head from "../components/Head";
import Footer from "../components/Footer";
import assetUrl from "../util/assetUrl";
import { colors, fontSize } from "./theme";
import P from "../components/P";

export default function BaseLayout({ backgroundColor, children, centerLogo }) {
  return (
    <Mjml>
      <Head />
      <MjmlBody width="640px" backgroundColor={backgroundColor || colors.white}>
        <MjmlWrapper fullWidth={true} padding="32px 20px">
          <MjmlSection paddingBottom="0px" cssClass="main top-section gutter">
            <MjmlColumn
              paddingTop="7px"
              paddingBottom="32px"
              backgroundColor={colors.white}
              cssClass="top-column"
            >
              <MjmlImage
                href="https://fynncredit.com"
                src={assetUrl("/assets/logo-full.png")}
                alt="Fynn Logo"
                height="28px"
                width="63px"
                paddingTop="0px"
                align={centerLogo ? "center" : "left"}
                padding="0"
              />
              {children}
              <P>
                Best,
                <br />
                The Fynn team
              </P>
            </MjmlColumn>
          </MjmlSection>
          <MjmlSection padding="0" cssClass="bottom-section gutter">
            <MjmlColumn
              padding="24px 0"
              backgroundColor={colors.black}
              cssClass="bottom-column"
            >
              <MjmlText
                color={colors.white}
                fontSize={fontSize.sm}
                align="center"
                padding="0"
              >
                <b>Questions?</b> Email us at{" "}
                <a href="mailto:help@fynncredit.com">help@fynncredit.com</a> or
                call{" "}
                <span style={{ display: "inline-block" }}>(505) 806-2054.</span>
              </MjmlText>
            </MjmlColumn>
          </MjmlSection>
          <Footer />
        </MjmlWrapper>
      </MjmlBody>
    </Mjml>
  );
}
