import { MjmlImage } from "mjml-react";
import BaseLayout from "./components/BaseLayout";
import { colors } from "./components/theme";
import assetUrl from "./util/assetUrl";
import P from "./components/P";
import Headline from "./components/Headline";

const ApplicationComplete = ({ name, schoolName }) => {
  return (
    <BaseLayout backgroundColor={colors.green} centerLogo>
      <MjmlImage
        src={assetUrl("/assets/jumping-man.png")}
        alt="celebratory person"
        height="160px"
        width="136.3px"
        paddingTop="42px"
        paddingBottom="14px"
      />
      <Headline align="center" cssClass="header-lg">
        You’re ready to attend your program!
      </Headline>
      <MjmlImage
        src={assetUrl("/assets/squiggle.png")}
        alt="squiggle separator"
        padding="0px"
        width="107px"
        paddingTop="32px"
        paddingBottom="32px"
      />
      <P>
        <b>Hi {name},</b>
      </P>
      <P>
        You’re all set with a Fynn loan and are ready to attend {schoolName}!
      </P>
      <P>
        We’ll reach out shortly after your first day with more information about
        your loan and how to log into your borrower portal.
      </P>
      <P>
        Your borrower portal will allow you to view your loan balance, make
        payments, and more.
      </P>
      <P>We’re excited to be a part of your success at {schoolName}!</P>
    </BaseLayout>
  );
};

export default ApplicationComplete;
