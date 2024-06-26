import styles from '../style'
import { arrowUp } from '../assets'


const GetStarted =() => (
  <div className={`${styles.flexCenter} w-[140px] h-[140px] bg-blue-gradient rounded-full p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary rounded-full w-[100%] h-[100%]`}>
      <div className={`${styles.flexCenter} flex-row`}>
        <p className='font-poppins font-medium text-[18px] leading-[23px]'>
          <span className='text-gradient'>Get</span>
        </p>
        <img src={arrowUp} alt='arrow' className='h-[23px] w-[23px] object-contain'  />
      </div>

      <p className='font-poppins font-medium text-[18px] leading-[23px]'>
          <span className='text-gradient'>Started</span>
      </p>

    </div>
  </div>
)
 


export default GetStarted