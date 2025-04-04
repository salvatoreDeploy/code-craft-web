import { generateRankingByEvent } from "@/http/api";
import Image from "next/image";
import gold from "../../../assets/medal1.svg";
import silver from "../../../assets/medal2.svg";
import cooper from "../../../assets/medal3.svg";

export default async function RankingComponent() {
  const prettyName = "codecraft-summit-2027";

  const { ranking } = await generateRankingByEvent(prettyName);

  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        {Array.isArray(ranking) ? (
          ranking.map((item, index) => {
            const rakingPosition = index + 1;

            return (
              <div
                key={item.userId}
                className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3"
              >
                <span className="text-sm text-gray-300 leading-none">
                  <span>{rakingPosition}°</span> | {item.name}
                </span>

                <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                  {item.subscribers}
                </span>

                {rakingPosition === 1 && (
                  <Image src={gold} alt="" className="absolute top-0 right-8" />
                )}
                {rakingPosition === 2 && (
                  <Image
                    src={silver}
                    alt=""
                    className="absolute top-0 right-8"
                  />
                )}
                {rakingPosition === 3 && (
                  <Image
                    src={cooper}
                    alt=""
                    className="absolute top-0 right-8"
                  />
                )}
              </div>
            );
          })
        ) : (
          <p>Sem dados de subscribers disponíveis ou dados não carregados.</p>
        )}
      </div>
    </div>
  );
}
