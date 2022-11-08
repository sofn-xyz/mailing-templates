import BaseLayout from "./components/BaseLayout";
import Divider from "./components/Divider";
import Button from "./components/Button";
import P from "./components/P";
import { colors } from "./components/theme";
import Headline from "./components/Headline";
import HeadlineImage from "./components/HeadlineImage";

const FinalizingReminder1 = ({ name, schoolName }) => {
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
      <P>Hello {name},</P>
      <P>
        Your loan is approved. All you need to do before you attend {schoolName}{" "}
        is to sign your loan documents. Click the button above to sign your
        documents!
      </P>
      <P>
        Let us know if you have questions - we're here to help. We're looking
        forward to supporting your time in school and your future career.
      </P>
    </BaseLayout>
  );
};

export default FinalizingReminder1;
