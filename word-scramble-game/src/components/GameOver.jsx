export default function GameOver({ status , handleClick}) {
  if (!status) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white px-10 py-8 rounded-3xl shadow-2xl border border-green-200 text-center">
        <h2 className="text-3xl font-bold text-green-600">
          Correct 🎉
        </h2>
            <button onClick={handleClick} 
             className="mt-5 px-5 py-2 rounded-xl bg-pink-500 text-white font-semibold shadow hover:bg-pink-600 transition"
            >Play Again</button>
      </div>
    </div>
  );
}