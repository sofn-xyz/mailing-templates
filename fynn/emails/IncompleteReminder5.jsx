import BaseLayout from "./components/BaseLayout";
import Divider from "./components/Divider";
import Button from "./components/Button";
import { colors } from "./components/theme";
import P from "./components/P";
import Headline from "./components/Headline";
import HeadlineImage from "./components/HeadlineImage";

const IncompleteReminder5 = ({ name }) => {
  return (
    <BaseLayout backgroundColor={colors.greenDark}>
      <HeadlineImage />
      <Headline cssClass="header-sm">
        There’s still time to complete your application!
      </Headline>
      <Button
        href="https://apply.fynncredit.com/login"
        text="Continue Your Application"
      />
      <Divider />
      <P>Hi {name},</P>
      <P>
        It’s been a few days since you started your Fynn loan application. If we
        don't hear from you soon, your application may be archived.
      </P>
      <P>
        We understand that finances can be tricky. If this isn't the right time
        for you, don't worry! You can always apply to Fynn again at a later
        date.
      </P>
      <P>
        If you'd like to cancel your application, go to your account by clicking
        the button above and then select “Cancel Application.”
      </P>
    </BaseLayout>
  );
};

export default IncompleteReminder5;
