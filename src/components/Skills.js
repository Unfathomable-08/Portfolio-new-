import Image from "next/image";

export default function Skills() {
  return (
    <div
      className="min-h-screen bg-[var(--primary)] flex md:grid-cols-2 items-center gap-x-8 text-white px-20"
    >
      <div className="bg-white w-12 h-12 rounded-full flex justify-center items-center overflow-hidden">
        <Image src="/html.png" width={40} height={40}/>
      </div>
      <div className="bg-white w-12 h-12 rounded-full flex justify-center items-center overflow-hidden">
        <Image src="/css.png" width={40} height={40}/>
      </div>
      <div className="bg-white w-12 h-12 rounded-full flex justify-center items-center overflow-hidden">
        <Image src="/javascript.jpg" width={40} height={40}/>
      </div>
      <div className="bg-white w-12 h-12 rounded-full flex justify-center items-center overflow-hidden">
        <Image src="/bootstrap.png" width={44} height={50}/>
      </div>
      <div className="bg-white w-12 h-12 rounded-full flex justify-center items-center overflow-hidden">
        <Image src="/tailwind.png" width={40} height={40}/>
      </div>
      <div className="bg-white w-12 h-12 rounded-full flex justify-center items-center overflow-hidden">
        <Image src="/react.png" width={40} height={40}/>
      </div>
      <div className="bg-white w-12 h-12 rounded-full flex justify-center items-center overflow-hidden">
        <Image src="/socket.png" width={40} height={40}/>
      </div>
      <div className="bg-white w-12 h-12 rounded-full flex justify-center items-center overflow-hidden">
        <Image src="/express.png" width={40} height={40}/>
      </div>
      <div className="bg-white w-12 h-12 rounded-full flex justify-center items-center overflow-hidden">
        <Image src="/node.png" width={28} height={28}/>
      </div>
      <div className="bg-white w-12 h-12 rounded-full flex justify-center items-center overflow-hidden">
        <Image src="/php.svg" width={40} height={40}/>
      </div>
      <div className="bg-white w-12 h-12 rounded-full flex justify-center items-center overflow-hidden">
        <Image src="/mysql.png" width={40} height={40}/>
      </div>
      <div className="bg-white w-12 h-12 rounded-full flex justify-center items-center overflow-hidden">
        <Image src="/mongodb.png" width={40} height={40}/>
      </div>
      <div className="bg-white w-12 h-12 rounded-full flex justify-center items-center overflow-hidden">
        <Image src="/alpine.png" width={40} height={40}/>
      </div>
      <div className="bg-white w-12 h-12 rounded-full flex justify-center items-center overflow-hidden">
        <Image src="/python.png" width={40} height={40}/>
      </div>
      <div className="bg-white w-12 h-12 rounded-full flex justify-center items-center overflow-hidden">
        <Image src="/redis.png" width={40} height={40}/>
      </div>
      <div className="bg-white w-12 h-12 rounded-full flex justify-center items-center overflow-hidden">
        <Image src="/postgresql.png" width={40} height={40}/>
      </div>
    </div>
  );
}
