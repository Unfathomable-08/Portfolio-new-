export default function Services() {
  return (
    <div className="bg-[var(--primary)] h-screen items-center flex" style={{padding: "0px 80px"}}>
        <div className="grid grid-cols-[3fr_2fr] gap-x-16 items-center">

            <div className="grid grid-cols-2 gap-8">
                <div className="bg-services h-44 text-center rounded-lg" style={{padding: '20px 10px !important'}}>
                    <h1 className="font-medium">Web Development</h1>
                    <p className="text-sm">lorem ipsum lorem ipsum lorem ipsum lorem ipsum loremipsum lorem ipsum</p>
                    <button className="bg-black hover:bg-[var(--hover)] rounded text-sm" style={{padding: '3px 12px', margin: '25px 5px'}}>Order Now</button>
                    <button className="bg-black hover:bg-[var(--hover)] rounded text-sm" style={{padding: '3px 12px', margin: '25px 5px'}}>Order Now</button>
                </div>
                <div className="bg-services h-44 text-center rounded-lg" style={{padding: '20px 10px !important'}}>
                    <h1 className="font-medium">Web Development</h1>
                    <p className="text-sm">lorem ipsum lorem ipsum lorem ipsum lorem ipsum loremipsum lorem ipsum</p>
                    <button className="bg-black hover:bg-[var(--hover)] rounded text-sm" style={{padding: '3px 12px', margin: '25px 5px'}}>Order Now</button>
                    <button className="bg-black hover:bg-[var(--hover)] rounded text-sm" style={{padding: '3px 12px', margin: '25px 5px'}}>Order Now</button>
                </div>
                <div className="bg-services h-44 text-center rounded-lg" style={{padding: '20px 10px !important'}}>
                    <h1 className="font-medium">Web Development</h1>
                    <p className="text-sm">lorem ipsum lorem ipsum lorem ipsum lorem ipsum loremipsum lorem ipsum</p>
                    <button className="bg-black hover:bg-[var(--hover)] rounded text-sm" style={{padding: '3px 12px', margin: '25px 5px'}}>Order Now</button>
                    <button className="bg-black hover:bg-[var(--hover)] rounded text-sm" style={{padding: '3px 12px', margin: '25px 5px'}}>Order Now</button>
                </div>
                <div className="bg-services h-44 text-center rounded-lg" style={{padding: '20px 10px !important'}}>
                    <h1 className="font-medium">Web Development</h1>
                    <p className="text-sm">lorem ipsum lorem ipsum lorem ipsum lorem ipsum loremipsum lorem ipsum</p>
                    <button className="bg-black hover:bg-[var(--hover)] rounded text-sm" style={{padding: '3px 12px', margin: '25px 5px'}}>Order Now</button>
                    <button className="bg-black hover:bg-[var(--hover)] rounded text-sm" style={{padding: '3px 12px', margin: '25px 5px'}}>Order Now</button>
                </div>
            </div>

            <div>
                <h1 className="font-bold text-[var(--secondary)] text-xl" style={{padding: "0 0 20px 0"}}>What I Do</h1>
                <p>lore ipsum lorem impsum lore ipsum lorem impsum lore ipsum lorem impsum lore ipsum lorem impsum lore ipsum lorem impsum lore ipsum lorem impsum lore ipsum lorem impsum lore ipsum lorem impsum lore ipsum lorem impsumlore ipsum lorem impsum lore ipsum lorem impsum lore ipsum lorem impsum.</p>
                <button className="bg-[var(--secondary)] hover:bg-[var(--hover)] rounded" style={{padding: '3px 12px', margin: '25px 10px'}}>Contact Me</button>
            </div>

        </div>
    </div>
  );
}