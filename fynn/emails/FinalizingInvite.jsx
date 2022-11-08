import BaseLayout from "./components/BaseLayout";
import Divider from "./components/Divider";
import Button from "./components/Button";
import { colors } from "./components/theme";
import P from "./components/P";
import Headline from "./components/Headline";
import HeadlineImage from "./components/HeadlineImage";

const FinalizingInvite = ({ name, schoolName }) => {
  return (
    <BaseLayout backgroundColor={colors.greenDark}>
      <HeadlineImage />
      <Headline cssClass="header-md">
        It’s time to sign your loan documents!
      </Headline>
      <Button
        href="https://apply.fynncredit.com/application"
        text="Sign your loan"
      />
      <Divider />
      <P>Hi {name},</P>
      <P>
        {schoolName} has certified your application, and your contract is ready
        for you to sign. You can complete the last step by clicking the button
        above!
      </P>
    </BaseLayout>
  );
};

export default FinalizingInvite;
