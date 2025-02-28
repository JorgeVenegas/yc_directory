import React from 'react'

const Ping = () => {
    return (
        <div className='relative'>
            <div className='absolute -left-2 -top-1'>
                <span className='flex size-[11px]'>
                    <span className='absolute inline-flex h-full w-full bg-primary rounded-full opacity-75 animate-ping'></span>
                    <span className='absolute inline-flex h-full w-full bg-primary rounded-full'></span>
                </span>
            </div>
        </div>
    )
}

export default Ping