import { MjmlSpacer } from "mjml-react";

// Allows for adding spacing on desktop only, has height 0 on mobile.
export default function DesktopSpacer({ ...props } = {}) {
  return <MjmlSpacer {...props} cssClass="desktop-spacer" />;
}
