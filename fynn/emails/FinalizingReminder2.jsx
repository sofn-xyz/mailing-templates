import BaseLayout from "./components/BaseLayout";
import Divider from "./components/Divider";
import Button from "./components/Button";
import { colors } from "./components/theme";
import P from "./components/P";
import Headline from "./components/Headline";
import HeadlineImage from "./components/HeadlineImage";

const FinalizingReminder2 = ({ name, schoolName }) => {
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
        We hope you're excited about attending {schoolName}! You're almost ready
        to go with Fynn - we just need you to make it official.
      </P>
      <P>
        Let us know if you have any questions or concerns - our team is here to
        help. If you're no longer interested in financing your education with
        Fynn, just reply to this email and let us know.
      </P>
    </BaseLayout>
  );
};

export default FinalizingReminder2;
