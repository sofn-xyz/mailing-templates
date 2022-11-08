import BaseLayout from "./components/BaseLayout";
import Divider from "./components/Divider";
import Button from "./components/Button";
import { colors } from "./components/theme";
import P from "./components/P";
import Headline from "./components/Headline";
import HeadlineImage from "./components/HeadlineImage";

const IncompleteReminder2 = ({ name }) => {
  return (
    <BaseLayout backgroundColor={colors.greenDark}>
      <HeadlineImage />
      <Headline cssClass="header-xl">
        Getting funded with Fynn only takes 5 minutes!
      </Headline>
      <Button
        href="https://apply.fynncredit.com/application"
        text="Continue Your Application"
      />
      <Divider />
      <P>Hi {name},</P>
      <P>
        You are nearly done with your application for Fynn. It takes less than
        five minutes to get approved for a loan— submit your application and
        find out how much you can get for your program!
      </P>
      <P>
        If you'd like to cancel your application, go to your account by clicking
        the button above and then select “Cancel Application.”{" "}
      </P>
    </BaseLayout>
  );
};

export default IncompleteReminder2;
