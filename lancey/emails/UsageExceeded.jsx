import BaseLayout from "./components/BaseLayout";
import Button from "./components/Button";
import P from "./components/P";
import Headline from "./components/Headline";
import IconImage from "./components/IconImage";
import assetUrl from "./util/assetUrl";

export default function UsageExceeded() {
  return (
    <BaseLayout>
      <IconImage
        src={assetUrl("/assets/exclamation.png")}
        alt="exclamation icon"
      />
      <Headline cssClass="header-lg" maxWidth="500px">
        You’ve reached the limit for your plan
      </Headline>
      <P maxWidth="440px">
        Upgrade your plan so that your customers can access your demo without
        limits. It only takes a minute.
      </P>
      <Button paddingBottom="16px" href="https://lancey.io" text="View Plans" />
    </BaseLayout>
  );
}
