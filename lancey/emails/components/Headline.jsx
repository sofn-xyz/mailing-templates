import { MjmlText } from "mjml-react";
import { fontSize, fontFamily, lineHeight } from "./theme";

export default function Headline({ children, maxWidth, ...props }) {
  return (
    <MjmlText
      fontSize={fontSize.xl}
      fontFamily={fontFamily.sans}
      fontWeight="bold"
      lineHeight={lineHeight.tight}
      paddingBottom="16px"
      {...props}
    >
      <div style={{ maxWidth }}>{children}</div>
    </MjmlText>
  );
}
