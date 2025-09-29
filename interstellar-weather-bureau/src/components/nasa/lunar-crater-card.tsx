'use client';

export default function LunarCraterCard() {
  return (
    <div className="flex h-full flex-col space-y-3">
      <div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          South Pole Crater
        </h3>
        <p className="text-xs text-gray-500">
          Permanently Shadowed Region
        </p>
      </div>

      <div className="flex-1 space-y-3">
        <div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            -410°F / -246°C
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">
            27K
          </div>
          <div className="text-xs text-gray-500 mt-1">
            Deep crater temperature
          </div>
        </div>

        <div className="space-y-2">
          <div className="rounded-lg bg-cyan-50 p-2 dark:bg-cyan-900/20">
            <div className="text-xs text-cyan-600 dark:text-cyan-400">Ancient Ice Deposits</div>
            <div className="text-sm font-semibold text-cyan-900 dark:text-cyan-200 mt-1">
              Billions of years old
            </div>
            <div className="text-xs text-cyan-700 dark:text-cyan-300 mt-1">
              Preserved in forever-dark regions
            </div>
          </div>

          <div className="rounded-lg bg-indigo-50 p-2 dark:bg-indigo-900/20">
            <div className="text-xs text-indigo-600 dark:text-indigo-400">Coldest in Solar System</div>
            <div className="text-sm font-semibold text-indigo-900 dark:text-indigo-200 mt-1">
              Colder than Pluto's surface
            </div>
          </div>
        </div>

        <div className="text-xs text-gray-600 dark:text-gray-400">
          Permanent shadows near the Moon's poles keep these craters at extreme temperatures
        </div>
      </div>

      <div className="text-xs text-gray-400">
        Source: NASA Lunar Reconnaissance Orbiter
      </div>
    </div>
  );
}