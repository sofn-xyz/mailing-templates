import { MjmlButton } from "mjml-react";

import {
  colors,
  fontSize,
  lineHeight,
  borderRadius,
  fontWeight,
} from "../theme";

type ButtonProps = { secondary?: boolean } & React.ComponentProps<
  typeof MjmlButton
>;

export default function Button({ secondary, ...props }: ButtonProps) {
  let secondaryStyles = {};
  if (secondary) {
    secondaryStyles = {
      color: colors.blue,
      backgroundColor: colors.white,
    };
  }
  return (
    <MjmlButton
      lineHeight={lineHeight.tight}
      fontSize={fontSize.lg}
      fontWeight={fontWeight.normal}
      color={colors.white}
      textTransform="uppercase"
      innerPadding="20px 32px"
      backgroundColor={colors.blue}
      borderRadius={borderRadius.base}
      border={`1px solid ${colors.black}`}
      align="left"
      {...props}
      {...secondaryStyles}
    />
  );
}
