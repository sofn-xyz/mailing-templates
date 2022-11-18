import { MjmlText, MjmlRaw } from "mjml-react";
import { themeDefaults } from "../theme";

type TextProps = {
  maxWidth?: number;
} & React.ComponentProps<typeof MjmlText>;

export default function Text({ children, maxWidth, ...props }: TextProps) {
  if (maxWidth && props.align == "center") {
    const textStyle = {
      ...themeDefaults,
      ...JSON.parse(
        JSON.stringify({
          fontFamily: props.fontFamily,
          fontSize: props.fontSize,
          fontStyle: props.fontStyle,
          fontWeight: props.fontWeight,
          letterSpacing: props.letterSpacing,
          lineHeight: props.lineHeight,
          textDecoration: props.textDecoration,
          textTransform: props.textTransform,
          color: props.color,
        })
      ),
    };

    const paddingStyle = JSON.parse(
      JSON.stringify({
        paddingLeft: props.paddingLeft,
        paddingRight: props.paddingRight,
        paddingTop: props.paddingTop,
        paddingBottom: props.paddingBottom,
        padding: props.padding,
      })
    );

    return (
      <MjmlRaw>
        <tr>
          <td>
            <div className={props.cssClass} style={paddingStyle}>
              <table
                role="presentation"
                border={0}
                cellPadding={0}
                cellSpacing={0}
                width="100%"
              >
                <tr>
                  <td></td>
                  <td align="center" width="100%" style={textStyle}>
                    <div style={{ maxWidth }}>{children}</div>
                  </td>
                  <td></td>
                </tr>
              </table>
            </div>
          </td>
        </tr>
      </MjmlRaw>
    );
  } else if (maxWidth) {
    return (
      <MjmlText {...props}>
        <div style={{ maxWidth }}>{children}</div>
      </MjmlText>
    );
  } else return <MjmlText {...props}>{children}</MjmlText>;
}
