import Image from 'next/image'
import { useRouter } from 'next/router'
import { getLanguage } from '@/lib/utils'

import styles from '@/components/careers/heights/Heights.module.css'

import heightsImg from '@/assets/reach-new-heights.jpg'

const Heights = () => {
  const router = useRouter()
  const { isArabic } = getLanguage(router.pathname)
  const lang = isArabic ? 'ar' : 'en'

  const content = {
    en: {
      title: 'Reaching New Heights',
      p1: 'We know that to deliver the best experiences to our guests, we need to build a culture and working environment that empowers our people to achieve their full potential.',
      p2: 'Driven by our people, Riyadh Air will lead the future of air travel.'
    },
    ar: {
      title: 'الوصل إلى آفاقٍ جديدة',
      p1: 'يستقطب طيران الرياض موظفين من خبرات مختلفة وتوفر لهم فرص مهنية مجزية. حين نسعى لتقديم ضيوفنا المسافرين أفضل التجارب، نعمل بالمقابل على خلق ثقافة وبيئة عمل تدعم موظفي في الوصول إلى آفاقٍ جديدة في مسيرتهم المهنية.',
      p2: ''
    }
  }
  return (
    <section
      className={`${styles['heights-section']} `} /* style="background-color: #F5F8FF;" */
    >
      <div className="grid grid-cols-12">
        <div className="col-span-12 sm:col-span-4 ipad section-image">
          <Image
            className=""
            src={heightsImg}
            /* style="visibility: hidden;" */ alt="reach new heights"
          />
        </div>
        <div
          className={`${styles['section-desc']} col-span-12 sm:col-span-8 py-8 flex flex-col justify-center items-center`}
        >
          <div className="py-8 sm:py-0">
            <h2 className="pb-4">{content[lang].title}</h2>
            <p>{content[lang].p1}</p>
            <p>{content[lang].p2}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Heights
