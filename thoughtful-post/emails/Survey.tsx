import Base from "./layouts/Base";
import Button from "./components/Button";
import Heading from "./components/Heading";
import { fontSize, colors } from "./theme";
import { MjmlSection, MjmlColumn, MjmlImage } from "mjml-react";
import P from "./components/P";
import assetUrl from "./util/assetUrl";

type SurveyProps = {
  name: string;
  userName: string;
};

export default function Survey({ name, userName }: SurveyProps) {
  return (
    <Base>
      <MjmlSection
        backgroundColor={colors.white}
        cssClass="gutter"
        paddingBottom={64}
      >
        <MjmlColumn>
          <MjmlImage
            height={96}
            width={148.45}
            src={assetUrl("/assets/cards.png")}
            paddingBottom={32}
          />
          <Heading
            fontSize={fontSize.xxl}
            lg={{ fontSize: fontSize.xxxl }}
            align="center"
            maxWidth={450}
            paddingBottom={16}
          >
            Find the perfect gift for {name}
          </Heading>
          <P align="center" paddingBottom={32}>
            <strong>{userName}</strong>, will you take this short survey to find
            the perfect gift for {name}? It’s free, easy, and only takes a
            minute.
          </P>
          <Button href="https://thoughfulpost.com">Take the survey</Button>
        </MjmlColumn>
      </MjmlSection>
    </Base>
  );
}
