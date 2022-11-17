import { MjmlSection, MjmlColumn, MjmlImage } from "mjml-react";
import Layout from "./components/Layout";
import Button from "./components/Button";
import Heading from "./components/Heading";
import Cards, { type Card } from "./components/Cards";
import Text from "./components/Text";
import { fontSize, colors } from "./theme";
import assetUrl from "./util/assetUrl";

type UpcomingProps = {
  name: string;
  birthday: string;
  gifts: Card[];
};

export default function Upcoming({ name, gifts, birthday }: UpcomingProps) {
  return (
    <Layout>
      <MjmlSection
        backgroundColor={colors.white}
        cssClass="gutter"
        paddingBottom={30}
      >
        <MjmlColumn>
          <MjmlImage
            height={48}
            width={43.22}
            src={assetUrl("/assets/helping-hand.png")}
            paddingBottom={28}
          />
          <Heading
            fontSize={fontSize.xxl}
            lg={{ fontSize: fontSize.xxxl }}
            align="center"
            maxWidth={470}
            paddingBottom={28}
          >
            We found 4 more gifts for {name}
          </Heading>
          <Text maxWidth={460} align="center">
            {name}'s birthday is on{" "}
            <strong className="no-wrap">{birthday}</strong>. That's in 2 weeks!
            Based on what you told us, {name} might like these gifts.
          </Text>
        </MjmlColumn>
      </MjmlSection>
      <Cards cards={gifts} />
      <MjmlSection
        backgroundColor={colors.white}
        cssClass="gutter"
        paddingBottom={48}
      >
        <MjmlColumn>
          <Button>Browse more gifts</Button>
        </MjmlColumn>
      </MjmlSection>
    </Layout>
  );
}
