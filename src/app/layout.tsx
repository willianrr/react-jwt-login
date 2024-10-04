'use client'
import ModalActions from '@/components/Modals/ModalActions/ModalActions'
import { signOut } from 'next-auth/react'
import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { removeCookie } from './actions'
import './globals.css'
import Provider from './Provider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [exit, setExit] = useState<boolean>(false)

  const handleExit = async () => {
    setExit(false)
    await removeCookie('Authorization')
    return signOut({ callbackUrl: '/login' })
  }

  return (
    <html lang="pt-br">
      <body suppressHydrationWarning={true}>
        <Provider>
          <div className="dark:bg-boxdark-2 dark:text-bodydark">
            <div className="flex h-screen overflow-hidden">
              <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                <main>
                  <div className="mx-auto h-full max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                    {children}
                  </div>
                  <ToastContainer
                    position="bottom-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                  />
                  {exit && (
                    <ModalActions
                      title="Tem certeza que deseja sair?"
                      primaryAction={() => handleExit()}
                      primaryText="Sair"
                      secondaryAction={() => setExit(false)}
                      secondaryActionText={'Cancelar'}
                    />
                  )}
                </main>
              </div>
            </div>
          </div>
        </Provider>
      </body>
    </html>
  )
}
