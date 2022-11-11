import NewMatch from "../NewMatch";

const gifts = [
  {
    href: "https://thoughtfulpost.com",
    src: "https://placehold.co/375x250/D7D8D8/D7D8D8",
    price: 20.99,
    title: "A gift title",
  },
  {
    href: "https://thoughtfulpost.com",
    src: "https://placehold.co/375x250/D7D8D8/D7D8D8",
    price: 20000.99,
    title: "A really expensive gift title",
  },
  {
    href: "https://thoughtfulpost.com",
    src: "https://placehold.co/375x250/D7D8D8/D7D8D8",
    price: 20.99,
    title: "A different gift title",
  },
  {
    href: "https://thoughtfulpost.com",
    src: "https://placehold.co/375x250/D7D8D8/D7D8D8",
    price: 20.99,
    title: "A gift title",
  },
];

export function preview() {
  return <NewMatch name="Amelita" gifts={gifts} birthday="Fri, Nov 4" />;
}
