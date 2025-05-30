export default function Navbar() {
  return (
    <div className="fixed w-full z-10">
      <div className="backdrop-blur bg-[var(--primary)]/60 border-b border-[var(--tertiary)] w-full rounded-2xl h-16 flex items-center justify-between px-20 z-30">
        <h1 className="font-bold text-xl">Portfolio.</h1>
        <div>
          <ul className="flex gap-x-6">
            <li className="navbar-item cursor-default"> Home <div/></li>
            <li className="navbar-item cursor-default"> About <div/></li>
            <li className="navbar-item cursor-default"> Skills <div/></li>
            <li className="navbar-item cursor-default"> Projects <div/></li>
            <li className="navbar-item cursor-default"> Contact <div/></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
