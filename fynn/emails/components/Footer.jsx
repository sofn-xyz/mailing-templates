import { MjmlSection, MjmlColumn, MjmlText, MjmlImage } from "mjml-react";
import { colors, fontSize } from "./theme";
import assetUrl from "../util/assetUrl";

export default function Footer() {
  return (
    <>
      <MjmlSection paddingBottom={"0px"}>
        <MjmlColumn width="50px" cssClass="social-icon">
          <MjmlImage
            href="https://twitter.com/fynncredit"
            src={assetUrl("/assets/twitter.png")}
            alt="Twitter Logo"
            height="40px"
            width="40px"
            padding="0"
          />
        </MjmlColumn>
        <MjmlColumn width="50px" cssClass="social-icon">
          <MjmlImage
            href="https://www.instagram.com/fynncredit"
            src={assetUrl("/assets/instagram.png")}
            alt="Instagram Logo"
            height="40px"
            width="40px"
            padding="0"
          />
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection cssClass="footer smooth">
        <MjmlColumn>
          <MjmlText
            fontSize={fontSize.xs}
            color={colors.grayDark}
            align="center"
          >
            © Fynn, Inc. All Rights Reserved.
            <br />
            1800 Fynn Street · Suite 5000 · New York, NY 10010
            <br />
            Unsubscribe ·{" "}
            <a href="https://fynncredit.com/websiteTOS.htm">
              Terms of Use
            </a> · <a href="https://fynncredit.com/privacy">Privacy Policy</a>
          </MjmlText>
          <MjmlText
            fontSize={fontSize.xs}
            color={colors.grayDark}
            align="center"
          >
            Loans are originated by Fynn, Inc. (“Fynn”), and the loans are not
            endorsed by any schools. Fynn is also not affiliated with any
            school. Fynn’s loans are private loans, and they do not have the
            same terms, repayment options, or rates as those offered through
            federal loan programs, other private lenders, or school-based
            financing options
          </MjmlText>
          <MjmlText
            fontSize={fontSize.xs}
            color={colors.grayDark}
            align="center"
          >
            Annual Percentage Rates (“APRs”) on loans range from 7.99% to
            28.99%. Actual APRs may vary based on several factors, including
            your educational program, your state of residence, applicable
            lending laws and regulations, your credit history, and any
            applicable fees.
          </MjmlText>
          <MjmlText
            fontSize={fontSize.xs}
            color={colors.grayDark}
            align="center"
          >
            Applicable fees and interest rates are outlined in your loan
            documentation, including your loan disclosures and credit agreement.
          </MjmlText>
          <MjmlText
            fontSize={fontSize.xs}
            color={colors.grayDark}
            align="center"
          >
            Consumers may contact Fynn by email at:{" "}
            <a href="mailto:help@fynncredit.com">help@fynncredit.com</a>.
          </MjmlText>

          <MjmlImage
            href="https://fynncredit.com"
            src={assetUrl("/assets/logo.png")}
            alt="Fynn Logo"
            height="16px"
            width="13.78px"
            paddingTop="16px"
          />
        </MjmlColumn>
      </MjmlSection>
    </>
  );
}
