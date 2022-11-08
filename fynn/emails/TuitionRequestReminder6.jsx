import BaseLayout from "./components/BaseLayout";
import Divider from "./components/Divider";
import Button from "./components/Button";
import { colors } from "./components/theme";
import P from "./components/P";
import Headline from "./components/Headline";
import HeadlineImage from "./components/HeadlineImage";
import assetUrl from "./util/assetUrl";

const TuitionRequestReminder6 = ({ name }) => {
  return (
    <BaseLayout backgroundColor={colors.greenDark}>
      <HeadlineImage
        src={assetUrl("/assets/action-required.png")}
        alt="Action required"
        height="33px"
        width="169px"
      />
      <Headline cssClass="header-xl">
        Your Fynn account is about to be archived!
      </Headline>
      <Button
        href="https://apply.fynncredit.com/application"
        text="Complete Your Loan"
      />
      <Divider />
      <P>Hi {name},</P>
      <P>
        To complete your loan and avoid losing your approval, you must select
        your loan amount soon! Choosing a loan amount only takes 2 minutes.
        Click the button above, or log into your Fynn account to complete this
        step.
      </P>
    </BaseLayout>
  );
};

export default TuitionRequestReminder6;
