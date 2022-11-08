import BaseLayout from "./components/BaseLayout";
import Divider from "./components/Divider";
import Button from "./components/Button";
import { colors } from "./components/theme";
import P from "./components/P";
import Headline from "./components/Headline";
import HeadlineImage from "./components/HeadlineImage";

const FinalizingReminder4 = ({ name }) => {
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
        There’s one last simple step to secure funding from Fynn. All you have
        to do is sign your document!
      </P>
    </BaseLayout>
  );
};

export default FinalizingReminder4;
