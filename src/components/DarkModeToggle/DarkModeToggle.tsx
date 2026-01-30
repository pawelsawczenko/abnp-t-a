import { FaMoon, FaRegSun } from 'react-icons/fa6';
import { useDarkMode } from './useDarkMode';

export const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button onClick={toggleDarkMode} className="cursor-pointer">
      {isDarkMode ? <FaRegSun className="text-white" /> : <FaMoon className="text-black" />}
    </button>
  );
};
