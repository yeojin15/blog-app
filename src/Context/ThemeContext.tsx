import { ReactNode, createContext, useEffect, useState } from 'react';

const ThemeContext = createContext({
  theme: 'light',
  toggleMode: () => {},
});

interface ThemeProps {
  children: ReactNode;
}

export const ThemeComtextProvider = ({ children }: ThemeProps) => {
  const [theme, setTheme] = useState(
    window.localStorage.getItem('theme') || 'light'
  );
  const toggleMode = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    window.localStorage.setItem(
      'theme',
      theme === 'light' ? 'dark' : 'light'
    );
  };
  useEffect(() => {
    const setHtmlBackgroundColor = () => {
      if (theme === 'dark') {
        document.documentElement.style.backgroundColor = 'var(--bl-4)';
      } else {
        document.documentElement.style.backgroundColor = '#fff';
      }
    };
    setHtmlBackgroundColor();
  }, [toggleMode]);

  return (
    <ThemeContext.Provider value={{ theme, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
