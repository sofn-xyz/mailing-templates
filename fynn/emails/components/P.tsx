import { MjmlText } from "mjml-react";

type PProps = {
  children: React.ReactNode;
};

export default function P({ children }: PProps) {
  return <MjmlText padding="8px 0">{children}</MjmlText>;
}
