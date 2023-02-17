import { useRouter } from 'next/router'
import React from 'react'
import Notice from './Notice'

const DropComp = () => {
    const redirect = useRouter()
  return (
   <section className='flex justify-center'>
     <div className='w-[80%] max-md:w-[90%]'>
        <div className='text-xl py-10 max-md:hidden '>
            <span className='text-black opacity-50 cursor-pointer' onClick={()=> redirect.push("/")} >Home</span>/
            <span className='text-black opacity-50 cursor-pointer' onClick={()=> redirect.push("/auction")} >Auction</span>/
            <span className='text-black cursor-pointer'>Drop</span>
        </div>
       <div className='flex flex-col items-center space-y-5'>
       <h1 className='text-[29px] font-bold'>Upcoming drops</h1>
        <p className='text-[24px] opacity-50 max-md:text-center'>Turn on notications so that no drops will miss you</p>
        <button className='bg-white w-[10rem] h-[7vh] border border-grey-400 rounded-md text-xl font-medium hover:bg-blue-700 hover:text-white'>Notify me</button>
       </div>
       <Notice upcoming={"upcoming"} bgColor={"#4693ed"} caption={"Eyo: Eko for show"} notify={"Get notified"} image={"/featured-img/notify-1.png" }/>
       <Notice upcoming={"live now"} bgColor={"green"} caption={"ginger surbubs"} notify={"join"} image={"/featured-img/notify-2.png" }/>
       <Notice upcoming={"ended"} bgColor={"#87817a"} caption={"sink"} notify={"view"} image={"/featured-img/notify-3.png" }/>
       <Notice upcoming={"ended"} bgColor={"#87817a"} caption={"wraped '99"} notify={"view"} image={"/featured-img/notify-1.png" }/>
     </div>
   </section>
  )
}

export default DropComp