import { MjmlSection, MjmlColumn, MjmlText, MjmlRaw } from "mjml-react";
import Link from "./Link";
import { colors, fontSize, fontWeight } from "../theme";
import assetUrl from "../util/assetUrl";
import accessibleColor from "../util/accessibleColor";

export default function Footer() {
  const fontColor = accessibleColor(
    colors.backgroundColor,
    colors.black,
    colors.gray300
  );
  return (
    <>
      <MjmlSection paddingTop={48}>
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
                    <td width="50%" align="right">
                      <a href="https://www.facebook.com/people/Thoughtful-Post/100083722654732/">
                        <img
                          src={assetUrl("/assets/facebook.png")}
                          alt="Facebook Logo"
                          height="40px"
                          width="40px"
                          style={{
                            border: 0,
                            display: "block",
                            outline: "none",
                            textDecoration: "none",
                            fontSize: 16,
                            height: 40,
                            width: 40,
                            paddingRight: 6,
                          }}
                        />
                      </a>
                    </td>
                    <td width="50%">
                      <a href="https://www.facebook.com/people/Thoughtful-Post/100083722654732/">
                        <img
                          src={assetUrl("/assets/instagram.png")}
                          alt="Instagram Logo"
                          height="40px"
                          width="40px"
                          style={{
                            border: 0,
                            display: "block",
                            outline: "none",
                            textDecoration: "none",
                            fontSize: 16,
                            height: 40,
                            width: 40,
                            paddingLeft: 6,
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
      <MjmlSection paddingTop={32} paddingBottom={32}>
        <MjmlColumn>
          <MjmlText
            fontSize={fontSize.xs}
            fontWeight={fontWeight.bold}
            align="center"
            color={fontColor}
          >
            <Link color={fontColor} href="https://thoughtfulpost.com/">
              Unsubscribe
            </Link>{" "}
            ·{" "}
            <Link
              color={fontColor}
              href="https://thoughtfulpost.com/terms-conditions/"
            >
              Terms & Conditions
            </Link>
          </MjmlText>

          <MjmlText fontSize={fontSize.xs} color={fontColor} align="center">
            Thoughtful Post® {new Date().getFullYear()}, All rights reserved.
            <br />
            1928 Mission Street, San Francisco, CA 94110
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>
    </>
  );
}
