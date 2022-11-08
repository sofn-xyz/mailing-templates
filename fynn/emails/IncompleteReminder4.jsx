import BaseLayout from "./components/BaseLayout";
import Divider from "./components/Divider";
import Button from "./components/Button";
import { colors } from "./components/theme";
import P from "./components/P";
import Headline from "./components/Headline";
import HeadlineImage from "./components/HeadlineImage";

const IncompleteReminder4 = ({ name }) => {
  return (
    <BaseLayout backgroundColor={colors.greenDark}>
      <HeadlineImage />
      <Headline cssClass="header-lg">
        Find out if you are eligible for a Fynn loan!
      </Headline>
      <Button
        href="https://apply.fynncredit.com/login"
        text="Continue Your Application"
      />
      <Divider />
      <P>{name},</P>
      <P>
        You’re close to completing your Fynn application! If you do not submit
        your application soon, it may be archived, and your progress will be
        lost.
      </P>
      <P>
        If you'd like to cancel your application, go to your account by clicking
        the button above and then select “Cancel Application.”{" "}
      </P>
    </BaseLayout>
  );
};

export default IncompleteReminder4;
