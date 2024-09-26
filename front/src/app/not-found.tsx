import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Notfound() {
  return (
    <div className='h-screen flex justify-center items-center flex-col'>
        <Image
        src='/images/404.svg'
        width={400}
        height={500}
        alt='404'
        />

        <Link href="/">
        <Button>
            Back to Home
        </Button>
        </Link>
      
    </div>
  )
}
