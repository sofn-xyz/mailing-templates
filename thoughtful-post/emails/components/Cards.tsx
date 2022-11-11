import { MjmlSection, MjmlColumn, MjmlRaw, MjmlImage } from "mjml-react";
import { borderRadius, colors, fontFamily, fontSize } from "../theme";
import assetUrl from "../util/assetUrl";

export type Card = {
  href: string;
  src: string;
  price: number;
  title: string;
};

type CardProps = { card: Card };

function Card({ card }: CardProps) {
  const price = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(card.price);

  return (
    <MjmlColumn padding={10}>
      <MjmlRaw>
        <tr>
          <td align="center">
            <table
              className="card"
              border={0}
              cellPadding={0}
              cellSpacing={0}
              role="presentation"
              width="100%"
              style={{
                tableLayout: "fixed",
                borderTopLeftRadius: borderRadius.base,
                borderTopRightRadius: borderRadius.base,
                borderCollapse: "separate",
              }}
            >
              <tr>
                <td
                  style={{
                    width: "100%",
                    borderTopLeftRadius: borderRadius.base,
                    borderTopRightRadius: borderRadius.base,
                    overflow: "hidden",
                  }}
                >
                  <a href={card.href}>
                    <img src={card.src} width="100%" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href={card.href}
                    style={{
                      color: colors.black,
                      textDecoration: "none",
                    }}
                  >
                    <table
                      className="card"
                      border={0}
                      cellPadding={0}
                      cellSpacing={0}
                      role="presentation"
                      width="100%"
                      style={{
                        tableLayout: "fixed",
                        backgroundColor: colors.white,
                        borderBottomLeftRadius: borderRadius.base,
                        borderBottomRightRadius: borderRadius.base,
                        borderCollapse: "separate",
                      }}
                    >
                      <tr>
                        <td
                          style={{
                            width: "100%",
                            padding: "10px 0 10px 10px",
                            borderBottomLeftRadius: borderRadius.base,
                            borderBottom: `1px solid ${colors.gray200}`,
                            borderLeft: `1px solid ${colors.gray200}`,
                            borderCollapse: "separate",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: fontFamily.sans,
                              fontSize: fontSize.base,
                            }}
                          >
                            <strong
                              style={{
                                whiteSpace: "nowrap",
                                textOverflow: "ellipsis",
                                display: "block",
                                overflow: "hidden",
                              }}
                            >
                              {card.title}
                            </strong>
                            {price}
                          </span>
                        </td>
                        <td
                          align="right"
                          style={{
                            width: "60px",
                            padding: "10px 10px 10px 0",
                            borderBottomRightRadius: borderRadius.base,
                            borderBottom: `1px solid ${colors.gray200}`,
                            borderRight: `1px solid ${colors.gray200}`,
                            borderCollapse: "separate",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: fontFamily.sans,
                              fontSize: fontSize.base,
                            }}
                          >
                            <img
                              src={assetUrl("/assets/cart.png")}
                              width="20px"
                              height="20px"
                              style={{
                                verticalAlign: "text-bottom",
                                paddingBottom: 4,
                                paddingRight: 8,
                              }}
                            />
                            <strong>Buy</strong>
                          </span>
                        </td>
                      </tr>
                    </table>
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </MjmlRaw>
    </MjmlColumn>
  );
}

type CardsProps = {
  cards: Card[];
};

export default function Cards({ cards }: CardsProps) {
  return (
    <>
      <MjmlSection backgroundColor={colors.white} cssClass="card-gutter">
        {<Card card={cards[0]} />}
        {<Card card={cards[1]} />}
      </MjmlSection>
      <MjmlSection
        backgroundColor={colors.white}
        paddingBottom={40}
        cssClass="card-gutter"
      >
        {<Card card={cards[2]} />}
        {<Card card={cards[3]} />}
      </MjmlSection>
    </>
  );
}
