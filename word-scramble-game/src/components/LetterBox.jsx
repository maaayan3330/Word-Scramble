export default function LetterBox({ letter, onChange ,onKeyDown, inputRef, disabled }) {
  return (
    <input
      ref={inputRef}
      type="text"
      maxLength={1}
      value={letter}
      onChange={onChange}
      onKeyDown={onKeyDown}
      disabled={disabled}
      className="w-24 h-24 rounded-2xl border-2 border-slate-200 bg-white text-center text-4xl font-extrabold uppercase text-slate-700 shadow-md outline-none transition focus:border-pink-400 focus:ring-4 focus:ring-pink-100 disabled:bg-slate-100 disabled:text-slate-300 disabled:cursor-not-allowed"
    />
  );
}
