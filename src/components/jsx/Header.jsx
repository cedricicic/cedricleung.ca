import avatar from "../../assets/images/avatar.png";

function Header() {
  return (
    <header>
      <img src={avatar} alt="Avatar" class="avatar" />
      <h1>Hi! My name is Cedric.</h1>
    </header>
  );
}

export default Header;
