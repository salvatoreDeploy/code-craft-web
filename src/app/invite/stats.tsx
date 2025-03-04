import { BadgeCheckIcon, MedalIcon, MousePointerClick } from "lucide-react";

export default function StatsComponent() {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      <div className="bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl relative">
        <span className="font-heading text-2xl font-semibold text-gray-200">
          1042
        </span>
        <span className="text-sm text-gray-300 leading-none text-center">
          Acessos ao Link
        </span>

        <MousePointerClick className="size-5 text-purple absolute top-3 left-3" />
      </div>

      <div className="bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl relative">
        <span className="font-heading text-2xl font-semibold text-gray-200">
          875
        </span>
        <span className="text-sm text-gray-300 leading-none text-center">
          Inscrições Feitas
        </span>

        <BadgeCheckIcon className="size-5 text-purple absolute top-3 left-3" />
      </div>

      <div className="bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl relative">
        <span className="font-heading text-2xl font-semibold text-gray-200">
          3°
        </span>
        <span className="text-sm text-gray-300 leading-none text-center">
          Posição no ranking
        </span>

        <MedalIcon className="size-5 text-purple absolute top-3 left-3" />
      </div>
    </div>
  );
}
