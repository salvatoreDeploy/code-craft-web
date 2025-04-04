"use client";

import IconButton from "@/componets/icon-button";
import { InputField, InputIcon, InputRoot } from "@/componets/input";
import { CopyIcon, Link } from "lucide-react";

interface InviteLinkInputProps {
  inviteLink: string;
}

export default function InviteLinkInputComponent({
  inviteLink,
}: InviteLinkInputProps) {
  function InviteLinkInput() {
    navigator.clipboard.writeText(inviteLink);
  }

  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>

      <InputField readOnly defaultValue={inviteLink} />

      <IconButton className="-mr-2" onClick={InviteLinkInput}>
        <CopyIcon className="size-5" />
      </IconButton>
    </InputRoot>
  );
}
