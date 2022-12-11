import DisplayStore from "../../components/DisplayStore";
import FilterIcons from "../../components/FilterIcons";
import { storedItems } from '../../assets/salesItems';

export const getStaticProps = async() =>{
    return{
      props: {pages: storedItems}
    }
  }

function Index({pages}) {
  
  return (
    <div>
      <main>
        <section className="w-full flex justify-center">
          <div className="w-[90%] bg-white">
            <header>
              <form className="flex justify-between w-full items-center">
                <div className="bg-[#f4f2f2] flex h-[2.5rem] items-center py-2 px-1 gap-1 shrink-0">
                  <img
                    src="/nav-img/search.png"
                    alt="search"
                    className="w-[10%] h-[70%]"
                  />
                  <input
                    placeholder="Search"
                    className="w-[60%] h-full bg-transparent outline-none"
                  />
                </div>
                <div className="basis-[75%] bg-[#f9f9f9] px-3 py-2 shadow-sm border-none rounded-md">
                  <div className="flex justify-between w-full bg-white py-2 px-3">
                    <div>See 1-6 of 15 results</div>
                    <select className="bg-white px-2 py-1 border border-slate-400 rounded-md w-[7rem] text-center">
                      <option>sort by</option>
                    </select>
                  </div>
                </div>
              </form>
            </header>
            <section className="w-full flex gap-8 mt-10">
              <aside className="w-[230px]">
                <FilterIcons />
              </aside>
              <div className="flex-1 px-2 flex gap-4 flex-wrap justify-around">
                <DisplayStore pages={pages}/>
              </div>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}
export default Index;
