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
      className="w-30 h-30 text-center text-3xl font-bold border-2 border-slate-300 rounded-xl shadow-md focus:border-pink-400 outline-none"
    />
  );
}
