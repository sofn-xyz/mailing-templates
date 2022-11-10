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
  withList?: boolean;
  gifts: Card[];
};

export default function Upcoming({ name, withList, gifts }: UpcomingProps) {
  return (
    <Base>
      <MjmlSection
        backgroundColor={colors.white}
        cssClass="gutter"
        paddingBottom={64}
      >
        <MjmlColumn>
          <MjmlImage
            height={48}
            width={43.22}
            src={assetUrl("/assets/calendar.png")}
            paddingBottom={28}
          />
          <Heading
            fontSize={fontSize.xxl}
            lg={{ fontSize: fontSize.xxxl }}
            align="center"
            maxWidth={390}
            paddingBottom={28}
          >
            {name}’s birthday is soon
          </Heading>
          <P align="center" paddingBottom={32}>
            <strong>Only 1 week left</strong> until {name}’s birthday on{" "}
            <span className="no-wrap">Fri, Nov 4.</span> Let’s find the perfect
            gift.
          </P>
          {withList ? (
            <Button>Find a gift now</Button>
          ) : (
            <Button>See all gifts for {name}</Button>
          )}
        </MjmlColumn>
      </MjmlSection>

      <MjmlSection
        backgroundColor={colors.white}
        cssClass="gutter border-top"
        paddingTop={48}
      >
        <MjmlColumn>
          <Heading
            fontSize={fontSize.lg}
            lg={{ fontSize: fontSize.xl }}
            align="center"
            maxWidth={390}
            paddingBottom={28}
          >
            Based on what you told us, {name} might like these
          </Heading>
        </MjmlColumn>
      </MjmlSection>

      <Cards cards={gifts} />

      <MjmlSection backgroundColor={colors.white} paddingBottom={48}>
        <MjmlColumn>
          <Button>Browse more gifts</Button>
        </MjmlColumn>
      </MjmlSection>
    </Base>
  );
}
