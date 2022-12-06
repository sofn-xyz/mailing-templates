import {
  MjmlSection,
  MjmlWrapper,
  MjmlColumn,
  MjmlText,
  MjmlRaw,
} from "mjml-react";
import Link from "./Link";
import { colors, fontSize, fontWeight } from "../theme";
import assetUrl from "../util/assetUrl";

export type FooterProps = {
  email: string;
};
export default function Footer({ email }: FooterProps) {
  return (
    <MjmlWrapper fullWidth={true} backgroundColor={colors.black}>
      <MjmlSection paddingTop={48} paddingBottom={48} cssClass="gutter">
        <MjmlColumn>
          <MjmlRaw>
            <tr>
              <td>
                <table
                  border={0}
                  cellPadding={0}
                  cellSpacing={0}
                  role="presentation"
                  width="100%"
                >
                  <tr>
                    <td>
                      <a href="https://mailing.run">
                        <img
                          src={assetUrl("/assets/bbeam-logo-white.png")}
                          alt="BBeam Logo"
                          height="48px"
                          width="43px"
                          style={{
                            border: 0,
                            display: "block",
                            outline: "none",
                            textDecoration: "none",
                            fontSize: 16,
                            height: 48,
                            width: 43,
                          }}
                        />
                      </a>
                    </td>
                    <td width="31px" align="left">
                      <a href="https://twitter.com/_0_">
                        <img
                          src={assetUrl("/assets/twitter.png")}
                          alt="Twitter Logo"
                          style={{
                            border: 0,
                            display: "block",
                            outline: "none",
                            textDecoration: "none",
                            fontSize: 16,
                            height: 18,
                            width: 20,
                          }}
                        />
                      </a>
                    </td>
                    <td width="31px" align="right">
                      <a href="#">
                        <img
                          src={assetUrl("/assets/linkedin.png")}
                          alt="Linkedin Logo"
                          style={{
                            border: 0,
                            display: "block",
                            outline: "none",
                            textDecoration: "none",
                            fontSize: 16,
                            height: 18,
                            width: 18,
                          }}
                        />
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </MjmlRaw>
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection paddingBottom={32} cssClass="gutter">
        <MjmlColumn>
          <MjmlText
            fontSize={fontSize.sm}
            color={colors.white}
            paddingBottom={28}
          >
            This email was sent to {email}. If you don't want to receive these
            emails in the future, you can{" "}
            <Link href="#" color={colors.white} textDecoration="underline">
              manage your settings
            </Link>{" "}
            or{" "}
            <Link href="#" color={colors.white} textDecoration="underline">
              unsubscribe
            </Link>
            .
          </MjmlText>

          <MjmlText fontSize={fontSize.xs} color={colors.white}>
            BBeam, 269 Melta Way, Del Mar, CA 92014, USA
            <br />
            <Link color={colors.white} href="#">
              Terms
            </Link>
            &nbsp;&nbsp;·&nbsp;&nbsp;
            <Link color={colors.white} href="#">
              Privacy
            </Link>
            &nbsp;&nbsp;·&nbsp;&nbsp;
            <Link color={colors.white} href="#">
              Contact Us
            </Link>
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>
    </MjmlWrapper>
  );
}
