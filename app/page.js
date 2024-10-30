import { useState } from 'react';

function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>;
}

function Footer() {
  return <div>© 2024 React</div>;
}

export default function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];
  const [likes, setLikes] = useState(0);

  function handleClickPlus() {
    setLikes(likes + 1);
  }

  function handleClickLess() {
    if (likes <= 0) return;
    setLikes(likes - 1);
  }

  return (
    <div>
      <Header title="Junior. Preview. Developer. Mega." />

      <ul>
        {names.map((name) => (
          <li key="{name}">{name}</li>
        ))}
      </ul>

      <p>({likes})</p>

      <button onClick="{handleClickLess}">-</button>
      <button onClick="{handleClickPlus}">+</button>
      <Footer />
    </div>
  );
}
