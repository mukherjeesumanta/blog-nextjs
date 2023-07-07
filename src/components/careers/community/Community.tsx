import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { getLanguage } from '@/lib/utils'
import Modal from '@/components/careers/confirm-modal/ConfirmModal'

import styles from '@/components/careers/community/Community.module.css'

import communityImg from '@/assets/join-community.png'

const Community = () => {
  const router = useRouter()
  const { isArabic } = getLanguage(router.pathname)
  const lang = isArabic ? 'ar' : 'en'

  const content = {
    en: {
      title: 'Join Riyadh Air’s Community',
      desc: 'Share with us your CV so that we can reach out to you when we have relevant job opening.',
      btnTxt: 'EXPLORE CAREERS AT Riyadh Air'
    },
    ar: {
      title: 'اكتشف الوظائف في طيران الرياض',
      desc: 'شارك معنا سيرتك الذاتية حتى نتمكن من التواصل معك عندما يكون لدينا فرصة عمل ذات صلة.',
      btnTxt: 'اكتشف الوظائف في طيران الرياض'
    }
  }

  const [modalVisibility, setModalVisibility] = useState(false)
  const toggleModal = () => {
    setModalVisibility(!modalVisibility)
  }
  return (
    <section
      className={`${styles['community-section']} relative max-[767px]:min-h-[40vh] max-[1000px]:min-h-[40vh] `}
    >
      <Image src={communityImg} alt="Join community" className="invisible" />
      <div className={`${styles.desc_section}`}>
        <h2 className="text-white ">{content[lang].title}</h2>
        <p className="text-white my-[10%] sm:my-[3%]">{content[lang].desc}</p>
        <button className={`${styles['career-btn']}`} onClick={toggleModal}>
          {content[lang].btnTxt}
        </button>
      </div>
      <Modal showModal={modalVisibility} toggleModal={toggleModal} />
    </section>
  )
}

export default Community
