import { MjmlSection, MjmlColumn, MjmlText, MjmlImage } from "mjml-react";
import { colors, fontSize, fontWeight } from "../theme";
import Link from "./Link";
import Spacer from "./Spacer";
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
        <MjmlColumn width="50px">
          <MjmlImage
            href="https://www.facebook.com/people/Thoughtful-Post/100083722654732/"
            src={assetUrl("/assets/facebook.png")}
            alt="Facebook Logo"
            height="40px"
            width="40px"
          />
        </MjmlColumn>
        <MjmlColumn width="50px">
          <MjmlImage
            href="https://www.instagram.com/thoughtfulpostapp/"
            src={assetUrl("/assets/instagram.png")}
            alt="Instagram Logo"
            height="40px"
            width="40px"
          />
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection paddingTop={32}>
        <MjmlColumn>
          <MjmlText
            fontSize={fontSize.xs}
            fontWeight={fontWeight.bold}
            align="center"
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
