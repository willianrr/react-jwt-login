'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Admin: React.FC = () => {
  const [admin, setAdmin] = useState<any>()
  const { push } = useRouter()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/admin')
        if (!response.ok) {
          push('/error')
        }
        const data = await response.json()
        setAdmin(data)
        setLoading(false)
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error)
      }
    }

    fetchData()
  }, [])
  return (
    <>
      {!loading ? (
        <div className="flex p-4 flex-col">
          <p>Olá eu sou o Admin</p>
          <button
            className="w-[150px] cursor-pointer rounded-lg border border-primary bg-primary p-4 py-2 mt-4 text-white transition hover:bg-opacity-90"
            onClick={() => push('/painel/dashboard')}
          >
            Voltar
          </button>
        </div>
      ) : (
        <div>Carregando...</div>
      )}
    </>
  )
}

export default Admin
