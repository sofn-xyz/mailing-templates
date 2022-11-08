import { MjmlDivider } from "mjml-react";
import { colors } from "./theme";

export default function Divider({ ...props }) {
  return (
    <MjmlDivider
      borderColor={colors.black}
      paddingTop="64px"
      paddingBottom="44px"
      borderWidth="2px"
      {...props}
    />
  );
}
