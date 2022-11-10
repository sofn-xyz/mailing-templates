import Base from "./layouts/Base";
import Button from "./components/Button";
import Heading from "./components/Heading";
import { fontSize, colors } from "./theme";
import { MjmlSection, MjmlColumn, MjmlImage } from "mjml-react";
import Cards, { type Card } from "./components/Cards";
import P from "./components/P";
import assetUrl from "./util/assetUrl";

type UpcomingProps = {
  name: string;
  gifts: Card[];
};

export default function Upcoming({ name, gifts }: UpcomingProps) {
  return (
    <Base>
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
            maxWidth={390}
            paddingBottom={28}
          >
            We found 4 more gifts for {name}
          </Heading>
          <P align="center">
            {name}'s birthday is on{" "}
            <strong className="no-wrap">Fri, Nov 4.</strong> That's in 2 weeks!
            Based on what you told us, {name} might like these gifts.
          </P>
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
    </Base>
  );
}
