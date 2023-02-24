import { colors } from "../theme";

export default function Link(props: any) {
  return (
    <a
      target="_blank"
      rel="noopener"
      {...props}
      style={{
        ...props.style,
        color: colors.blue,
        textDecoration: "none",
      }}
    />
  );
}
