import BaseLayout from "./components/BaseLayout";
import Divider from "./components/Divider";
import Button from "./components/Button";
import { colors } from "./components/theme";
import P from "./components/P";
import Headline from "./components/Headline";
import HeadlineImage from "./components/HeadlineImage";

const TuitionRequestReminder1 = ({ name }) => {
  return (
    <BaseLayout backgroundColor={colors.greenDark}>
      <HeadlineImage />
      <Headline cssClass="header-md">
        Select your loan amount to continue!
      </Headline>
      <Button
        href="https://apply.fynncredit.com/application"
        text="Complete Your Loan"
      />
      <Divider />
      <P>Hi {name},</P>
      <P>
        You’ll need to select a loan amount to proceed with your loan. You can
        click the button above to choose an amount.
      </P>
    </BaseLayout>
  );
};

export default TuitionRequestReminder1;
