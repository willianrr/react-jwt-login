'use client'

import { useRouter } from 'next/navigation'

export default function Error() {
  const { push } = useRouter()
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>Algo deu errado!</h2>
      <p>Você não tem permissão</p>
      <button
        className="w-[150px] cursor-pointer rounded-lg border border-primary bg-primary p-4 py-2 mt-4 text-white transition hover:bg-opacity-90"
        onClick={() => push('/painel/dashboard')}
      >
        Voltar
      </button>
    </div>
  )
}
