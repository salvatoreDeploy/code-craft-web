"use client";

import Button from "@/componets/button";
import { InputField, InputIcon, InputRoot } from "@/componets/input";
import { type EventEntity, type UserEntity, registerToEvent } from "@/http/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Mail, User } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

import { useForm } from "react-hook-form";
import { z } from "zod";

export interface SubscriptionEntity {
  subscriptionNumber?: number;
  eventId?: EventEntity;
  subscribedUserId?: UserEntity;
  indicationUserId?: UserEntity;
}

export type RegisterParams = {
  subscription: SubscriptionEntity;
};

const subscriptionSchema = z.object({
  name: z.string().min(2, "Digite seu nome completo"),
  email: z.string().email("Digite um e-mail valido"),
});

type SubscriptionSchema = z.infer<typeof subscriptionSchema>;

export const getRegisterUrl = (prettyName: string, userId?: number) => {
  const normalizedParams = new URLSearchParams();

  return userId
    ? `http://localhost:8080/subscripition/${prettyName}/${userId}`
    : `http://localhost:8080/subscripition/${prettyName}`;
};

export default function SubscriptionFormComponent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const userId = searchParams.get("referrer");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubscriptionSchema>({
    resolver: zodResolver(subscriptionSchema),
  });

  async function onSubscribe({ email, name }: SubscriptionSchema) {
    const { subscriptionNumber } = await registerToEvent(
      "codecraft-summit-2027",
      {
        email,
        name,
      },
      Number(userId)
    );

    router.push(`/invite/${subscriptionNumber}`);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubscribe)}
      className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]"
    >
      <h2 className="font-heading font-semibold text-gray-200 text-xl">
        Inscrição
      </h2>

      <div className="space-y-3">
        <div className="space-y-2">
          <InputRoot>
            <InputIcon>
              <User />
            </InputIcon>
            <InputField
              {...register("name")}
              type="text"
              placeholder="Nome Completo"
            />
          </InputRoot>
          {errors.name && (
            <p className="text-danger text-xs font-semibold">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <InputRoot>
            <InputIcon>
              <Mail />
            </InputIcon>
            <InputField
              {...register("email")}
              type="email"
              placeholder="E-mail"
            />
          </InputRoot>

          {errors.email && (
            <p className="text-danger text-xs font-semibold">
              {errors.email.message}
            </p>
          )}
        </div>

        <Button type="submit">
          Confirmar
          <ArrowRight />
        </Button>
      </div>
    </form>
  );
}
