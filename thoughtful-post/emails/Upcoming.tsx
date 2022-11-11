import { MjmlSection, MjmlColumn, MjmlImage } from "mjml-react";
import Base from "./layouts/Base";
import Button from "./components/Button";
import Heading from "./components/Heading";
import Cards, { type Card } from "./components/Cards";
import Text from "./components/Text";
import { fontSize, colors } from "./theme";
import assetUrl from "./util/assetUrl";
import Checklist from "./components/Checklist";

type UpcomingProps = {
  name: string;
  gifts: Card[];
  birthday: string;
  withList?: boolean;
};

export default function Upcoming({
  name,
  withList,
  gifts,
  birthday,
}: UpcomingProps) {
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
          <Text align="center" maxWidth={390} paddingBottom={24}>
            <strong>Only 1 week left</strong> until {name}’s birthday on{" "}
            <span className="no-wrap">{birthday}</span> Let’s find the perfect
            gift.
          </Text>

          {withList ? (
            <>
              <Checklist
                items={[
                  { text: "A complete task", checked: true },
                  { text: "A incomplete task", checked: false },
                  { text: "A incomplete task", checked: false },
                ]}
              />
              <Button href="https://thoughtfulpost.com" paddingTop={32}>
                Find a gift now
              </Button>
            </>
          ) : (
            <Button href="https://thoughtfulpost.com" paddingTop={8}>
              See all gifts for {name}
            </Button>
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
          <Button href="https://thoughtfulpost.com">Browse more gifts</Button>
        </MjmlColumn>
      </MjmlSection>
    </Base>
  );
}
