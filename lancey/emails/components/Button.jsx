import { MjmlButton } from "mjml-react";
import { colors, fontSize, lineHeight, borderRadius } from "./theme";

export default function Button({ text, ...props }) {
  return (
    <MjmlButton
      lineHeight={lineHeight.base}
      fontSize={fontSize.base}
      fontWeight="bold"
      color={colors.white}
      innerPadding="16px 24px"
      align="left"
      backgroundColor={colors.orange}
      borderRadius={borderRadius.base}
      {...props}
    >
      {text}
    </MjmlButton>
  );
}
