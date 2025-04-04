import IconButton from "@/componets/icon-button";
import { InputField, InputIcon, InputRoot } from "@/componets/input";
import {
  BadgeCheckIcon,
  CopyIcon,
  Link,
  MedalIcon,
  MousePointerClick,
} from "lucide-react";
import Image from "next/image";
import logo from "../../../assets/logo.svg";
import InviteLinkInputComponent from "./invite-link-input";
import RankingComponent from "./ranking";
import StatsComponent from "./stats";

interface InvitePageProps {
  params: Promise<{
    subscribedId: number;
  }>;
}

export default async function InvitePage(props: InvitePageProps) {
  const { subscribedId } = await props.params;

  const inviteLink = `http://localhost:8080/subscripition/${subscribedId}`;

  return (
    <div className="min-h-dvh flex justify-between items-center gap-16 flex-col md:flex-row">
      <div className=" flex flex-col gap-10 w-full max-w-[550px]">
        <Image src={logo} alt="devstage" width={108.5} height={30} />

        <div className="space-y-2">
          <h1 className="text-4xl font-semibold font-heading text-gray-100 leading-none">
            Inscrição confirmada!
          </h1>
          <p>Para entrar no evento, acesse o link enviado para seu e-mail</p>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
              Indique e ganhe
            </h2>
            <p className="text-gray-300">
              Convide mais pessoas para o evento e concorra a prêmios
              exclusivos! É só compartilhar o link abaixo e acompanhar as
              inscrições:
            </p>
          </div>

          <InviteLinkInputComponent inviteLink={inviteLink} />

          <StatsComponent userId={subscribedId} />
        </div>
      </div>

      <RankingComponent />
    </div>
  );
}
