import { MjmlButton } from "mjml-react";
import { colors, fontSize, lineHeight, borderRadius } from "./theme";

type ButtonProps = {
  href: string;
  text: string;
};

export default function Button({ href, text }: ButtonProps) {
  return (
    <MjmlButton
      lineHeight={lineHeight.base}
      fontSize={fontSize.base}
      color={colors.white}
      innerPadding="12px 24px"
      align="left"
      href={href}
      backgroundColor={colors.blue}
      borderRadius={borderRadius.full}
      padding="16px 0 0 0"
    >
      {text}
    </MjmlButton>
  );
}
