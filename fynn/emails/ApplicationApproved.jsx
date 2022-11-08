import { MjmlImage, MjmlSpacer } from "mjml-react";
import BaseLayout from "./components/BaseLayout";
import Button from "./components/Button";
import assetUrl from "./util/assetUrl";
import P from "./components/P";
import Headline from "./components/Headline";

const ApplicationApproved = ({ name, schoolName }) => {
  return (
    <BaseLayout>
      <MjmlImage
        src={assetUrl("/assets/balloons.png")}
        alt="balloons"
        height="48px"
        width="48px"
        align="left"
        padding="42px 0 32px"
      />
      <Headline paddingBottom="32px" cssClass="header-md">
        You’re approved for a loan up to $15,000!
      </Headline>
      <P>Hi {name},</P>
      <P>
        Congratulations! You have been approved for a Fynn loan to attend{" "}
        {schoolName}.
      </P>
      <P>
        Now it’s time to select your loan amount and verify your identity; click
        the button below to complete your loan.
      </P>
      <Button
        href="https://apply.fynncredit.com/application"
        text="Complete Your Loan"
      />
      <MjmlSpacer height="16px" />
      <P>We’re excited to be a part of your success at {schoolName}!</P>
    </BaseLayout>
  );
};

export default ApplicationApproved;
