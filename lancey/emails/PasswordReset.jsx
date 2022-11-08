import BaseLayout from "./components/BaseLayout";
import Button from "./components/Button";
import P from "./components/P";
import Headline from "./components/Headline";
import Link from "./components/Link";
import { colors } from "./components/theme";
import DesktopSpacer from "./components/DesktopSpacer";

export default function PasswordReset({ name }) {
  return (
    <BaseLayout>
      <Headline cssClass="header-md" paddingTop="16px" paddingBottom="24px">
        Hi {name},
      </Headline>
      <DesktopSpacer height="8px" />
      <P maxWidth="496px">
        Please use the link below to set up a new password. This link is only
        usable once! If you need to, you can reinitiate the password process{" "}
        <Link
          style={{ color: colors.black, textDecoration: "underline" }}
          href="https://lancey.io"
        >
          here
        </Link>
        .
      </P>
      <Button
        paddingBottom="28px"
        href="https://lancey.io"
        text="Set Password"
      />
      <P paddingBottom="0px">
        Thanks, <br /> The Lancey Team
      </P>
      <DesktopSpacer height="16px" />
    </BaseLayout>
  );
}
