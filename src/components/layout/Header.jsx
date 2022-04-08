import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="fixed z-40 flex items-center justify-center w-full h-16 shadow-md bg-sky-500">
      <div className="flex items-center justify-between w-full h-full px-4 py-3 mx-auto sm:max-w-xl">
        <div className="px-2 py-1 bg-white shadow-md">
          <Link to="/">
            <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">Todo App</h1>
          </Link>
        </div>
      </div>
    </header>
  );
};
