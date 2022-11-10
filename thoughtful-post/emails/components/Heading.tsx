import { MjmlText } from "mjml-react";
import { fontSize, fontFamily, lineHeight, fontWeight } from "../theme";

type StandardHeadingProps = {
  maxWidth?: number;
} & React.ComponentProps<typeof MjmlText>;

type HeadingProps = {
  lg?: Partial<StandardHeadingProps>;
  sm?: Partial<StandardHeadingProps>;
} & StandardHeadingProps;

export default function Heading({ lg, sm, maxWidth, ...props }: HeadingProps) {
  const defaultProps = {
    fontFamily: fontFamily.sans,
    fontWeight: fontWeight.extrabold,
    lineHeight: lineHeight.tight,
  };

  return (
    <>
      <MjmlText {...defaultProps} {...props} {...lg} cssClass="lg:hidden">
        <div style={{ maxWidth, margin: "auto" }}>{props.children}</div>
      </MjmlText>
      <MjmlText {...defaultProps} {...props} {...sm} cssClass="sm:hidden">
        <div style={{ maxWidth, margin: "auto" }}>{props.children}</div>
      </MjmlText>
    </>
  );
}
