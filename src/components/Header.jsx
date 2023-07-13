import logo from "../assets/logo.png";

export const Header = () => {
  return (
    <div className="flex h-10 flex-col justify-between md:flex-row">
      <div className="h-full">
        <img src={logo} className="h-full" />
      </div>
      <div>
        <input
          type="text"
          className="h-8 rounded-lg border p-5"
          placeholder="Search by title..."
        />
      </div>
    </div>
  );
};
