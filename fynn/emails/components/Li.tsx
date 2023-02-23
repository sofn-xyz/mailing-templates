import { MjmlText } from "mjml-react";

type LiProps = {
  children: React.ReactNode;
};

export default function Li({ children }: LiProps) {
  return <MjmlText padding="2px 0 2px 8px">•&nbsp;{children}</MjmlText>;
}
