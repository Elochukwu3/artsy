import Image from 'next/image'
import Link from 'next/link'



export default function DisplayStore({pages}) {

  return (
   <>
   {
    pages && pages.length > 0 ? (
        pages.map(({img, name, price, id})=>{
            return(
                <Link href={'/market_place/editorials/'+name} key={id}
                className='h-auto w-[27.44%] bg-[#FFFF] p-4 rounded-[12px] 
                drop-shadow-[0px_0px_2px_grey] shrink-0 
                max-md:w-full max-md:rounded-none bg-white'>
                <div className='w-[100%] mb-2 h-[40vh] relative'>
                  <Image
                    src={img}
                    fill
                    className="w-full h-full max-sm:object-cover"
                    alt=""
                    />
                </div>
                <p className='uppercase'>{name}</p>
                <p className='pt-1 text-[#333333] text-[27px] font-bold max-md:hidden'>${price}</p>
            </Link>
            
            )
        })
    ):""
   }
   </>
  )
}
