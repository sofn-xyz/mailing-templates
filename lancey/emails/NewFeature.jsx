import BaseLayout from "./components/BaseLayout";
import Divider from "./components/Divider";
import Button from "./components/Button";
import P from "./components/P";
import Link from "./components/Link";
import Headline from "./components/Headline";
import { MjmlImage, MjmlText } from "mjml-react";
import assetUrl from "./util/assetUrl";
import { fontSize } from "./components/theme";
import DesktopSpacer from "./components/DesktopSpacer";

export default function NewFeature() {
  return (
    <BaseLayout
      centerLogo
      style={`
      .main-section {
        padding-top: 32px;
      }

      .header div {
        font-size: 40px !important;
      }

      @media (max-width:480px) {
        .header div {
          font-size: 36px !important;
        }
      }
    `}
    >
      <MjmlText
        align="center"
        textTransform="uppercase"
        fontWeight="bold"
        fontSize={fontSize.sm}
        paddingBottom="12px"
      >
        Introducing
      </MjmlText>
      <Headline align="center" cssClass="header" paddingBottom="32px">
        A/B Testing
      </Headline>
      <DesktopSpacer height="8px" />
      <MjmlImage
        width="440px"
        paddingBottom="32px"
        src={assetUrl("/assets/ab-test.png")}
        alt="abtest"
      />
      <DesktopSpacer height="8px" />

      <Button align="center" href="https://lancey.io" text="Check It Out" />
      <Divider paddingBottom="40px" paddingTop="48px" />
      <Headline align="center" cssClass="header-md">
        Why we're excited about A/B Testing
      </Headline>
      <P align="center" paddingBottom="16px">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </P>
      <P fontWeight="bold" align="center" paddingBottom="0">
        <Link href="https://lancey.io">Read more in our blog &rarr;</Link>
      </P>
    </BaseLayout>
  );
}
