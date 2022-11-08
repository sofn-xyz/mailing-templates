import BaseLayout from "./components/BaseLayout";
import Button from "./components/Button";
import P from "./components/P";
import Headline from "./components/Headline";
import IconImage from "./components/IconImage";
import assetUrl from "./util/assetUrl";

export default function TrialEnded() {
  return (
    <BaseLayout>
      <IconImage src={assetUrl("/assets/clock.png")} alt="clock icon" />
      <Headline cssClass="header-lg" maxWidth="340px">
        Your Lancey trial has ended
      </Headline>
      <P maxWidth="440px">
        Upgrade your plan so that your customers can access your demo without
        limits. It only takes a minute.
      </P>
      <Button paddingBottom="16px" href="https://lancey.io" text="View Plans" />
    </BaseLayout>
  );
}
