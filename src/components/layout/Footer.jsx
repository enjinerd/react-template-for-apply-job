export const Footer = () => {
  return (
    <footer className="fixed bottom-0 z-40 flex items-center justify-center w-full h-16 px-2 bg-white border-t border-gray-300">
      <div className="flex flex-col items-center justify-center">
        <p className="text-center text-gray-500 text-xs">
          © {new Date().getFullYear()}, Created By
          {` `}
          <a href="https://www.gatsbyjs.org">Roni Ardiyanto</a>
        </p>
      </div>
    </footer>
  );
};
