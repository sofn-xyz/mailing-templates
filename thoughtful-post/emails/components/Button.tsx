import { MjmlButton } from "mjml-react";

import {
  colors,
  fontSize,
  lineHeight,
  borderRadius,
  fontWeight,
} from "../theme";
import accessibleColor from "../util/accessibleColor";

type ButtonProps = React.ComponentProps<typeof MjmlButton>;

export default function Button(props: ButtonProps) {
  return (
    <MjmlButton
      lineHeight={lineHeight.tight}
      fontSize={fontSize.lg}
      fontWeight={fontWeight.bold}
      color={accessibleColor(colors.brandPrimary, colors.black, colors.white)}
      innerPadding="16px 24px"
      backgroundColor={colors.brandPrimary}
      borderRadius={borderRadius.full}
      {...props}
    />
  );
}
