import BaseLayout from "./components/BaseLayout";
import Divider from "./components/Divider";
import Button from "./components/Button";
import { colors } from "./components/theme";
import P from "./components/P";
import Headline from "./components/Headline";
import HeadlineImage from "./components/HeadlineImage";

const TuitionRequestReminder3 = ({ name }) => {
  return (
    <BaseLayout backgroundColor={colors.greenDark}>
      <HeadlineImage />
      <Headline cssClass="header-md">
        Select a loan amount to get your funding!{" "}
      </Headline>
      <Button
        href="https://apply.fynncredit.com/application"
        text="Complete Your Loan"
      />
      <Divider />
      <P>Hi {name},</P>
      <P>
        Even though you’re approved for a loan, you still have one step left!
        Click the button above or log into your Fynn account to complete this
        step.
      </P>
    </BaseLayout>
  );
};

export default TuitionRequestReminder3;
