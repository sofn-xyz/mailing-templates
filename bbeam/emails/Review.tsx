import {
  MjmlSection,
  MjmlColumn,
  MjmlDivider,
  MjmlGroup,
  MjmlWrapper,
  MjmlRaw,
  MjmlImage,
} from "mjml-react";
import Layout from "./components/Layout";
import Button from "./components/Button";
import Heading from "./components/Heading";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Text from "./components/Text";
import Link from "./components/Link";
import { fontSize, colors, fontFamily, borderRadius } from "./theme";
import assetUrl from "./util/assetUrl";

type ReviewProps = {
  email: string;
  name: string;
};

const ReviewButton = (value: "thumbsUp" | "thumbsDown") => {
  const values = {
    thumbsUp: {
      url: "#",
      imageSrc: assetUrl("/assets/thumbsup.png"),
      text: "It was great",
    },
    thumbsDown: {
      url: "#",
      imageSrc: assetUrl("/assets/thumbsdown.png"),
      text: "Not so great",
    },
  };
  return (
    <MjmlRaw>
      <tr>
        <td align="center">
          <a
            href={values[value].url}
            style={{
              fontFamily: fontFamily.sans,
              fontSize: fontSize.base,
              textDecoration: "none",
              color: colors.black,
            }}
          >
            <table
              border={0}
              cellPadding={0}
              cellSpacing={0}
              role="presentation"
              width="100%"
              style={{
                tableLayout: "fixed",
                backgroundColor: colors.blue,
                borderRadius: borderRadius.base,
                borderColor: colors.black,
                borderWidth: "1px",
                borderStyle: "solid",
                borderCollapse: "separate",
                padding: 24,
              }}
            >
              <tr>
                <td align="center">
                  <img height={33} width={33} src={values[value].imageSrc} />
                </td>
              </tr>
              <tr>
                <td align="center">
                  <p
                    style={{
                      fontFamily: fontFamily.sans,
                      fontSize: fontSize.base,
                      textDecoration: "none",
                      textTransform: "uppercase",
                      color: colors.white,
                      paddingTop: 16,
                    }}
                  >
                    {values[value].text}
                  </p>
                </td>
              </tr>
            </table>
          </a>
        </td>
      </tr>
    </MjmlRaw>
  );
};

export default function Review({ email, name }: ReviewProps) {
  return (
    <Layout>
      <Header />

      <MjmlWrapper
        fullWidth={true}
        backgroundColor={colors.white}
        backgroundUrl={assetUrl("/assets/review-strip.png")}
        backgroundSize="100% 1px"
      >
        <MjmlSection cssClass="gutter">
          <MjmlColumn>
            <MjmlImage
              src={assetUrl("/assets/review-nudge.png")}
              height={1}
              width={1}
              align="right"
              paddingTop={0}
            />
          </MjmlColumn>
        </MjmlSection>
      </MjmlWrapper>

      <MjmlWrapper fullWidth={true} backgroundColor={colors.white}>
        <MjmlSection cssClass="gutter" paddingTop={64} paddingBottom={48}>
          <MjmlColumn>
            <Heading fontSize={fontSize.xxxl} paddingBottom={24}>
              {name}, how was lorem ipsum dolor?
            </Heading>
            <Text fontSize={fontSize.lg}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </Text>
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection cssClass="gutter" paddingBottom={58}>
          <MjmlGroup>
            <MjmlColumn paddingRight={"6px"}>
              {ReviewButton("thumbsUp")}
            </MjmlColumn>
            <MjmlColumn paddingLeft={"12px"}>
              {ReviewButton("thumbsDown")}
            </MjmlColumn>
          </MjmlGroup>
        </MjmlSection>
        <MjmlSection cssClass="gutter">
          <MjmlColumn>
            <MjmlDivider borderWidth={1} borderColor={colors.black} />
          </MjmlColumn>
        </MjmlSection>

        <MjmlSection cssClass="gutter" paddingBottom={72} paddingTop={60}>
          <MjmlColumn>
            <Heading fontSize={fontSize.xl} paddingBottom={24}>
              Hi {name},
            </Heading>
            <Text fontSize={fontSize.lg} paddingBottom={28}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam,{" "}
              <Link href="#">eaque ipsa quae</Link> ab illo{" "}
              <Link href="#">inventore veritatis</Link> et quasi architecto
              beatae vitae dicta sunt explicabo.
            </Text>
            <Button href="#" fontSize={fontSize.lg}>
              Call to action
            </Button>
            <MjmlDivider
              borderWidth={1}
              borderColor={colors.black}
              paddingTop={52}
              paddingBottom={48}
            />
            <Heading fontSize={fontSize.xl} paddingBottom={24}>
              Some secondary content
            </Heading>
            <Text fontSize={fontSize.lg} paddingBottom={24}>
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est, omnis dolor.
            </Text>
            <Text fontSize={fontSize.lg} color={colors.gray}>
              Et harum quidem rerum facilis est et expedita distinctio.
            </Text>
          </MjmlColumn>
        </MjmlSection>
      </MjmlWrapper>

      <Footer email={email} />
    </Layout>
  );
}
