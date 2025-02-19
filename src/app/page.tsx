import Button from "@/componets/button";
import IconButton from "@/componets/icon-button";
import { InputField, InputIcon, InputRoot } from "@/componets/input";
import { ArrowRight, Copy, Mail } from "lucide-react";

export default function Home() {
  return (
    <main>
      <Button>
        Enviar
        <ArrowRight />
      </Button>

      <IconButton>
        <Copy />
      </IconButton>

      <div>
        <InputRoot>
          <InputIcon>
            <Mail className="size-5" />
          </InputIcon>
          <InputField />
        </InputRoot>
      </div>
    </main>
  );
}
