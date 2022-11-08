import BaseLayout from "./components/BaseLayout";
import Divider from "./components/Divider";
import Button from "./components/Button";
import { colors } from "./components/theme";
import P from "./components/P";
import Headline from "./components/Headline";
import HeadlineImage from "./components/HeadlineImage";

const FinalizingReminder6 = ({ name }) => {
  return (
    <BaseLayout backgroundColor={colors.greenDark}>
      <HeadlineImage />
      <Headline cssClass="header-md">
        It’s time to sign your loan documents!
      </Headline>
      <Button
        href="https://apply.fynncredit.com/application"
        text="Complete Your Loan"
      />
      <Divider />
      <P>{name},</P>
      <P>
        This may be your last chance to obtain funding from Fynn! Your loan
        approval will be archived soon unless you sign your loan document. Don’t
        let this opportunity go to waste!
      </P>
    </BaseLayout>
  );
};

export default FinalizingReminder6;
