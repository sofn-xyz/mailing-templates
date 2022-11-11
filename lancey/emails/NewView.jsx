import BaseLayout from "./components/BaseLayout";
import Button from "./components/Button";
import P from "./components/P";
import Headline from "./components/Headline";
import IconImage from "./components/IconImage";
import assetUrl from "./util/assetUrl";

export default function NewView({ name }) {
  return (
    <BaseLayout>
      <IconImage src={assetUrl("/assets/sparkle.png")} alt="" />
      <Headline cssClass="header-lg" maxWidth="500px">
        Lancey Demo has a new view by {name}
      </Headline>
      <P maxWidth="440px">
        New view for your demo. Always check analytics to ensure you don't miss
        any opportunities to follow up.
      </P>
      <Button
        paddingBottom="16px"
        href="https://lancey.io"
        text="Check Analytics"
      />
    </BaseLayout>
  );
}
