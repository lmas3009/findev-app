import "../../index.css";

const Header = () => {
  return (
    <div className="h-16 w-full flex items-center justify-between pl-5 pr-5 bg-white">
      <div>
        <p className="logo">fIndev-app</p>
      </div>
      <div className="flex gap-3 items-center">
        <a href="https://github.com/lmas3009/findev-app"  rel="noreferrer" target="_blank" ><p>Github</p></a>
        <a href="/auth">
          <div className="text-white bg-black p-1 pl-2 pr-2 rounded-md flex items-center justify-center">
            <p>Get Started</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Header;
