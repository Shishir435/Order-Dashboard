const Navbar = () => {
  const imgUrl = localStorage.getItem("demoProfilePic");
  const userName = localStorage.getItem("demoName");
  const userEmail = localStorage.getItem("demoEmail");
  return (
    <div className="flex justify-between items-center max-w-7xl px-6 py-2 bg-blue-400">
      <div className="flex gap-5 items-center">
        <div className="rounded-full">
          <img
            className="rounded-full w-10 h-10"
            src={imgUrl || ""}
            alt="profile pic"
          />
        </div>
        <div>{userName || "user"}</div>
        <div>{userEmail || "user@test.com"}</div>
      </div>
      <div>Order Store</div>
    </div>
  );
};

export default Navbar;
