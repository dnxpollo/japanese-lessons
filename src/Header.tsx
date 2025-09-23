import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <h1>Nihon no Nichijō</h1>
      <nav>
        <a href="#hiragana">Hiragana</a>
        <a href="#katakana">Katakana</a>
        <a href="#kanji">Kanji</a>
      </nav>
    </header>
  );
};

export default Header;
