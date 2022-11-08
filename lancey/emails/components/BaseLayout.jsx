import {
  Mjml,
  MjmlBody,
  MjmlImage,
  MjmlWrapper,
  MjmlSection,
  MjmlColumn,
} from "mjml-react";
import Head from "../components/Head";
import Footer from "../components/Footer";
import { colors } from "./theme";
import assetUrl from "../util/assetUrl";

export default function BaseLayout({
  backgroundColor,
  children,
  centerLogo,
  style,
}) {
  return (
    <Mjml>
      <Head style={style} />
      <MjmlBody
        width="640px"
        backgroundColor={backgroundColor || colors.dreamsicle}
      >
        <MjmlWrapper fullWidth={true} padding="24px 20px">
          <MjmlSection cssClass="main-section">
            <MjmlColumn backgroundColor={colors.white} cssClass="top-column">
              <MjmlImage
                href="https://lancey.io"
                src={assetUrl("/assets/logo-full.png")}
                alt="Lancey Logo"
                height="28px"
                width="92.68px"
                align={centerLogo ? "center" : "left"}
                paddingBottom="48px"
              />
              {children}
            </MjmlColumn>
          </MjmlSection>
          <Footer />
        </MjmlWrapper>
      </MjmlBody>
    </Mjml>
  );
}
