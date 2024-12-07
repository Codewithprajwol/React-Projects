
const Header = ():JSX.Element => {
  return (
    <div className="flex items-center justify-between px-5 header bg-[#353535] text-white">
        <h1 className="text-[1.5rem]"><span className="text-[1.3rem]">Hello,</span> <br/> Prajwol 😃</h1>
        <button className="rounded-md bg-red-400 px-3 py-1 cursor-pointer font-medium">Log Out</button>
    </div>
  )
}

export default Header