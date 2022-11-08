import { MjmlText } from "mjml-react";
import { fontSize, fontFamily, lineHeight } from "./theme";

export default function Headline({ cssClass, paddingBottom, align, children }) {
  return (
    <MjmlText
      fontSize={fontSize.xl}
      fontFamily={fontFamily.serif}
      lineHeight={lineHeight.tight}
      cssClass={cssClass}
      align={align}
      padding={`16px 0 ${paddingBottom || "10px"} 0`}
    >
      {children}
    </MjmlText>
  );
}
