import BaseLayout from "./components/BaseLayout";
import Divider from "./components/Divider";
import Button from "./components/Button";
import { colors } from "./components/theme";
import P from "./components/P";
import Headline from "./components/Headline";
import HeadlineImage from "./components/HeadlineImage";

const TuitionRequestReminder2 = ({ name }) => {
  return (
    <BaseLayout backgroundColor={colors.greenDark}>
      <HeadlineImage />
      <Headline cssClass="header-md">
        You still need to select a loan amount{" "}
      </Headline>
      <Button
        href="https://apply.fynncredit.com/application"
        text="Complete Your Loan"
      />
      <Divider />
      <P>Hi {name},</P>
      <P>
        You still have to select a loan amount before you can receive funding
        from Fynn! Click the button above to choose an amount.
      </P>
    </BaseLayout>
  );
};

export default TuitionRequestReminder2;
