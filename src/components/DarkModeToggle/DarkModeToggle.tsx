import { FaMoon, FaRegSun } from 'react-icons/fa6';
import { useDarkMode } from './useDarkMode';

export const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button onClick={toggleDarkMode} className="cursor-pointer">
      {isDarkMode ? (
        <FaRegSun className="text-2xl text-white hover:text-amber-400" />
      ) : (
        <FaMoon className="text-2xl text-black hover:text-sky-600" />
      )}
    </button>
  );
};
