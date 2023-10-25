
const Navbar = () => {
     const imgUrl=localStorage.getItem("demoProfilePic")
     const userName=localStorage.getItem("demoName")
  return (
    <div className="flex justify-between items-center max-w-7xl px-6 py-2 bg-blue-400">
        <div>Logo</div>
        <div className="flex gap-5 items-center">
            <div>
               {userName || "user"}
            </div>
            <div className="rounded-full">
                <img className="rounded-full w-10 h-10" src={imgUrl || ""} alt="profile pic" />
            </div>
        </div>
    </div>
  )
}

export default Navbar

