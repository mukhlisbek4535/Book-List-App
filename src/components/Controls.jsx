import React from "react";

const Controls = ({
  region,
  setRegion,
  seed,
  setSeed,
  onRandomizeSeed,
  avgLikes,
  setAvgLikes,
  avgReviews,
  setAvgReviews,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="flex flex-col">
        <label className="text-sm font-medium mb-1">Language / Region</label>
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="border rounded px-3 py-1"
        >
          <option value="en">English (US)</option>
          <option value="fr">French (FR)</option>
          <option value="de">German (DE)</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-medium mb-1">Seed</label>
        <div className="flex items-center gap-2">
          <input
            type="number"
            value={seed}
            onChange={(e) => setSeed(Number(e.target.value))}
            className="border rounded px-3 py-1 w-28"
          />
          <button
            onClick={onRandomizeSeed}
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
          >
            🔀 Random
          </button>
        </div>
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-medium mb-1">Avg Likes per Book</label>
        <div className="flex items-center gap-2">
          <input
            type="range"
            min="0"
            max="10"
            step="0.1"
            value={avgLikes}
            onChange={(e) => setAvgLikes(parseFloat(e.target.value))}
          />
          <span className="text-sm">{avgLikes.toFixed(1)}</span>
        </div>
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-medium mb-1">Avg Reviews per Book</label>
        <input
          type="number"
          min="0"
          step="0.1"
          value={avgReviews}
          onChange={(e) => setAvgReviews(parseFloat(e.target.value))}
          className="border rounded px-3 py-1 w-28"
        />
      </div>
    </div>
  );
};

export default Controls;
