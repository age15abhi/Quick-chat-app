import DashNav from '@/components/dashboard/DashNav'
import React from 'react'
import { authOption, CustomSession } from '../api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'

export default async function dashboard() {

    const session:CustomSession|null = await getServerSession(authOption);


  return (
    <div>
      <DashNav name={session?.user?.name!} image={session?.user?.image ?? undefined} />
      <p className='bg-white text-black'>{JSON.stringify(session)}</p>
    </div>
  )
}
