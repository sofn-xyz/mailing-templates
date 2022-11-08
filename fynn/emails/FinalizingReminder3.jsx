import BaseLayout from "./components/BaseLayout";
import Divider from "./components/Divider";
import Button from "./components/Button";
import { colors } from "./components/theme";
import P from "./components/P";
import Headline from "./components/Headline";
import HeadlineImage from "./components/HeadlineImage";

const FinalizingReminder3 = ({ name }) => {
  return (
    <BaseLayout backgroundColor={colors.greenDark}>
      <HeadlineImage />
      <Headline cssClass="header-xl">
        Sign your loan before the opportunity is gone!
      </Headline>
      <Button
        href="https://apply.fynncredit.com/application"
        text="Sign Your Fynn loan"
      />
      <Divider />
      <P>Hi {name},</P>
      <P>
        If we don't hear from you soon, your Fynn loan offer may expire in a few
        days. There's still time to sign it and secure financing for your
        program!
      </P>
    </BaseLayout>
  );
};

export default FinalizingReminder3;
