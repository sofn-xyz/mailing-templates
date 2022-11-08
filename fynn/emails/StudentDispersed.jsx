import { MjmlImage } from "mjml-react";
import BaseLayout from "./components/BaseLayout";
import { colors } from "./components/theme";
import assetUrl from "./util/assetUrl";
import P from "./components/P";
import Headline from "./components/Headline";

const StudentDispersed = ({ name, schoolName }) => {
  return (
    <BaseLayout backgroundColor={colors.white}>
      <MjmlImage
        src={assetUrl("/assets/balloons.png")}
        alt="balloons"
        height="48px"
        width="48px"
        align="left"
        padding="42px 0 32px"
      />
      <Headline paddingBottom="32px" cssClass="header-xl">
        We’ve officially sent your tuition to your school
      </Headline>
      <P>Hi {name},</P>
      <P>
        We’ve sent your tuition to your school today. This means two things:
      </P>
      <P>1.&nbsp;&nbsp;Your interest officially starts accruing today.</P>
      <P>
        2.&nbsp;&nbsp;Next week, you will receive a text and email about how to
        log into your borrower portal. You can manage all aspects of your loan
        in your borrower portal.
      </P>
      <P>
        As always, please feel free to reach out with any questions. We’re
        excited for your success at {schoolName}.
      </P>
    </BaseLayout>
  );
};

export default StudentDispersed;
