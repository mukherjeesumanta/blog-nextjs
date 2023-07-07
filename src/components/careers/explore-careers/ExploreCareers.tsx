import { FC, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { getLanguage } from '@/lib/utils'

import Modal from '@/components/careers/confirm-modal/ConfirmModal'
import styles from '@/components/careers/explore-careers/ExploreCareers.module.css'
import pilotsImg from '@/assets/pilots.jpg'
import crewImg from '@/assets/cabin-crew.jpg'
import enggImg from '@/assets/engineering.jpg'
import guestExpImg from '@/assets/guest-experience.jpg'
import digitalImg from '@/assets/digital-and-innovation.jpg'
import corporateImg from '@/assets/corporate.jpg'

const ExploreCareers: FC = () => {
  const router = useRouter()
  const { isArabic } = getLanguage(router.pathname)
  const lang = isArabic ? 'ar' : 'en'

  const content = {
    en: {
      title: 'Driven by our people',
      desc: "At Riyadh Air, we know that the joy of flying goes beyond an innovative and exceptional guest experience or the destination that awaits. It's about the people, who ensure it happens. That's why our people are our greatest asset.",
      btnTxt: 'EXPLORE CAREERS AT Riyadh Air',
      thumbNailTxt: {
        pilot: 'Pilots',
        crew: 'Cabin Crew',
        engg: 'Engineering',
        guest: 'Commercial & Guest Experience',
        digital: 'Digital and Innovation',
        corporate: 'Corporate'
      }
    },
    ar: {
      title: 'موظفينا',
      desc: 'ندرك في طيران الرياض بأنّ متعة السفر ليست مجرد وصولك إلى وجهتك أو عبر تجربة سفر استثنائية بتقنيات مبتكرة، بل إنّها تتعلق بمن يشاركونا التجربة. لذلك فإننا نؤمن بأنّ موظفينا هم ثروتنا الحقيقة.',
      btnTxt: 'اكتشف الوظائف في طيران الرياض',
      thumbNailTxt: {
        pilot: 'طيارين',
        crew: 'طاقم الطائرة',
        engg: 'مهندسين',
        guest: 'تجربة الضيوف',
        digital: 'التقنية والابتك',
        corporate: 'الإدارة العامة'
      }
    }
  }

  const font = !isArabic ? styles['quiche'] : ''

  const [modalVisibility, setModalVisibility] = useState(false)
  const toggleModal = () => {
    setModalVisibility(!modalVisibility)
  }

  return (
    <>
      <section
        className={`${styles['career-section']} bg-white ltr:pl-[5%] rtl:pr-[5%]`}
      >
        <div className="grid grid-cols-12 ">
          <div
            className={`${styles['desc-container']} col-span-12 sm:col-span-5 md:col-span-6 lg:col-span-4 ltr:pr-10 rtl:pl-10 pb-10 sm:pb-0`}
          >
            <div className="description desc-center">
              <h2 className="pb-4">{content[lang].title}</h2>
              <p className="">{content[lang].desc}</p>
              <button
                type="button"
                className={`${styles['career-btn']} ${styles['btn-explore-careers']} text-white`}
                onClick={toggleModal}
              >
                {content[lang].btnTxt}
              </button>
            </div>
          </div>
          <div className="card-section col-span-12 sm:col-span-7 md:col-span-6 lg:col-span-8 ltr:ml-[-5%] rtl:mr-[-5%] ltr:sm:ml-0 rtl:sm:mr-0">
            <div
              className={`${font} card-container row grid grid-cols-2 lg:grid-cols-3 gap-4`}
            >
              <div className={`${styles['card-item']}`}>
                <Image className="" src={pilotsImg} alt="Pilots" />
                <span
                  className={`${styles['text-over-image']} ${styles['pilot-text-image-pos']}`}
                >
                  {content[lang].thumbNailTxt.pilot}
                </span>
              </div>
              <div className={`${styles['card-item']}`}>
                <Image className="" src={crewImg} alt="Cabin crew" />
                <span
                  className={`${styles['text-over-image']} ${styles['cabin-text-image-pos']}`}
                >
                  {content[lang].thumbNailTxt.crew}
                </span>
              </div>
              <div className={`${styles['card-item']}`}>
                <Image className="" src={enggImg} alt="Engineering" />
                <span
                  className={`${styles['text-over-image']} ${styles['engg-text-image-pos']}`}
                >
                  {content[lang].thumbNailTxt.engg}
                </span>
              </div>
              <div className={`${styles['card-item']}`}>
                <Image className="" src={guestExpImg} alt="Guest experience" />
                <span
                  className={`${styles['text-over-image']} ${styles['digi-text-image-pos']}`}
                >
                  {content[lang].thumbNailTxt.guest}
                </span>
              </div>
              <div className={`${styles['card-item']}`}>
                <Image
                  className=""
                  src={digitalImg}
                  alt="Digital and innovation"
                />
                <span
                  className={`${styles['text-over-image']} ${styles['digi-text-image-pos']}`}
                >
                  {content[lang].thumbNailTxt.digital}
                </span>
              </div>
              <div className={`${styles['card-item']}`}>
                <Image className="" src={corporateImg} alt="Corporate" />
                <span
                  className={`${styles['text-over-image']} ${styles['pilot-text-image-pos']}`}
                >
                  {content[lang].thumbNailTxt.corporate}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal showModal={modalVisibility} toggleModal={toggleModal} />
    </>
  )
}

export default ExploreCareers
