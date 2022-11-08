import BaseLayout from "./components/BaseLayout";
import Divider from "./components/Divider";
import Button from "./components/Button";
import { colors } from "./components/theme";
import P from "./components/P";
import Headline from "./components/Headline";
import HeadlineImage from "./components/HeadlineImage";

const TuitionRequestReminder4 = ({ name }) => {
  return (
    <BaseLayout backgroundColor={colors.greenDark}>
      <HeadlineImage />
      <Headline cssClass="header-md">
        Request a tuition amount before your funding is gone!
      </Headline>
      <Button
        href="https://apply.fynncredit.com/application"
        text="Complete Your Loan"
      />
      <Divider />
      <P>Hi {name},</P>
      <P>
        Before your loan can be certified by your school, we need to know how
        much money you need! Please go to your account and request a tuition
        amount. Your school will verify it, and then we will let you know when
        it’s time to sign!
      </P>
    </BaseLayout>
  );
};

export default TuitionRequestReminder4;
