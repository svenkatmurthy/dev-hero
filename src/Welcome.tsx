import React from "react"; // ✅ Ensures the file is a module

type WelcomeProps = {
  name: string;
};

const Welcome: React.FC<WelcomeProps> = ({ name }) => {
  return <h2>Welcome, {name}!</h2>;
};

export default Welcome; // ✅ Exporting makes it a module
