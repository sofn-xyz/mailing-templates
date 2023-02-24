import {
  MjmlSection,
  MjmlColumn,
  MjmlWrapper,
  MjmlImage,
  MjmlGroup,
  MjmlRaw,
} from "mjml-react";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import Link from "./components/Link";
import Text from "./components/Text";
import { fontSize, colors, borderRadius, themeDefaults } from "./theme";
import assetUrl from "./util/assetUrl";
import React from "react";

export type InvoiceData = {
  billingPeriod: string; // "Nov 1-30"
  total: number; // 1000
};
type InvoiceProps = {
  email: string;
  name: string;
  invoice: InvoiceData;
};

const InvoiceRow = ({
  left,
  right,
}: {
  left: React.ReactNode;
  right: React.ReactNode;
}) => {
  return (
    <MjmlSection cssClass="gutter" paddingTop={12} paddingBottom={12}>
      <MjmlGroup>
        <MjmlColumn>
          <Text>{left}</Text>
        </MjmlColumn>
        <MjmlColumn>
          <Text align="right">{right}</Text>
        </MjmlColumn>
      </MjmlGroup>
    </MjmlSection>
  );
};

const dollarFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function Invoice({ email, name, invoice }: InvoiceProps) {
  return (
    <Layout>
      <MjmlWrapper
        fullWidth={true}
        padding="32px 0"
        backgroundColor={colors.yellow}
      >
        <MjmlSection cssClass="gutter">
          <MjmlRaw>
            <tr>
              <td>
                <table
                  border={0}
                  cellPadding={0}
                  cellSpacing={0}
                  role="presentation"
                  width="100%"
                >
                  <tr>
                    <td align="left">
                      <img
                        src={assetUrl("/assets/logo-yellow.png")}
                        alt="BBeam Logo"
                        height="48px"
                        width="43px"
                      />
                    </td>
                    <td align="right">
                      <span
                        style={{
                          ...themeDefaults,
                          color: colors.black,
                          fontSize: fontSize.sm,
                        }}
                      >
                        <strong>{invoice.billingPeriod}</strong>
                      </span>
                      <br />
                      <span
                        style={{
                          ...themeDefaults,
                          color: colors.black,
                          fontSize: fontSize.sm,
                        }}
                      >
                        Billing period
                      </span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </MjmlRaw>
        </MjmlSection>
      </MjmlWrapper>

      <MjmlWrapper fullWidth={true} backgroundColor={colors.yellow}>
        <MjmlSection cssClass="gutter" paddingTop={64} paddingBottom={8}>
          <MjmlColumn>
            <Heading
              fontSize={fontSize.xxxl}
              paddingBottom={24}
              color={colors.black}
              maxWidth={420}
              lg={{
                fontSize: fontSize.xxxxl,
              }}
            >
              Thanks for using BBeam
            </Heading>
            <Text fontSize={fontSize.xl} color={colors.black} maxWidth={412}>
              Your subscription continues and you’ve been charged.
            </Text>
          </MjmlColumn>
        </MjmlSection>
      </MjmlWrapper>

      <MjmlWrapper
        fullWidth={true}
        backgroundColor={colors.white}
        backgroundUrl={assetUrl("/assets/invoice-strip.png")}
        backgroundSize="100% 100px"
      >
        <MjmlSection cssClass="gutter">
          <MjmlColumn>
            <MjmlImage
              src={assetUrl("/assets/sun.png")}
              height={84}
              width={84}
              align="right"
              paddingTop={16}
            />
          </MjmlColumn>
        </MjmlSection>
      </MjmlWrapper>

      <MjmlWrapper
        fullWidth={true}
        backgroundColor={colors.white}
        paddingTop={40}
      >
        <MjmlSection cssClass="gutter">
          <MjmlGroup>
            <MjmlColumn>
              <Heading
                fontSize={fontSize.xxl}
                paddingBottom={24}
                lg={{
                  fontSize: fontSize.xxxl,
                }}
              >
                Total
              </Heading>
            </MjmlColumn>
            <MjmlColumn>
              <Heading
                fontSize={fontSize.xxl}
                paddingBottom={24}
                align="right"
                lg={{
                  fontSize: fontSize.xxxl,
                }}
              >
                {dollarFormatter.format(invoice.total)}
              </Heading>
            </MjmlColumn>
          </MjmlGroup>
        </MjmlSection>
        <MjmlSection cssClass="gutter" paddingBottom={48}>
          <MjmlColumn>
            <Text>You saved $2.00 because your first week was free.</Text>
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection cssClass="gutter" paddingBottom={36}>
          <MjmlColumn
            padding={32}
            border={`1px solid ${colors.black}`}
            borderRadius={borderRadius.base}
          >
            <Text fontSize={fontSize.base}>
              <strong>Questions about your bill?</strong> Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod{" "}
              <Link href="#">tempor incididunt</Link>.
            </Text>
          </MjmlColumn>
        </MjmlSection>

        <MjmlSection cssClass="gutter" paddingTop={12} paddingBottom={12}>
          <MjmlColumn borderBottom={`1px solid ${colors.black}`} />
        </MjmlSection>

        <InvoiceRow
          left={
            <span className="no-wrap">
              <strong>4TB Storage</strong>{" "}
              <span style={{ fontSize: fontSize.sm }}>
                (4 weeks x {dollarFormatter.format(3.0)})
              </span>
            </span>
          }
          right={<strong>{dollarFormatter.format(12.0)}</strong>}
        />

        <MjmlSection cssClass="gutter" paddingTop={12} paddingBottom={12}>
          <MjmlColumn borderBottom={`1px solid ${colors.gray}`} />
        </MjmlSection>

        <InvoiceRow
          left={<strong>Subtotal</strong>}
          right={<strong>{dollarFormatter.format(12.0)}</strong>}
        />

        <InvoiceRow
          left={"Discounted Item"}
          right={
            <span style={{ color: colors.green }}>
              -{dollarFormatter.format(3.0)}
            </span>
          }
        />

        <InvoiceRow
          left={
            <>
              <span>Legal item</span>
              <a href="#">
                <img
                  height={16}
                  width={16}
                  src={assetUrl("/assets/question-mark.png")}
                  style={{
                    verticalAlign: "text-bottom",
                    paddingLeft: 8,
                    paddingBottom: 2,
                    marginTop: -4,
                  }}
                />
              </a>
            </>
          }
          right={dollarFormatter.format(0.5)}
        />

        <InvoiceRow left={"Regular item"} right={dollarFormatter.format(0.5)} />

        <MjmlSection cssClass="gutter" paddingTop={12} paddingBottom={72}>
          <MjmlColumn>
            <Text fontSize={14} color={colors.gray}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </Text>
          </MjmlColumn>
        </MjmlSection>
      </MjmlWrapper>

      <Footer email={email} />
    </Layout>
  );
}
