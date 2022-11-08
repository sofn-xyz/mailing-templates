import BaseLayout from "./components/BaseLayout";
import Divider from "./components/Divider";
import Button from "./components/Button";
import P from "./components/P";
import Headline from "./components/Headline";
import IconImage from "./components/IconImage";
import Li from "./components/Li";
import Link from "./components/Link";
import assetUrl from "./util/assetUrl";
import DesktopSpacer from "./components/DesktopSpacer";

export default function Welcome() {
  return (
    <BaseLayout>
      <IconImage src={assetUrl("/assets/smirk.png")} alt="smirking icon" />
      <DesktopSpacer height="8px" />

      <Headline cssClass="header-xl">Welcome</Headline>
      <P paddingBottom="28px" maxWidth="440px" fontSize="18px">
        Thanks for creating an account with Lancey! Lancey’s interactive product
        demos can help you grow your pipeline, and win deals.
      </P>
      <Button
        href="https:/lancey.io"
        text="Perfect Your Demo"
        fontSize="18px"
      />
      <Divider />
      <Headline cssClass="header-md">Need help getting started?</Headline>
      <Li>
        If you can’t find the answers your looking for in our{" "}
        <Link href="https://lancey.io">FAQ</Link>, you can{" "}
        <Link href="https://lancey.io">email</Link> us anytime
      </Li>
      <Li>
        Looking for one-on-one support?{" "}
        <Link href="https://lancey.io">Book a free demo</Link>
      </Li>
      <Li>
        Learn how companies have improved conversion in our{" "}
        <Link href="https://lancey.io">blog</Link>
      </Li>
      <DesktopSpacer height="16px" />
    </BaseLayout>
  );
}
