import { MjmlImage } from "mjml-react";

export default function IconImage(props) {
  return (
    <MjmlImage
      height="48px"
      width="48px"
      align="left"
      paddingBottom="20px"
      {...props}
    />
  );
}
