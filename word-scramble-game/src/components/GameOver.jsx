export default function GameOver({ status }) {
  if (!status) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white px-10 py-8 rounded-3xl shadow-2xl border border-green-200 text-center">
        <h2 className="text-3xl font-bold text-green-600">
          Correct 🎉
        </h2>
        
      </div>
    </div>
  );
}