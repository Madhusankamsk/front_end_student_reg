import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import { BellIcon } from 'lucide-react'


export default function NavBar() {
  return (
    <nav className='flex justify-between item-center p-2' >
        <Image src="/404.svg" width={80} height={80} alt='logo' />
        <input className='bg-gray-400'/>
        <div>
            <Button size="icon">
                <BellIcon className='w-5 h-5'/>
            </Button>
        </div>
    </nav>
  )
}
