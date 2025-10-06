'use client';

export default function SolarCoreCard() {
  // Sun's core data
  const coreTempK = 15700000; // kelvin
  const coreTempC = 15700000 - 273; // celsius (approx)
  const coreTempF = 28000000; // fahrenheit (approx)
  const hydrogenConverted = 600; // million tonnes per second
  const age = 4.57; // billion years
  const lifeRemaining = 5; // billion years approximately
  const lifecycleProgress = (age / (age + lifeRemaining)) * 100; // ~48%
  const hydrogenPercent = 34; // at center due to fusion
  const heliumPercent = 64; // at center
  const massConverted = 100; // Earth masses converted to helium so far

  return (
    <div className="flex h-full flex-col space-y-2">
      <div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          Solar Core
        </h3>
        <p className="text-xs text-gray-500">Nuclear Fusion • Main Sequence</p>
      </div>

      <div className="flex-1 space-y-2">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <div className="text-xs text-gray-500">Core Temperature</div>
            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
              {coreTempF.toLocaleString()}°F
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">
              {coreTempK.toLocaleString()}K
            </div>
          </div>
          <div>
            <div className="text-xs text-gray-500">Lifecycle Progress</div>
            <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
              {lifecycleProgress.toFixed(0)}%
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">
              {age}B years old
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="rounded-lg bg-yellow-50 p-2 dark:bg-yellow-900/20">
            <div className="text-xs text-yellow-600 dark:text-yellow-400">Core Composition</div>
            <div className="text-lg font-bold text-yellow-900 dark:text-yellow-200">
              {hydrogenPercent}% H • {heliumPercent}% He
            </div>
            <div className="text-xs text-yellow-600 dark:text-yellow-400">
              At center (varies by depth)
            </div>
          </div>

          <div className="rounded-lg bg-orange-50 p-2 dark:bg-orange-900/20">
            <div className="text-xs text-orange-600 dark:text-orange-400">Fusion Rate</div>
            <div className="text-lg font-bold text-orange-900 dark:text-orange-200">
              {hydrogenConverted}M tonnes/sec
            </div>
            <div className="text-xs text-orange-600 dark:text-orange-400">
              Hydrogen → Helium conversion
            </div>
          </div>

          <div className="rounded-lg bg-red-50 p-2 dark:bg-red-900/20">
            <div className="text-xs text-red-600 dark:text-red-400">Total Converted</div>
            <div className="text-sm font-semibold text-red-900 dark:text-red-200">
              ~{massConverted} Earth masses
            </div>
            <div className="text-xs text-red-600 dark:text-red-400">
              {lifeRemaining}B years remaining
            </div>
          </div>
        </div>
      </div>

      <div className="text-xs text-gray-400">
        Source: NASA Solar Physics
      </div>
    </div>
  );
}
