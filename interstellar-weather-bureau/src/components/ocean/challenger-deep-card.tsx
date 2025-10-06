'use client';

export default function ChallengerDeepCard() {
  // Challenger Deep - deepest known point in Earth's oceans
  const depthM = 10984; // meters
  const depthFt = 36037; // feet
  const pressurePsi = 15750; // pounds per square inch
  const pressureMPa = 108.6; // megapascals
  const tempC = 1; // degrees Celsius
  const tempF = 34; // degrees Fahrenheit
  const salinity = 34.7; // practical salinity units (PSU)

  return (
    <div className="flex h-full flex-col space-y-2">
      <div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          Challenger Deep
        </h3>
        <p className="text-xs text-gray-500">Mariana Trench • Pacific Ocean</p>
      </div>

      <div className="flex-1 space-y-2">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <div className="text-xs text-gray-500">Depth</div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {depthM.toLocaleString()} m
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">
              {depthFt.toLocaleString()} ft
            </div>
          </div>
          <div>
            <div className="text-xs text-gray-500">Temperature</div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {tempF}°F
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">
              {tempC}°C
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="rounded-lg bg-blue-50 p-2 dark:bg-blue-900/20">
            <div className="text-xs text-blue-600 dark:text-blue-400">Pressure</div>
            <div className="text-lg font-bold text-blue-900 dark:text-blue-200">
              {pressurePsi.toLocaleString()} psi
            </div>
            <div className="text-xs text-blue-600 dark:text-blue-400">
              {pressureMPa} MPa • Over 1,000x atmospheric pressure
            </div>
          </div>

          <div className="rounded-lg bg-cyan-50 p-2 dark:bg-cyan-900/20">
            <div className="text-xs text-cyan-600 dark:text-cyan-400">Salinity</div>
            <div className="text-lg font-bold text-cyan-900 dark:text-cyan-200">
              {salinity} PSU
            </div>
          </div>

          <div className="rounded-lg bg-indigo-50 p-2 dark:bg-indigo-900/20">
            <div className="text-xs text-indigo-600 dark:text-indigo-400">Location</div>
            <div className="text-sm font-semibold text-indigo-900 dark:text-indigo-200">
              11°22&prime;N 142°36&prime;E
            </div>
          </div>
        </div>
      </div>

      <div className="text-xs text-gray-400">
        Source: NOAA
      </div>
    </div>
  );
}
