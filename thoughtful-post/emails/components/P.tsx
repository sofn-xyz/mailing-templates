import { MjmlText } from "mjml-react";

type PProps = {
  maxWidth?: number;
} & React.ComponentProps<typeof MjmlText>;

export default function P({ children, maxWidth, ...props }: PProps) {
  return (
    <MjmlText {...props}>
      <div style={{ maxWidth }}>{children}</div>
    </MjmlText>
  );
}
