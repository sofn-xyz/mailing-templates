import { MjmlRaw } from "mjml-react";

import { themeDefaults } from "../theme";
import assetUrl from "../util/assetUrl";

type CheckListItem = {
  text: string;
  checked: boolean;
};

type CheckListProps = {
  items: CheckListItem[];
};

export default function Checklist({ items }: CheckListProps) {
  return (
    <MjmlRaw>
      <tr>
        <td>
          <table
            border={0}
            cellPadding={0}
            cellSpacing={0}
            role="presentation"
            width="100%"
          >
            {items.map((item, index) => (
              <tr key={index}>
                <td
                  align="center"
                  style={{
                    ...themeDefaults,
                    paddingBottom: index === items.length - 1 ? 0 : 8,
                  }}
                >
                  <img
                    height={20}
                    width={20}
                    src={assetUrl(
                      item.checked
                        ? "/assets/checkbox-checked.png"
                        : "/assets/checkbox.png"
                    )}
                    style={{ verticalAlign: "text-bottom", paddingRight: 8 }}
                  />
                  {item.text}
                </td>
              </tr>
            ))}
          </table>
        </td>
      </tr>
    </MjmlRaw>
  );
}
