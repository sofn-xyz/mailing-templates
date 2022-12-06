import {
  Mjml,
  MjmlBody,
  MjmlHead,
  MjmlFont,
  MjmlStyle,
  MjmlAttributes,
  MjmlAll,
} from "mjml-react";
import { colors, spacing, screens, themeDefaults } from "../theme";
import cssHelpers from "../util/cssHelpers";

type LayoutProps = {
  backgroundColor?: string;
  children: React.ReactNode;
};

export default function Layout({ children, backgroundColor }: LayoutProps) {
  return (
    <Mjml>
      <MjmlHead>
        <MjmlFont
          name="Albert Sans"
          href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@500;900"
        />
        <MjmlStyle>{`
          body {
            background-color: ${colors.yellow};
          }
          .bg-none {
            background: none !important;
          }
          .gutter {
            padding-left: ${spacing.mobileGutter}px !important;
            padding-right: ${spacing.mobileGutter}px !important;
          }
          @media (min-width: ${screens.xs}) {
            .gutter {
              padding-left: ${spacing.desktopGutter}px !important;
              padding-right: ${spacing.desktopGutter}px !important;
            }
          }

          ${cssHelpers}
      `}</MjmlStyle>
        <MjmlAttributes>
          <MjmlAll {...themeDefaults} />
        </MjmlAttributes>
      </MjmlHead>

      <MjmlBody width={600} backgroundColor={backgroundColor}>
        {children}
      </MjmlBody>
    </Mjml>
  );
}
