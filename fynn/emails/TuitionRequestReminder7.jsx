import BaseLayout from "./components/BaseLayout";
import Divider from "./components/Divider";
import Button from "./components/Button";
import { colors } from "./components/theme";
import P from "./components/P";
import Headline from "./components/Headline";
import HeadlineImage from "./components/HeadlineImage";
import assetUrl from "./util/assetUrl";

const TuitionRequestReminder7 = ({ name }) => {
  return (
    <BaseLayout backgroundColor={colors.greenDark}>
      <HeadlineImage
        src={assetUrl("/assets/action-required.png")}
        alt="Action required"
        height="33px"
        width="169px"
      />
      <Headline cssClass="header-xl">
        Your chance for funding will be archived soon
      </Headline>
      <Button
        href="https://apply.fynncredit.com/application"
        text="Complete Your Loan"
      />
      <Divider />
      <P>{name},</P>
      <P>
        There’s not much time left to request your tuition amount for your Fynn
        loan! We need to know how much money you will need so that we can verify
        that with your school. If you don’t make a tuition request, your
        application may be archived soon, causing you to lose your accepted
        status.
      </P>
    </BaseLayout>
  );
};

export default TuitionRequestReminder7;
