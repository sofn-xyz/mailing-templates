import { MjmlSpacer } from "mjml-react";

type SpacerProps = {
  sm?: React.ComponentProps<typeof MjmlSpacer>;
  lg?: React.ComponentProps<typeof MjmlSpacer>;
} & React.ComponentProps<typeof MjmlSpacer>;

export default function Spacer({ sm, lg, ...props }: SpacerProps) {
  return (
    <>
      <MjmlSpacer {...props} {...lg} cssClass="sm-hidden" />
      <MjmlSpacer {...props} {...sm} cssClass="lg-hidden" />
    </>
  );
}
