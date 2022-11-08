import { MjmlText } from "mjml-react";

export default function P({ children, maxWidth, ...props } = {}) {
  return (
    <MjmlText paddingBottom="28px" {...props}>
      <div style={{ maxWidth }}>{children}</div>
    </MjmlText>
  );
}
