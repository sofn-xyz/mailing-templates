import { MjmlImage } from "mjml-react";
import assetUrl from "../util/assetUrl";

type HeadlineImageProps = {
  src?: string;
  alt?: string;
  height?: string;
  width?: string;
};

export default function HeadlineImage(props: HeadlineImageProps) {
  return (
    <MjmlImage
      src={assetUrl("/assets/reminder.png")}
      alt="Reminder"
      height="32px"
      width="112px"
      paddingTop="42px"
      align="left"
      padding="0"
      {...props}
    />
  );
}
