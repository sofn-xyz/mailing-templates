import {
  Mjml,
  MjmlColumn,
  MjmlSection,
  MjmlImage,
  MjmlBody,
  MjmlWrapper,
  MjmlText,
  MjmlFont,
  MjmlHead,
  MjmlStyle,
  MjmlAll,
  MjmlAttributes,
  MjmlDivider,
  MjmlTable,
  MjmlSpacer,
} from "mjml-react";
import assetUrl from "./util/assetUrl";
import {
  colors,
  fontSize,
  spacing,
  borderRadius,
  themeDefaults,
  fontWeight,
  lineHeight,
} from "./components/theme";
import Headline from "./components/Headline";
import Link from "./components/Link";
import Footer from "./components/Footer";
import Spacer from "./components/Spacer";

type LoanInfo = {
  firstPaymentDate: Date;
  currentDate: Date;
  currentLoanAmount: number;
  initialLoanAmount: number;
  interestRate: number;
  loanTerms: number;
  accruedInterest: number;
  previousPayments: number;
  monthlyPayment: number;
  minimumIncome10: number;
  minimumIncome20: number;
  minimumIncomePause: number;
};

const dollarFormatter = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 0,
  minimumFractionDigits: 0,
  style: "currency",
  currency: "USD",
});

const ExitInterview = ({ loanInfo }: { loanInfo: LoanInfo }) => {
  return (
    <Mjml>
      <MjmlHead>
        <MjmlFont
          name="DM Serif Display"
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap"
        />
        <MjmlStyle>{`
          .smooth {
            -webkit-font-smoothing: antialiased;
          }
          .footer a {
            color: inherit !important;
            text-decoration: none !important;
          }
          .bottom-column a {
            color: inherit !important;
          }
          .social-icon {
            max-width: 60px !important;
            display: inline-block !important;
          }
          .callout-right-col {
            width: 162px;
          }
          .gutter {
            padding-left: ${spacing.desktopGutter}px !important;
            padding-right: ${spacing.desktopGutter}px !important;
          }
          .res-text-xl {
            font-weight: ${fontWeight.bold};
            font-size: 32px;
            line-height: ${lineHeight.base};
          }
          .res-text-lg {
            font-weight: ${fontWeight.bold};
            font-size: 24px;
            line-height: ${lineHeight.base};
          }
          .header-xl div {
            max-width: 410px;
          }
          .no-wrap {
            white-space: nowrap;
          }
          .hidden {
            display: none;
            max-width: 0px;
            max-height: 0px;
            overflow: hidden;
            mso-hide: all;
          }
          .lg-hidden {
            display: none;
            max-width: 0px;
            max-height: 0px;
            overflow: hidden;
            mso-hide: all;
          }
          .top-section {
            background-color: ${colors.white};
            border-top-left-radius: ${borderRadius.base}px;
            border-top-right-radius: ${borderRadius.base}px;
            border: 1px solid ${colors.black};
            border-bottom: none;
          }
          .top-column {
            padding-top: 0px;
            border-top-left-radius: ${borderRadius.base}px;
            border-top-right-radius: ${borderRadius.base}px;
          }
          .middle-section {
            background-color: ${colors.white};
            border-left: 1px solid ${colors.black};
            border-right: 1px solid ${colors.black};
          }
          .middle-column {
            background-color: ${colors.green};
          }
          .bottom-section {
            background-color: ${colors.black};
            border-bottom-left-radius: ${borderRadius.base}px;
            border-bottom-right-radius: ${borderRadius.base}px;
            border: 1px solid ${colors.black};
          }
          .bottom-column {
            padding: 0px;
            border-bottom-left-radius: ${borderRadius.base}px;
            border-bottom-right-radius: ${borderRadius.base}px;
          }

          @media (max-width:480px) {
            .footer td {
              padding: 10px 0px !important;
            }
            .group-img {
              padding-bottom: 28px !important;
            }
            .gutter {
              padding-left: ${spacing.mobileGutter}px !important;
              padding-right: ${spacing.mobileGutter}px !important;
            }
            .res-text-xl {
              font-size: 28px !important;
            }
            .res-text-lg {
              font-size: 20px !important;
            }
            .header-xl div{
              font-size: 30px !important;
            }
            .sm-hidden {
              display: none;
              max-width: 0px;
              max-height: 0px;
              overflow: hidden;
              mso-hide: all;
            }
            .lg-hidden {
              display: block !important;
              max-width: none !important;
              max-height: none !important;
              overflow: visible !important;
              mso-hide: none !important;
            }
            .text-center-sm {
              text-align: center !important;
              width: 100% !important;
            }
            .callout-right-col {
              width: 100% !important;
            }
            .res-table tr {
              display: table !important;
              width: 100% !important;
            }
            .res-table td {
              width: 100% !important;
              display: block !important;
            }
          }
      `}</MjmlStyle>
        <MjmlAttributes>
          <MjmlAll {...themeDefaults} />
        </MjmlAttributes>
      </MjmlHead>

      <MjmlBody width={640} backgroundColor={colors.greenDark}>
        <MjmlWrapper fullWidth={true} padding="32px 20px">
          <MjmlSection paddingBottom="0px" cssClass="main top-section gutter">
            <MjmlColumn
              paddingTop={24}
              paddingBottom={32}
              backgroundColor={colors.white}
              cssClass="top-column"
            >
              <MjmlImage
                href="https://fynncredit.com"
                src={assetUrl("/assets/logo-full.png")}
                alt="Fynn Logo"
                height="28px"
                width="63px"
                paddingTop="0px"
                align={"left"}
              />
              <Spacer lg={{ height: 72 }} sm={{ height: 48 }} />
              <Headline cssClass="header-xl" paddingBottom="0">
                Here are your Exit Counseling takeaways
              </Headline>
            </MjmlColumn>
          </MjmlSection>

          <MjmlSection cssClass="middle-section gutter" paddingBottom={28}>
            <MjmlColumn
              backgroundColor={colors.blueLight}
              padding="32px 20px"
              borderRadius={borderRadius.small}
            >
              <MjmlTable cssClass="res-table text-center-sm">
                <tr>
                  <td valign="middle" style={{ textAlign: "center" }}>
                    <img
                      src={assetUrl("/assets/exit-interview-group.png")}
                      alt=""
                      height="66px"
                      width="146px"
                      style={{ padding: "0 40px" }}
                      className="group-img"
                    />
                  </td>
                  <td valign="middle">
                    <p
                      style={{
                        ...themeDefaults,
                        fontSize: fontSize.sm,
                        padding: "0 0 8px",
                        margin: 0,
                      }}
                    >
                      <strong>Don’t forget!</strong> Reach out to us if you need
                      to activate a Member Benefit.
                    </p>
                    <Link
                      href="https://help.fynncredit.com/hc/en-us/categories/6524455280781-Fynn-Member-Benefits"
                      style={{
                        ...themeDefaults,
                        fontSize: fontSize.sm,
                        fontWeight: fontWeight.bold,
                      }}
                    >
                      Your Member Benefits &rarr;
                    </Link>
                  </td>
                </tr>
              </MjmlTable>
            </MjmlColumn>
          </MjmlSection>

          <MjmlSection cssClass="middle-section gutter" paddingBottom={20}>
            <MjmlColumn>
              <MjmlText fontWeight={fontWeight.bold}>
                Your loan details
              </MjmlText>
            </MjmlColumn>
          </MjmlSection>

          <MjmlSection
            cssClass="middle-section gutter"
            paddingBottom={32}
            textAlign="left"
          >
            <MjmlColumn>
              <MjmlText>
                <span style={{ ...themeDefaults, fontSize: fontSize.xs }}>
                  Balance as of{" "}
                  {loanInfo.currentDate.toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "numeric",
                    year: "2-digit",
                  })}
                </span>
                <br />
                <span
                  className="res-text-xl"
                  style={{
                    color: colors.blue,
                  }}
                >
                  {dollarFormatter.format(loanInfo.currentLoanAmount)}
                </span>
              </MjmlText>
            </MjmlColumn>
            <MjmlColumn verticalAlign={"bottom"} paddingTop={16}>
              <MjmlTable width={200}>
                <tr>
                  <td style={{ padding: "0 32px 8px 0" }} valign="bottom">
                    <div
                      style={{
                        ...themeDefaults,
                        lineHeight: "100%",
                        fontSize: fontSize.xs,
                      }}
                    >
                      Interest rate
                    </div>
                    <span
                      style={{
                        ...themeDefaults,
                        lineHeight: "100%",
                        fontSize: fontSize.xs,
                        fontWeight: fontWeight.bold,
                      }}
                    >
                      {loanInfo.interestRate}%
                    </span>
                  </td>
                  <td style={{ padding: "0 32px 8px 0" }} valign="bottom">
                    <div
                      style={{
                        ...themeDefaults,
                        lineHeight: "100%",
                        fontSize: fontSize.xs,
                      }}
                    >
                      Loan term
                    </div>
                    <span
                      style={{
                        ...themeDefaults,
                        lineHeight: "100%",
                        fontSize: fontSize.xs,
                        fontWeight: fontWeight.bold,
                      }}
                    >
                      {loanInfo.loanTerms} months
                    </span>
                  </td>
                </tr>
              </MjmlTable>
            </MjmlColumn>
          </MjmlSection>

          <MjmlSection cssClass="middle-section gutter" paddingBottom={32}>
            <MjmlColumn
              backgroundColor={colors.gray}
              padding="16px 20px 0"
              borderRadius={borderRadius.small}
            >
              <MjmlTable cssClass="res-table">
                <tr>
                  <td style={{ padding: "0 16px 16px 0" }} valign="top">
                    <span style={{ ...themeDefaults, fontSize: fontSize.xs }}>
                      Initial loan amount
                    </span>
                    <br />
                    <span className="res-text-lg">
                      {dollarFormatter.format(loanInfo.initialLoanAmount)}
                    </span>
                  </td>
                  <td style={{ padding: "0 16px 16px 0" }} valign="top">
                    <span style={{ ...themeDefaults, fontSize: fontSize.xs }}>
                      Accrued interest
                    </span>
                    <br />
                    <span className="res-text-lg">
                      {dollarFormatter.format(loanInfo.accruedInterest)}
                    </span>
                  </td>
                  <td style={{ padding: "0 16px 16px 0" }} valign="top">
                    <span style={{ ...themeDefaults, fontSize: fontSize.xs }}>
                      Previous payments
                    </span>
                    <br />
                    <span className="res-text-lg">
                      {dollarFormatter.format(loanInfo.previousPayments)}
                    </span>
                  </td>
                </tr>
              </MjmlTable>
            </MjmlColumn>
          </MjmlSection>

          <MjmlSection cssClass="middle-section gutter" paddingBottom={20}>
            <MjmlColumn>
              <MjmlDivider paddingBottom={32} borderWidth={1} />
              <MjmlText fontWeight={fontWeight.bold}>
                Your repayment details
              </MjmlText>
            </MjmlColumn>
          </MjmlSection>

          <MjmlSection
            cssClass="middle-section gutter"
            textAlign="left"
            paddingBottom={16}
          >
            <MjmlColumn width={176} paddingBottom={16}>
              <MjmlText>
                <span style={{ ...themeDefaults, fontSize: fontSize.xs }}>
                  Monthly payment
                </span>
                <br />
                <span className="res-text-lg">
                  {dollarFormatter.format(loanInfo.monthlyPayment)}
                </span>
              </MjmlText>
            </MjmlColumn>
            <MjmlColumn paddingBottom={16}>
              <MjmlText>
                <span style={{ ...themeDefaults, fontSize: fontSize.xs }}>
                  First full payment date
                </span>
                <br />
                <span className="res-text-lg">
                  {loanInfo.firstPaymentDate.toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </MjmlText>
            </MjmlColumn>
          </MjmlSection>

          <MjmlSection cssClass="middle-section gutter" paddingBottom={32}>
            <MjmlColumn>
              <MjmlDivider paddingBottom={32} borderWidth={1} />

              <MjmlText fontWeight={fontWeight.bold} paddingBottom={20}>
                Having trouble making payments?
              </MjmlText>
              <MjmlText fontSize={fontSize.sm}>
                Your loan comes with a few great tools that can help to reduce
                your burden. We call them your{" "}
                <Link
                  href="https://help.fynncredit.com/hc/en-us/categories/6524455280781-Fynn-Member-Benefits"
                  style={{ fontWeight: fontWeight.bold }}
                >
                  Member Benefits
                </Link>{" "}
                To activate a Member benefit, give us a call at{" "}
                <a
                  style={{ textDecoration: "none", color: colors.black }}
                  href="tel:8004192188"
                >
                  (800) 419-2118
                </a>{" "}
                and we’ll walk you through the income validation process.
              </MjmlText>
            </MjmlColumn>
          </MjmlSection>

          <MjmlSection cssClass="middle-section gutter" paddingBottom={16}>
            <MjmlColumn
              backgroundColor={colors.gray}
              borderRadius={borderRadius.small}
              padding="20px"
            >
              <MjmlSpacer height={16} />
              <MjmlTable cssClass="res-table text-center-sm">
                <tr>
                  <td valign="middle" style={{ textAlign: "center" }}>
                    <img
                      src={assetUrl("/assets/payment-reduction.png")}
                      alt=""
                      height="130px"
                      width="188px"
                      style={{ padding: "0 20px" }}
                    />
                  </td>
                  <td valign="middle">
                    <div className="callout-right-col">
                      <p
                        style={{
                          ...themeDefaults,
                          fontSize: 24,
                          padding: "0 0 8px",
                          margin: 0,
                          color: colors.blue,
                          fontWeight: fontWeight.bold,
                          lineHeight: lineHeight.snug,
                        }}
                      >
                        Payment Reduction
                      </p>
                      <p
                        style={{
                          ...themeDefaults,
                          fontSize: fontSize.sm,
                          padding: "0 0 8px",
                          margin: 0,
                        }}
                      >
                        Shrink your payments by up to 20%
                      </p>
                    </div>
                  </td>
                </tr>
              </MjmlTable>
              <MjmlSpacer height={16} />
              <MjmlTable cssClass="text-center-sm">
                <tr>
                  <td>
                    <table
                      border={0}
                      cellPadding={0}
                      cellSpacing={0}
                      role="presentation"
                      width="100%"
                      style={{
                        ...themeDefaults,
                        backgroundColor: colors.white,
                        borderRadius: borderRadius.small,
                        border: `1px solid ${colors.grayDark}`,
                        fontSize: fontSize.xs,
                      }}
                    >
                      <tr>
                        <td
                          className="sm-hidden"
                          style={{
                            padding: "16px 0 16px 31px",
                            textAlign: "center",
                          }}
                          valign="middle"
                          width={40}
                        >
                          <img
                            src={assetUrl("/assets/one-dollar.png")}
                            alt=""
                            height="29px"
                            width="32px"
                            className="sm-hidden"
                          />
                        </td>
                        <td style={{ padding: "16px 31px" }} valign="middle">
                          Fynn will pay <strong>10%</strong> of your payment if
                          you’re making less than{" "}
                          <strong>
                            {dollarFormatter.format(loanInfo.minimumIncome10)}
                          </strong>{" "}
                          a month.
                        </td>
                      </tr>
                      <tr style={{ borderTop: `1px solid ${colors.grayDark}` }}>
                        <td
                          className="sm-hidden"
                          style={{
                            padding: "16px 0 16px 31px",
                            textAlign: "center",
                          }}
                          valign="middle"
                          width={40}
                        >
                          <img
                            src={assetUrl("/assets/two-dollars.png")}
                            alt=""
                            height="29px"
                            width="40px"
                          />
                        </td>
                        <td
                          style={{
                            padding: "16px 31px",
                          }}
                          valign="middle"
                        >
                          Fynn will pay <strong>20%</strong> of your payment if
                          you’re making less than{" "}
                          <strong>
                            {dollarFormatter.format(loanInfo.minimumIncome20)}
                          </strong>{" "}
                          a month.
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </MjmlTable>
            </MjmlColumn>
          </MjmlSection>

          <MjmlSection cssClass="middle-section gutter" paddingBottom={44}>
            <MjmlColumn
              backgroundColor={colors.gray}
              padding="16px"
              borderRadius={borderRadius.small}
            >
              <MjmlSpacer height={16} />
              <MjmlTable cssClass="res-table text-center-sm">
                <tr>
                  <td valign="middle" style={{ textAlign: "center" }}>
                    <img
                      src={assetUrl("/assets/payment-pause.png")}
                      alt=""
                      height="138px"
                      width="188px"
                      style={{ padding: "0 20px" }}
                    />
                  </td>
                  <td valign="middle">
                    <div className="callout-right-col">
                      <p
                        style={{
                          ...themeDefaults,
                          fontSize: 24,
                          paddingBottom: 8,
                          margin: 0,
                          color: colors.blue,
                          fontWeight: fontWeight.bold,
                          lineHeight: lineHeight.snug,
                        }}
                      >
                        Payment pause
                      </p>
                      <p
                        style={{
                          ...themeDefaults,
                          fontSize: fontSize.sm,
                          padding: "0 0 8px",
                          margin: 0,
                        }}
                      >
                        Pause your payments for up to 12 months over the life of
                        your loan
                      </p>
                    </div>
                  </td>
                </tr>
              </MjmlTable>
              <MjmlSpacer height={16} />
              <MjmlTable cssClass="text-center-sm">
                <tr>
                  <td>
                    <table
                      border={0}
                      cellPadding={0}
                      cellSpacing={0}
                      role="presentation"
                      width="100%"
                      style={{
                        ...themeDefaults,
                        backgroundColor: colors.white,
                        borderRadius: borderRadius.small,
                        border: `1px solid ${colors.grayDark}`,
                        fontSize: fontSize.xs,
                      }}
                    >
                      <tr>
                        <td
                          className="sm-hidden"
                          style={{
                            padding: "16px 0 16px 31px",
                            textAlign: "center",
                          }}
                          valign="middle"
                          width={40}
                        >
                          <img
                            src={assetUrl("/assets/pause.png")}
                            alt=""
                            height="31px"
                            width="31px"
                          />
                        </td>
                        <td style={{ padding: "16px 31px" }} valign="middle">
                          If you’re making less than{" "}
                          <strong>
                            {dollarFormatter.format(
                              loanInfo.minimumIncomePause
                            )}
                          </strong>{" "}
                          a month, you can qualify to pause your payments for up
                          to <strong>3 months</strong>.
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </MjmlTable>
            </MjmlColumn>
          </MjmlSection>

          <MjmlSection padding="0" cssClass="bottom-section gutter">
            <MjmlColumn
              padding="24px 0"
              backgroundColor={colors.black}
              cssClass="bottom-column"
            >
              <MjmlText
                color={colors.white}
                fontSize={fontSize.sm}
                align="center"
              >
                <b>Questions?</b> Email us at{" "}
                <a href="mailto:help@fynncredit.com">help@fynncredit.com</a> or
                call{" "}
                <span style={{ display: "inline-block" }}>(505) 806-2054.</span>
              </MjmlText>
            </MjmlColumn>
          </MjmlSection>
          <Footer />
        </MjmlWrapper>
      </MjmlBody>
    </Mjml>
  );
};

export default ExitInterview;
