import { MjmlColumn, MjmlImage, MjmlSection, MjmlWrapper } from "mjml-react";
import { colors } from "../theme";
import assetUrl from "../util/assetUrl";

const Header: React.FC = () => {
  return (
    <MjmlWrapper
      fullWidth={true}
      padding="32px 0"
      backgroundColor={colors.yellow}
    >
      <MjmlSection cssClass="gutter">
        <MjmlColumn>
          <MjmlImage
            width="43px"
            height="48px"
            align="left"
            src={assetUrl("/assets/logo-yellow.png")}
          />
        </MjmlColumn>
      </MjmlSection>
    </MjmlWrapper>
  );
};

export default Header;
