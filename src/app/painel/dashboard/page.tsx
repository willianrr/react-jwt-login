'use client'
import { removeCookie } from '@/app/actions'
import ModalActions from '@/components/Modals/ModalActions/ModalActions'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { Suspense, useState } from 'react'

const Dashboard: React.FC = () => {
  const { push } = useRouter()
  const [exit, setExit] = useState<boolean>(false)
  const handleExit = async () => {
    setExit(false)
    await removeCookie('Authorization')
    return signOut({ callbackUrl: '/login' })
  }
  return (
    <Suspense fallback={'Carregando...'}>
      <div className="flex flex-col">
        <p>Seja bem vindo Dashboard</p>
        <div className="mt-5 flex gap-5">
          <button
            className="w-[150px] cursor-pointer rounded-lg border border-primary bg-primary p-4 py-2 mt-4 text-white transition hover:bg-opacity-90"
            onClick={() => push('/painel/user')}
          >
            Painel User
          </button>
          <button
            className="w-[150px] cursor-pointer rounded-lg border border-primary bg-primary p-4 py-2 mt-4 text-white transition hover:bg-opacity-90"
            onClick={() => push('/painel/admin')}
          >
            Painel Admin
          </button>
          <button
            className="w-[150px] cursor-pointer rounded-lg border border-primary bg-primary p-4 py-2 mt-4 text-white transition hover:bg-opacity-90"
            onClick={() => setExit(!exit)}
          >
            Sair
          </button>
        </div>
        {exit && (
          <ModalActions
            title="Tem certeza que deseja sair?"
            primaryAction={() => handleExit()}
            primaryText="Sair"
            secondaryAction={() => setExit(false)}
            secondaryActionText={'Cancelar'}
          />
        )}
      </div>
    </Suspense>
  )
}

export default Dashboard
