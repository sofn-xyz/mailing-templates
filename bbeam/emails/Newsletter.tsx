import { MjmlSection, MjmlColumn, MjmlImage, MjmlWrapper } from "mjml-react";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import Button from "./components/Button";
import Heading from "./components/Heading";
import Text from "./components/Text";
import List from "./components/List";
import Link from "./components/Link";
import { fontSize, colors, borderRadius, lineHeight } from "./theme";
import assetUrl from "./util/assetUrl";
import Spacer from "./components/Spacer";

type NewsletterProps = {
  email: string;
};

const Header = () => {
  return (
    <MjmlWrapper
      fullWidth={true}
      padding="32px 20px"
      backgroundColor={colors.yellow}
    >
      <MjmlSection cssClass="gutter">
        <MjmlColumn>
          <MjmlImage
            width="43px"
            height="48px"
            align="center"
            src={assetUrl("/assets/logo-yellow.png")}
            paddingBottom={16}
          />
          <Text align="center" fontSize={fontSize.sm}>
            Newsletter brought to you by Bbeam
          </Text>
        </MjmlColumn>
      </MjmlSection>
    </MjmlWrapper>
  );
};

const NewsletterSection = ({ children }: { children: React.ReactNode }) => (
  <>
    <MjmlSection
      cssClass="margin-gutter gutter"
      backgroundColor={colors.white}
      borderRadius={borderRadius.base}
    >
      <MjmlColumn paddingBottom={40} paddingTop={40}>
        {children}
      </MjmlColumn>
    </MjmlSection>
    <MjmlSection>
      <MjmlColumn>
        <Spacer height={24} />
      </MjmlColumn>
    </MjmlSection>
  </>
);

export default function Newsletter({ email }: NewsletterProps) {
  return (
    <Layout>
      <Header />

      <MjmlWrapper
        fullWidth={true}
        backgroundColor={colors.yellow}
        paddingBottom={32}
        cssClass="gutter newsletter-gutter"
      >
        <NewsletterSection>
          <Heading fontSize={fontSize.xxl} paddingBottom={32}>
            Here’s space for a headline
          </Heading>

          <MjmlImage
            width="536px"
            align="center"
            src={assetUrl("/assets/placeholder-image.png")}
            paddingBottom={28}
          />

          <Text
            paddingBottom={20}
            fontSize={fontSize.lg}
            lineHeight={lineHeight.loose}
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </Text>
          <Text
            paddingBottom={20}
            fontSize={fontSize.lg}
            lineHeight={lineHeight.loose}
          >
            <strong>Nemo enim ipsam voluptatem.</strong> Quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?
          </Text>

          <List
            items={[
              "Temporibus autem quibusdam et aut",
              "Officiis debitis aut rerumnecessitatibus",
              "Saepe eveniet ut et voluptates repudiandae",
              "Sint et molestiae non recusandae",
            ]}
          />

          <Text
            paddingTop={20}
            paddingBottom={32}
            fontSize={fontSize.lg}
            lineHeight={lineHeight.loose}
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </Text>
          <Button href="#" fontSize={fontSize.lg}>
            Call to action
          </Button>
        </NewsletterSection>

        <NewsletterSection>
          <Heading
            fontSize={fontSize.base}
            color={colors.black}
            paddingBottom={24}
            textTransform="uppercase"
            lg={{ paddingLeft: 8 }}
          >
            Keyword
          </Heading>

          <MjmlImage
            width="536px"
            align="center"
            src={assetUrl("/assets/placeholder-image.png")}
            paddingBottom={28}
          />

          <Text fontSize={fontSize.lg} lineHeight={lineHeight.loose}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam,{" "}
            <Link href="#">eaque ipsa quae</Link> ab illo{" "}
            <Link href="#">inventore veritatis</Link> et quasi architecto beatae
            vitae dicta sunt explicabo.
          </Text>
        </NewsletterSection>

        <NewsletterSection>
          <Heading fontSize={fontSize.xxl} paddingBottom={24}>
            Here’s space for a headline
          </Heading>

          <Text
            paddingBottom={28}
            fontSize={fontSize.lg}
            lineHeight={lineHeight.loose}
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </Text>

          <Button secondary href="#" fontSize={fontSize.lg} width="100%">
            Read more &rarr;
          </Button>
        </NewsletterSection>
      </MjmlWrapper>

      <Footer email={email} />
    </Layout>
  );
}
