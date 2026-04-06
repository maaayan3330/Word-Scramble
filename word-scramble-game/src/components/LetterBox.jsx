export default function LetterBox({ letter, onChange, onKeyDown, inputRef, disabled }) {
  return (
    <input
      ref={inputRef}
      type="text"
      maxLength={1}
      value={letter}
      onChange={onChange}
      onKeyDown={onKeyDown}
      disabled={disabled}
      className="h-11 w-11 rounded-lg border-2 border-slate-200 bg-white text-center text-lg font-extrabold uppercase text-slate-700 shadow-md outline-none transition focus:border-pink-400 focus:ring-2 focus:ring-pink-100 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-300 sm:h-14 sm:w-14 sm:rounded-xl sm:text-2xl md:h-20 md:w-20 md:rounded-2xl md:text-4xl"
    />
  );
}