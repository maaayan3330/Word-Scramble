export default function LetterBox({ letter, onChange }) {
  return (
    <input
      type="text"
      maxLength={1}
      value={letter}
      onChange={onChange}
      className="w-14 h-14 text-center text-2xl font-bold border-2 border-slate-300 rounded-xl shadow-md focus:border-pink-400 outline-none"
    />
  );
}
