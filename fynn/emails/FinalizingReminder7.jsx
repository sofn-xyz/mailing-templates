import BaseLayout from "./components/BaseLayout";
import Divider from "./components/Divider";
import Button from "./components/Button";
import { colors } from "./components/theme";
import P from "./components/P";
import Headline from "./components/Headline";
import HeadlineImage from "./components/HeadlineImage";

const FinalizingReminder7 = ({ name }) => {
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
      <P>Hi {name},</P>
      <P>
        Your school has certified your tuition amount, but you still haven’t
        signed your Fynn loan document to make it official. Your account may be
        archived soon, and with that, you could lose your funding.
      </P>
    </BaseLayout>
  );
};

export default FinalizingReminder7;
