import React from "react";

function Header() {
  let name = "John";
  let familyname = "Doe";

  const date = new Date();
  const hours = date.getHours();
  let timeofday;
  const styles = { fontSize: 45 };

  if (hours < 12) {
    timeofday = "Goodmorning";
    styles.color = "#cbf442";
  } else if (hours >= 12 && hours < 17) {
    timeofday = "Goodafternoon";
    styles.color = "#b22a2a";
  } else {
    timeofday = "Goodevening";
    styles.color = "#2a5eb2";
  }

  return (
    <header className="navbar">
      <h1 style={styles}>{`${timeofday} ${name} ${familyname}`}</h1>
      {/* <li>1</li>
      <li>2</li>
      <li>3</li> */}
    </header>
  );
}

export default Header;
