export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-100 p-8">
      <div className="relative">
        <div className="w-24 h-24 border-8 border-primary/20 border-t-primary rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-content font-bold text-xl shadow-lg animate-pulse">
            T
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-black tracking-tight animate-pulse">Loading Aesthetics...</h2>
        <p className="text-base-content/40 font-bold uppercase tracking-widest text-xs mt-2">Tiles Gallery 2026</p>
      </div>
    </div>
  );
}
