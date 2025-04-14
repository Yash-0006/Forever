import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            <div>
                <img src={assets.logo} className='mb-5 w-32 ' alt=''/>
                <p className='w-full md:w-2/3  text-gray--600'>We are the largest bestest and superior yaskin of the kalki 2090 ad and we are glad we had oppurtunity to become a part of LCU and i was big fan of the kateramma fight and salaar devaratha raisar where sourangyas are RCbians like us fought for freedom in 1947 from the asia of the country.</p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600 '>
                    <li>Home</li>
                    <li>About US</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>Get in Touch</p>
                <ul className='flex flex-col gap-1 text-gray-600 '>
                    <li>703296012</li>
                    <li>contact@fornever.in</li>
                </ul>
            </div>

        </div>
        <div>
            <hr className='text-gray-400'/>
            <p className='py-5 text-sm text-center'>Copyright2025 @fornever.com - All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer