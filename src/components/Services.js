export default function Services() {
  return (
    <div className="bg-[var(--primary)] h-screen items-center flex px-20">
        <div className="grid grid-cols-[3fr_2fr] gap-x-16 items-center">

            <div className="grid grid-cols-2 gap-8">
                <div className="bg-services h-44 text-center rounded-lg" style={{padding: '20px 10px !important'}}>
                    <h1 className="font-medium">Full-Stack Web Development</h1>
                    <p className="text-sm">Responsive websites and web apps using React, Next.js, Node.js, Express, and MongoDB/MySQL.</p>
                    <button className="bg-black hover:bg-[var(--hover)] rounded text-sm p-btn m-btn-sm">View Details</button>
                    <button className="bg-black hover:bg-[var(--hover)] rounded text-sm p-btn m-btn-sm">Get Quote</button>
                </div>
                <div className="bg-services h-44 text-center rounded-lg" style={{padding: '20px 10px !important'}}>
                    <h1 className="font-medium">Mobile App Development</h1>
                    <p className="text-sm">Cross-platform apps with React Native offering native look and smooth performance.</p>
                    <button className="bg-black hover:bg-[var(--hover)] rounded text-sm p-btn m-btn-sm">View Details</button>
                    <button className="bg-black hover:bg-[var(--hover)] rounded text-sm p-btn m-btn-sm">Get Quote</button>
                </div>
                <div className="bg-services h-44 text-center rounded-lg" style={{padding: '20px 10px !important'}}>
                    <h1 className="font-medium">Automation & Bots</h1>
                    <p className="text-sm">Custom automation bots for scraping, tasks, and scheduling using Python or Node.js.</p>
                    <button className="bg-black hover:bg-[var(--hover)] rounded text-sm p-btn m-btn-sm">View Details</button>
                    <button className="bg-black hover:bg-[var(--hover)] rounded text-sm p-btn m-btn-sm">Get Quote</button>
                </div>
                <div className="bg-services h-44 text-center rounded-lg" style={{padding: '20px 10px !important'}}>
                    <h1 className="font-medium">AI & ML (Basic Models)</h1>
                    <p className="text-sm">Simple ML models with scikit-learn and basic chatbots using NLP & cosine similarity.</p>
                    <button className="bg-black hover:bg-[var(--hover)] rounded text-sm p-btn m-btn-sm">View Details</button>
                    <button className="bg-black hover:bg-[var(--hover)] rounded text-sm p-btn m-btn-sm">Get Quote</button>
                </div>
            </div>

            <div>
                <h1 className="font-bold text-[var(--secondary)] text-xl" style={{padding: "0 0 20px 0"}}>What I Do</h1>
                <p className="text-sm leading-relaxed">
                    I specialize in building efficient, user-friendly digital products that scale. Whether it's a powerful full-stack web app, a high-performance mobile app, intelligent automation, or basic AI models — I turn your ideas into reality with modern tools and technologies.
                </p>
                <button className="bg-[var(--secondary)] hover:bg-[var(--hover)] rounded p-btn" style={{margin: '25px 10px'}}>Contact Me</button>
            </div>

        </div>
    </div>
  );
}