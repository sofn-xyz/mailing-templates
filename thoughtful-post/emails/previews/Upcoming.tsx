import Upcoming from "../Upcoming";

const gifts = [
  {
    href: "https://thoughtfulpost.com",
    src: "https://via.placeholder.com/303x196/0000FF?text=1",
    price: 20.99,
    title: "A gift title",
  },
  {
    href: "https://thoughtfulpost.com",
    src: "https://via.placeholder.com/303x196/FF0000?text=2",
    price: 20000.99,
    title: "A really expensive gift title",
  },
  {
    href: "https://thoughtfulpost.com",
    src: "https://via.placeholder.com/303x196/00FF00?text=3",
    price: 20.99,
    title: "A gift title",
  },
  {
    href: "https://thoughtfulpost.com",
    src: "https://via.placeholder.com/303x196/000000?text=4",
    price: 20.99,
    title: "A gift title",
  },
];
export function preview() {
  return <Upcoming name="Amelita" gifts={gifts} />;
}

export function withList() {
  return <Upcoming name="Amelita" withList gifts={gifts} />;
}
