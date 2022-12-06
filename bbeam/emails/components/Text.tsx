import { MjmlText } from "mjml-react";

type TextProps = {
  maxWidth?: number;
} & React.ComponentProps<typeof MjmlText>;

export default function Text({ children, maxWidth, ...props }: TextProps) {
  if (maxWidth) {
    return (
      <MjmlText {...props}>
        <div style={{ maxWidth }}>{children}</div>
      </MjmlText>
    );
  } else return <MjmlText {...props}>{children}</MjmlText>;
}
