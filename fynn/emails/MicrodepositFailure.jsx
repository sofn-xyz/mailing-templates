import { MjmlText, MjmlImage, MjmlSpacer } from "mjml-react";
import BaseLayout from "./components/BaseLayout";
import Divider from "./components/Divider";
import Button from "./components/Button";
import { colors } from "./components/theme";
import assetUrl from "./util/assetUrl";
import P from "./components/P";
import Headline from "./components/Headline";
import Link from "./components/Link";
import HeadlineImage from "./components/HeadlineImage";
import Li from "./components/Li";

const MicrodepositFailure = ({ name }) => {
  return (
    <BaseLayout backgroundColor={colors.greenDark}>
      <HeadlineImage
        src={assetUrl("/assets/action-required.png")}
        alt="Action required"
        height="33px"
        width="169px"
      />
      <Headline cssClass="header-xl" paddingBottom="0">
        Connect a new account
      </Headline>
      <P>Verify your identity with a different account</P>
      <Button
        href="https://apply.fynncredit.com/application"
        text="Complete Your Loan"
      />
      <Divider />
      <P>Hi {name},</P>
      <P>
        Fynn was not able to verify your identity with the bank account that you
        provided. Some reasons for this include the following:
      </P>
      <Li>The account is not a checking/savings account</Li>
      <Li>The account is too new</Li>
      <Li>The account is overdrawn or closed</Li>
      <Li>You are not the owner of the account</Li>
      <P>Please reattempt the bank linking with a different account.</P>
      <P>
        If you don’t have another account you can quickly and easily create a
        Chime account{" "}
        <Link href="https://www.kqzyfj.com/click-100634244-14415782">here</Link>
        !
      </P>
    </BaseLayout>
  );
};

export default MicrodepositFailure;
