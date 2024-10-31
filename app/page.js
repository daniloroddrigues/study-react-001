import LikeButton from './like-button';

function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>;
}

function Footer() {
  return <div>© 2024 React</div>;
}

export default function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];

  return (
    <>
      <Header title="Junior. Preview. Developer. Mega." />

      <ul>
        {names.map((name) => (
          <li key="{name}">{name}</li>
        ))}
      </ul>

      <LikeButton />

      <Footer />
    </>
  );
}
