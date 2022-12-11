import Link from 'next/link'



export default function DisplayStore({pages}) {

  return (
   <>
   {
    pages && pages.length > 0 ? (
        pages.map(({img, name, price, id})=>{
            return(
                <Link href={'/market_place/editorials/'+name} key={id}
                className='h-[340px] w-[27.44%] bg-[#FFFF] p-4 rounded-[12px] drop-shadow-[0px_0px_2px_grey] shrink-0'>
                <div className='w-[100%] mb-2'>
                    <img src={img} className="w-full"/>
                </div>
                <p className='uppercase'>{name}</p>
                <p className='pt-3 text-[#333333] text-[27px] font-bold'>${price}</p>
            </Link>
            
            )
        })
    ):""
   }
   </>
  )
}
