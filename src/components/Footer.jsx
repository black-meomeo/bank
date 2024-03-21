import styles from '../style'
import {logo} from '../assets'
import  {footerLinks, socialMedia} from '../constants'

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.padding} ${styles.marginY} bg-dimBg flex-col text-white`}>
    <div className={`sm:${styles.flexStart} ${styles.flexCenter} flex-col md:flex-row mb-8 w-full`}>
      <div className='flex flex-[1] flex-col justify-start mr-10'>
        <img src={logo} alt='logo' className='w-[266px] h-[72.14px] object-contain'/>
        <p className={`font-poppins font-normal text-[18px] leading-[32px] max-w-[312px] text-dimWhite mt-6 ml-7`}>A new way to make the payments easy, reliable and secure.</p>
      </div>
      <div className='flex flex-row flex-wrap justify-between w-full flex-[1.5] md:mt-0 mt-14 '>
        {footerLinks.map((footerLink) =>(
          <div key={footerLink.title} className={`flex flex-col ss:my-0 min-w-[150px] my-4`}>
            <h4 className='font-poppins font-medium text-[18px] leading-[32px]'>
              {footerLink.title}
            </h4>
            <ul className='list-none mt-4'>
              {footerLink.links.map((link, index) =>(
                <li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                  index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                }`}>{link.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className=' w-full flex md:flex-row flex-col justify-between pt-6 items-center border-t-[1px] border-t-[#3F3E45]'>
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
      Copyright Ⓒ 2022 HooBank. All Rights Reserved.
      </p>
      <div className='flex flex-row  md:mt-0 mt-6'>
        {socialMedia.map((social, index)=>(
          <img src={social.icon}  key={social.id} alt='social.ids'  className={`w-[21px] h-[21px] object-contain cursor-pointer
           ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"}`}   onClick={() => window.open(social.link)}/>
        ))}
      </div>
    </div>

  </section>
)
export default Footer