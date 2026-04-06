export default function GameOver({ status, handleClick }) {
  if (!status) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-sm rounded-3xl border border-green-200 bg-white px-6 py-6 text-center shadow-2xl sm:px-10 sm:py-8">
        <h2 className="text-2xl font-bold text-green-600 sm:text-3xl">
          Correct 🎉
        </h2>

        <button
          onClick={handleClick}
          className="mt-5 rounded-xl bg-pink-500 px-5 py-2 text-sm font-semibold text-white shadow transition hover:bg-pink-600 sm:text-base"
        >
          Play Again
        </button>
      </div>
    </div>
  );
}