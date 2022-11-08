import { MjmlText } from "mjml-react";

export default function Li({ children }) {
  return <MjmlText padding="2px 0 2px 8px">•&nbsp;{children}</MjmlText>;
}
