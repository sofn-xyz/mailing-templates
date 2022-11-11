import { spacing, colors, screens } from "../theme";

const cssHelpers = `
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
  `;

export default cssHelpers;
