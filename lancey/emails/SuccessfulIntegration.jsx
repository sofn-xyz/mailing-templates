import BaseLayout from "./components/BaseLayout";
import Button from "./components/Button";
import P from "./components/P";
import Headline from "./components/Headline";
import IconImage from "./components/IconImage";
import assetUrl from "./util/assetUrl";

export default function SuccessfulIntegration({ integration }) {
  return (
    <BaseLayout>
      <IconImage
        src={assetUrl("/assets/green-check.png")}
        alt="checkmark icon"
      />
      <Headline cssClass="header-lg">
        Your {integration} integration is live
      </Headline>
      <P maxWidth="440px">
        Nice job! You have successfully linked your {integration} account to
        your Lancey account.
      </P>
      <Button
        paddingBottom="16px"
        href="https://lancey.io"
        text="View Your Integrations"
      />
    </BaseLayout>
  );
}
