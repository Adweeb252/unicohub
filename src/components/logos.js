import { Logo } from "../constants/Logo";

const Logos = () =>
{
    return(
        <div className="w-3/4 mx-auto my-32">
            <div className='flex flex-row max-h-[400px] overflow-hidden flex-wrap justify-center items-center gap-12 md:gap-18 '>
            {
            Logo && Logo.map((logo) => {
                return <img src={logo.imgurl} key={logo.id} alt={logo.alt} className='max-h-11 h-2/4'/>
            })
            }
            </div>
            <h3 className='font-medium text-gray-300 text-center  mt-14 md:mt-28 '>Trusted by the world’s most ambitious teams.</h3>
        </div>
    )
}

export default Logos;