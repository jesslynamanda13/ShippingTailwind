import React from 'react'
import MyComponent from './Map';

const Payment = () => {
  return (
    <div className="isolate bg-white py-24 px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className = 'text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Address Information</h1>
        <p className = "mt-2 text-lg leading-8 text-gray-600">Kindly provide the necessary details for the shipping address in the following forms.</p>
      </div>
    <form className="mx-auto mt-16 max-w-xl sm:mt-20">
      <div className = "grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
        <div>
        <label for = "name" className='text-start block text-sm font-medium text-gray-700'>Receiver's Name</label>
        <div className="mt-2.5">
         <input required id = "name" className='block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6' type = "text" name = "recname" placeholder = "John Smith"/>
        </div>
        </div>

      <div>
       <label for = "recnum" className='text-start block text-sm font-medium text-gray-700'>Phone Number</label>
       <div className="mt-2.5">
       <input required id = "recnum" className='block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6' type = "tel" name = "recnum" placeholder = "085817206421"/>
       </div>
      </div>
      </div>

      <div className='sm:col-span-2 mt-2.5'>
       <label for = "recaddlabel" className='text-start block text-sm font-medium text-gray-700'>Address Label</label>
       <div className="mt-2.5">
       <input required id = "recaddlabel" className='block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6'type = "text" name = "recaddlabel" placeholder = "ex: Home, Office, etc."/>
       </div>
      </div>

      <div className = 'sm:col-span-2 mt-2.5'>
       <label for = "recadd" className='text-start block text-sm font-medium text-gray-700'>Address</label>
       <div className="mt-2.5">
       <input required id = "recadd" className= 'block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6'type = "textarea" name = "recadd" placeholder = "Kebayoran Baru Street, Block F No. 10A, South Jakarta, Jakarta City, 10390"/>
       </div>
      </div>

      <div className = 'sm:col-span-2 mt-2.5'>

       <label for = "recdetails" className='text-start block text-sm font-medium text-gray-700'>Other Details</label>
       <div className="mt-2.5">
       <input required type = "text" className = 'block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6'name = "recdetails" placeholder = "ex: Nearest Hotel, Supermarket, etc."/>
       </div>
      </div>

      <div className="sm:col-span-2 mt-2.5">
        <label for="message" class="text-start block text-sm font-semibold leading-6 text-gray-900">Message</label>
        <div className="mt-2.5">
          <textarea required placeholder = "Write your additional notes to your order here!" name="message" id="message" rows="4" class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"></textarea>
        </div>
      </div>

      <div className="sm:col-span-2 mt-2.5">
       <label className='text-start block text-sm font-semibold leading-6 text-gray-900'>Pinpoint</label>
       <div className="mt-2.5">

       <iframe className='block w-full flex-1 max-h-screen max-w-full grid-flow-col rounded-xl' width="520" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Kebayoran%20Baru%20Jakarta+(Jakarta)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href='https://maps-generator.com/'></a>
       </div>
      </div>

    </form>
    </div>


  )
}

export default Payment