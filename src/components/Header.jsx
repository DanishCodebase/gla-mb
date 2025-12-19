const Header = () => {
  return (
    <nav className="bg-white shadow-2xl relative z-10">
      <div className="max-w-screen-xl flex grid-cols-2 h-20 items-center justify-center sm:flex sm:flex-wrap sm:justify-start sm:h-auto mx-auto sm:px-5 sm:p-1">
        <img
          src="/logo-1.webp"
          className="h-12 sm:h-16 z-[12] sm:z-[10]"
          alt="GLA Logoo"
        />
        <img
          src="/logo.png"
          className="h-12 sm:h-16 ml-[-1rem] mr-[0rem] z-10 sm:ml-[-1rem] sm:mr-0 sm:z-auto"
          alt="GLA Logo"
        />
      </div>
    </nav>
  );
};

export default Header;
