import {
  Mjml,
  MjmlBody,
  MjmlImage,
  MjmlWrapper,
  MjmlSection,
  MjmlColumn,
  MjmlHead,
  MjmlFont,
  MjmlStyle,
  MjmlAttributes,
  MjmlAll,
  MjmlText,
} from "mjml-react";
import Footer from "../components/Footer";
import Link from "../components/Link";
import {
  colors,
  fontFamily,
  lineHeight,
  fontSize,
  fontWeight,
  borderRadius,
  spacing,
  screens,
} from "../theme";
import assetUrl from "../util/assetUrl";

export default function Base({ children }: any) {
  return (
    <Mjml>
      <MjmlHead>
        <MjmlFont
          name="Poppins"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;800"
        />
        <MjmlStyle>{`
          .top-section {
            border-radius: ${borderRadius.base}px ${borderRadius.base}px 0 0;
            padding-top: 28px !important;
          }
          .bottom-section {
            border-radius: 0 0 ${borderRadius.base}px ${borderRadius.base}px;
            padding-bottom: 24px !important;
          }

          /* Utility classes */
          .gutter {
            padding-left: ${spacing.mobileGutter}px !important;
            padding-right: ${spacing.mobileGutter}px !important;
          }
          .border-top {
            border-top: 2px solid ${colors.gray200};
          }
          .no-wrap {
            white-space: nowrap;
          }
          .hidden {
            display: none !important;
          }
          .lg\\:hidden {
            display: none !important;
          }

          @media (min-width: ${screens.xs}) {
            .top-section {
              padding-top: ${spacing.desktopGutter}px !important;
            }

            /* Utility classes */
            .gutter {
              padding-left: ${spacing.desktopGutter}px !important;
              padding-right: ${spacing.desktopGutter}px !important;
            }
            .sm\\:hidden {
              display: none !important;
            }
            .lg\\:hidden {
              display: block !important;
            }
          }
      `}</MjmlStyle>
        <MjmlAttributes>
          <MjmlAll
            fontFamily={fontFamily.sans}
            lineHeight={lineHeight.base}
            fontWeight={fontWeight.normal}
            fontSize={fontSize.base}
            color={colors.black}
            padding={0}
          />
        </MjmlAttributes>
      </MjmlHead>

      <MjmlBody width={640} backgroundColor={colors.backgroundColor}>
        <MjmlWrapper fullWidth={true} padding="24px 20px">
          <MjmlSection
            backgroundColor={colors.white}
            cssClass="top-section gutter"
            paddingBottom={48}
          >
            <MjmlColumn>
              <MjmlImage
                width="110px"
                height="32px"
                align="left"
                src={assetUrl("/assets/logo-full.png")}
              />
            </MjmlColumn>
          </MjmlSection>

          {children}

          <MjmlSection
            backgroundColor={colors.white}
            cssClass="bottom-section gutter border-top"
            paddingTop={20}
          >
            <MjmlColumn>
              <MjmlText fontSize={fontSize.sm} align="center">
                <strong>Need help?</strong> We’re here for you!{" "}
                <Link
                  color={colors.black}
                  textDecoration="underline"
                  href="https://thoughtfulpost.com"
                >
                  Reach out
                </Link>{" "}
                anytime.
              </MjmlText>
            </MjmlColumn>
          </MjmlSection>
          <Footer />
        </MjmlWrapper>
      </MjmlBody>
    </Mjml>
  );
}
