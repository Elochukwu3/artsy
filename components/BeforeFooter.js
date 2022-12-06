import styles from '../styles/Home.module.css'

export default function BeforeFooter() {
  return (
    <div className="w-screen">
      <div className="bg-[#E2E2E2] w-full">
        <section className="w-full px-24">
          <div className="w-full flex justify-between pt-10">
            <h2 className="text-3xl font-bold w-[30%]">
              TOP CREATORS OF THE WEEK
            </h2>
            <div className="flex gap-2">
              <div className="w-2 h-full bg-[grey]"></div>
              <ul className="space-y-5 text-2xl">
                <li>Editorials</li>
                <li>Fashion</li>
                <li>Lifestyle</li>
                <li>Blueprint</li>
              </ul>
            </div>
          </div> 
          <div className={` relative ${styles.clashFont}`}>
             <p className='text-[30px] text-[grey]'>
             “Everything always looked better in black and white. Everything
              always as if it were the first time; there’s always more people in
              a black and white photograph. It just makes it seem that there
              were more people at a gig, more people at a football match, than
              with colour photography. Everything looks more exciting.”– Jack
              Lowden
             </p>
              <span className='absolute font-bold text-[48px] right-10 inset-y-1/3 leading-[74.64px]'>CIRCA</span>
              <p className='flex justify-end font-bold text-[170px] leading-[264px] line-through'>
              1985
              </p>
            </div>
        </section>
      </div>
    </div>
  );
}
