import {
  MjmlHead,
  MjmlAttributes,
  MjmlAll,
  MjmlStyle,
  MjmlFont,
} from "mjml-react";
import {
  fontFamily,
  lineHeight,
  fontSize,
  colors,
  borderRadius,
  spacing,
} from "./theme";

export default function Head({ children, style }) {
  return (
    <MjmlHead>
      <MjmlFont
        name="Montserrat"
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700"
      />
      <MjmlStyle>{`
        .smooth {
          -webkit-font-smoothing: antialiased;
        }
        .main-section {
          border-radius: ${borderRadius.base}px;
          border: 2px solid ${colors.navy};
          background-color: ${colors.white};
          box-shadow: 4px 4px ${colors.navy};
          padding-top: 48px;
          padding-bottom: 48px;
          padding-left: ${spacing.desktopGutter}px !important;
          padding-right: ${spacing.desktopGutter}px !important;
        }
        .header-sm div {
          font-size: ${fontSize.sm}px !important;
        }
        .header-md div {
          font-size: ${fontSize.md}px !important;
        }
        .header-lg div {
          font-size: ${fontSize.lg}px !important;
        }
        .header-xl div {
          font-size: ${fontSize.xl}px !important;
        }

        @media (max-width:480px) {
          .main-section {
            padding-top: 24px !important;
            padding-left: ${spacing.mobileGutter}px !important;
            padding-right: ${spacing.mobileGutter}px !important;
          }
          .header-lg div {
            font-size: 30px !important;
          }
          .header-xl div{
            font-size: 48px !important;
          }
          .desktop-spacer div {
            height: 0 !important;
          }
        }

        ${style}
      `}</MjmlStyle>
      <MjmlAttributes>
        <MjmlAll
          fontFamily={fontFamily.sans}
          fontWeight="400"
          lineHeight={lineHeight.base}
          fontSize={fontSize.base}
          color={colors.black}
          padding="0px"
        />
      </MjmlAttributes>
      {children}
    </MjmlHead>
  );
}
