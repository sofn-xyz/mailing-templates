import { MjmlSection, MjmlColumn, MjmlText, MjmlImage } from "mjml-react";
import { colors, fontSize } from "./theme";
import Link from "./Link";
import assetUrl from "../util/assetUrl";

export default function Footer() {
  return (
    <>
      <MjmlSection paddingTop="32px">
        <MjmlColumn>
          <MjmlImage
            href="https://www.lancey.io"
            src={assetUrl("/assets/logo.png")}
            alt="Lancey Logo"
            height="20px"
            width="57px"
          />
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection paddingTop="20px" cssClass="footer smooth">
        <MjmlColumn>
          <MjmlImage
            href="https://ca.linkedin.com/company/getlancey"
            src={assetUrl("/assets/linkedin.png")}
            alt="LinkedIn Logo"
            height="20px"
            width="20px"
          />
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection paddingTop="20px" cssClass="footer smooth">
        <MjmlColumn>
          <MjmlText
            fontSize={fontSize.xs}
            color={colors.black}
            fontWeight="bold"
            align="center"
          >
            <Link
              style={{ color: colors.black }}
              href="https://www.lancey.io/privacy-policy"
            >
              Unsubscribe
            </Link>{" "}
            ·{" "}
            <Link
              style={{ color: colors.black }}
              href="https://www.lancey.io/privacy-policy"
            >
              Privacy
            </Link>
          </MjmlText>
          <MjmlText fontSize={fontSize.xs} color={colors.black} align="center">
            © All rights reserved. Lancey Inc
            <br />
            1928 Lancey Street, Toronto, ONT K0H 9Z9
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>
    </>
  );
}
