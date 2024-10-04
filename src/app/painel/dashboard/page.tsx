import React, { Suspense } from 'react'

const Dashboard: React.FC = () => {
  return (
    <Suspense fallback={'Carregando...'}>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5 mb-6">
        <p>Seja bem vindo Dashboard</p>
      </div>
    </Suspense>
  )
}

export default Dashboard
