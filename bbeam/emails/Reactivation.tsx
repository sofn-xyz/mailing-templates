import { MjmlSection, MjmlColumn, MjmlWrapper, MjmlImage } from "mjml-react";
import Layout from "./components/Layout";
import Button from "./components/Button";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Heading from "./components/Heading";
import Text from "./components/Text";
import { fontSize, colors } from "./theme";
import assetUrl from "./util/assetUrl";
import Spacer from "./components/Spacer";

type ReactivationProps = {
  email: string;
};

export default function Reactivation({ email }: ReactivationProps) {
  return (
    <Layout>
      <Header />

      <MjmlWrapper fullWidth={true} backgroundColor={colors.yellow}>
        <MjmlSection cssClass="gutter">
          <MjmlColumn>
            <Spacer lg={{ height: 64 }} sm={{ height: 32 }} />
          </MjmlColumn>
        </MjmlSection>

        <MjmlSection
          cssClass="gutter bg-none"
          backgroundRepeat="no-repeat"
          backgroundUrl={assetUrl("/assets/reactivation-bg.png")}
          backgroundSize="contain"
        >
          <MjmlColumn paddingBottom={96}>
            <Spacer lg={{ height: 214 }} sm={{ height: 158 }} />
            <Heading
              fontSize={36}
              maxWidth={430}
              paddingBottom={24}
              lg={{
                fontSize: fontSize.xxxl,
              }}
            >
              We haven’t seen you in a while.
            </Heading>
            <Text paddingBottom={36} maxWidth={478} fontSize={fontSize.xl}>
              Get a free month of unlimited storage when you renew your
              subscription.
            </Text>
            <Button href="#" fontSize={fontSize.xl}>
              Get Free Storage
            </Button>
          </MjmlColumn>
        </MjmlSection>
      </MjmlWrapper>

      <Footer email={email} />
    </Layout>
  );
}
