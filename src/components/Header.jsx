const Header = () => {
  return (
    <nav className="bg-white shadow-2xl relative z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-center sm:justify-start mx-auto sm:px-5 sm:p-1">
      <img
        src="/logo-1.webp"
        className="h-12 sm:h-16"
        alt="GLA Logoo"
      />
      <img
        src="/logo.png"
        className="h-12 sm:h-16"
        alt="GLA Logo"
      />
      </div>
    </nav>
  );
};

export default Header;
