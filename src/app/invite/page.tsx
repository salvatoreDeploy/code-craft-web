
import { InputField, InputIcon, InputRoot } from '@/componets/input';
import logo from '../../assets/logo.svg'
import Image from "next/image";
import { BadgeCheckIcon, CopyIcon, Link, MedalIcon, MousePointerClick } from 'lucide-react';
import IconButton from '@/componets/icon-button';

export default function InvitePage() {
  return (
    <div className="min-h-dvh flex justify-between items-center gap-16 flex-col md:flex-row">
      <div className=" flex flex-col gap-10 w-full max-w-[550px]">
        <Image src={logo} alt="devstage" width={108.5} height={30} />

        <div className='space-y-2'>
          <h1 className='text-4xl font-semibold font-heading text-gray-100 leading-none'>Inscrição confirmada!</h1>
          <p>Para entrar no evento, acesse o link enviado para seu e-mail</p>
        </div>

        <div className='space-y-6'>
          <div className='space-y-3'>
            <h2 className='text-gray-200 text-xl font-heading font-semibold leading-none'>Indique e ganhe</h2>
            <p className='text-gray-300'>Convide mais pessoas para o evento e concorra a prêmios exclusivos! É só compartilhar o link abaixo e acompanhar as inscrições:</p>
          </div>

          <InputRoot>
            <InputIcon>
              <Link className='size-5' />
            </InputIcon>

            <InputField readOnly defaultValue="devstage.com/codecraft-summit-2025/1289" />

            <IconButton className='-mr-2'>
              <CopyIcon />
            </IconButton>
          </InputRoot>


          <div className='grid gap-3 md:grid-cols-3'>
            <div className='bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl relative'>
              <span className='font-heading text-2xl font-semibold text-gray-200'>1042</span>
              <span className='text-sm text-gray-300 leading-none text-center'>Acessos ao Link</span>

              <MousePointerClick className='size-5 text-purple absolute top-3 left-3' />
            </div>

            <div className='bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl relative'>
              <span className='font-heading text-2xl font-semibold text-gray-200'>875</span>
              <span className='text-sm text-gray-300 leading-none text-center'>Inscrições Feitas</span>

              <BadgeCheckIcon className='size-5 text-purple absolute top-3 left-3' />
            </div>

            <div className='bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl relative'>
              <span className='font-heading text-2xl font-semibold text-gray-200'>3°</span>
              <span className='text-sm text-gray-300 leading-none text-center'>Posição no ranking</span>

              <MedalIcon className='size-5 text-purple absolute top-3 left-3' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}