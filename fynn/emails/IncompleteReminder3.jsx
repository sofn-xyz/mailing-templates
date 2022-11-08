import BaseLayout from "./components/BaseLayout";
import Divider from "./components/Divider";
import Button from "./components/Button";
import { colors } from "./components/theme";
import P from "./components/P";
import Headline from "./components/Headline";
import HeadlineImage from "./components/HeadlineImage";

const IncompleteReminder3 = ({ name, schoolName }) => {
  return (
    <BaseLayout backgroundColor={colors.greenDark}>
      <HeadlineImage />
      <Headline cssClass="header-md">
        You’re almost done! Start on a path to a better future.
      </Headline>
      <Button
        href="https://apply.fynncredit.com/application"
        text="Continue Your Application"
      />
      <Divider />
      <P>Hello {name},</P>
      <P>Your loan application with Fynn is almost complete.</P>
      <P>
        Continue your Fynn application to see if you qualify for 100% tuition
        funding.
      </P>
      <P>
        We're excited to review your completed application and help launch your
        career with {schoolName}.
      </P>
      <P>If you have any questions, simply respond to this email.</P>
      <P>
        If you'd like to cancel your application, go to your account by clicking
        the button above and then select “Cancel Application.”
      </P>
    </BaseLayout>
  );
};

export default IncompleteReminder3;
