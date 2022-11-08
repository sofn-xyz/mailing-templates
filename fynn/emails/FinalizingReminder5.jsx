import BaseLayout from "./components/BaseLayout";
import Divider from "./components/Divider";
import Button from "./components/Button";
import { colors } from "./components/theme";
import P from "./components/P";
import Headline from "./components/Headline";
import HeadlineImage from "./components/HeadlineImage";

const FinalizingReminder5 = ({ name }) => {
  return (
    <BaseLayout backgroundColor={colors.greenDark}>
      <HeadlineImage />
      <Headline cssClass="header-md">
        It’s time to sign your loan documents!
      </Headline>
      <Button
        href="https://apply.fynncredit.com/application"
        text="Sign Your Loan"
      />
      <Divider />
      <P>Hi {name},</P>
      <P>
        You still have a chance to get funding for your program! There’s only
        one more thing we need to finalize your loan: your signature. To make
        your loan official, simply click the button above!
      </P>
    </BaseLayout>
  );
};

export default FinalizingReminder5;
