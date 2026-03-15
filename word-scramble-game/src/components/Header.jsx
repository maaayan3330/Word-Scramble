import { useState } from "react";

export default function Header() {
    // state for the name of the player
    const [name, setName] = useState("guest");

    function handleChange(event) {
        setName(event.target.value);
    }

    return(
        <>
        <h1 className="mt-10 flex justify-center gap-2 text-4xl font-bold drop-shadow-lg">
            <span className="bg-red-400 text-white px-3 py-2 rounded-lg shadow rotate-[-5deg]">W</span>
            <span className="bg-orange-400 text-white px-3 py-2 rounded-lg shadow rotate-[3deg]">O</span>
            <span className="bg-yellow-400 text-white px-3 py-2 rounded-lg shadow rotate-[-3deg]">R</span>
            <span className="bg-green-400 text-white px-3 py-2 rounded-lg shadow rotate-[4deg]">D</span>
            <span className="mx-2"></span>
            <span className="bg-blue-400 text-white px-3 py-2 rounded-lg shadow rotate-[-4deg]">S</span>
            <span className="bg-indigo-400 text-white px-3 py-2 rounded-lg shadow rotate-[2deg]">C</span>
            <span className="bg-purple-400 text-white px-3 py-2 rounded-lg shadow rotate-[-2deg]">R</span>
            <span className="bg-pink-400 text-white px-3 py-2 rounded-lg shadow rotate-[3deg]">A</span>
            <span className="bg-red-300 text-white px-3 py-2 rounded-lg shadow rotate-[-3deg]">M</span>
            <span className="bg-orange-300 text-white px-3 py-2 rounded-lg shadow rotate-[4deg]">B</span>
            <span className="bg-yellow-300 text-white px-3 py-2 rounded-lg shadow rotate-[-2deg]">L</span>
            <span className="bg-green-300 text-white px-3 py-2 rounded-lg shadow rotate-[3deg]">E</span>
        </h1>
        <div className="flex items-center justify-center gap-3 mt-6">
            <h2 className="text-2xl font-semibold text-slate-700">Welcome</h2>
                <input
                    type="text"
                    value={name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="px-4 py-2 rounded-xl border-2 border-violet-300 bg-white shadow-md outline-none text-lg text-slate-700 placeholder:text-slate-400 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 transition"
                />
        </div>
        </>
    );
}