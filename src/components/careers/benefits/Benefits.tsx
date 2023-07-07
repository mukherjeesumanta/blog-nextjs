import Image from 'next/image'
import { useRouter } from 'next/router'
import { getLanguage } from '@/lib/utils'
import styles from '@/components/careers/benefits/Benefits.module.css'

import digitalImg from '@/assets/2_digital_native_.svg'
import careerGrowthImg from '@/assets/3_career_growth_.svg'
import compensationImg from '@/assets/4_compensation_benefits_.svg'
import cultureImg from '@/assets/5_culture_diversity_.svg'

const Benefits = () => {
  const router = useRouter()
  const { isArabic } = getLanguage(router.pathname)
  const lang = isArabic ? 'ar' : 'en'

  const content = {
    en: {
      title: 'Why Riyadh Air?',
      benefits: [
        {
          title: 'Digitally Native and Innovative',
          desc: 'We are more than just an airline. We are a tech-driven disruptor that is changing the way travelers fly. Join a team that innovates and implements creative solutions to air travel.'
        },
        {
          title: 'Career Growth and Development',
          desc: 'Get the most out of your career with our training and development programs. You’ll be exposed to a wealth of knowledge and everyday learning opportunities.'
        },
        {
          title: 'Compensation and Benefits',
          desc: 'We provide a generous compensation and benefit packages. Our company is committed to recognizing and rewarding people for their efforts.'
        },
        {
          title: 'Culture and Environment',
          desc: 'Our people-centric approach fosters a culture that promotes a diverse and inclusive workplace and advocates a healthy work-life balance. We have built our foundation on respect, cooperation, and Saudi hospitality.'
        }
      ]
    },
    ar: {
      title: 'المزايا الوظيفية',
      benefits: [
        {
          title: 'بيئة رقمية ومبتكرة',
          desc: 'نحن أكثر من مجرد شركة طيران. سوف نركز اهتمامنا على تبني أحدث التقنيات الرقمية لتقديم تجربة سفر استثنائية. انضم إلى فريق عمل يطور ويبدع في تقديم حلول مبتكرة في مجال الطيران والسفر.'
        },
        {
          title: 'التطور المهني',
          desc: 'برامجنا المهنية في طيران الرياض تدعم جميع موظفينا على تطوير مهاراتهم في مسيرتهم المهنية. اكتشف العديد من فرص التعلم واكتساب الخبرات في بيئة ابتكارية.'
        },
        {
          title: 'البدلات والمزايا',
          desc: 'نقدر في طيران الرياض جهود موظفينا ونحرص على مكافأتهم، حيث نقدم باقة مزايا وبدلات متميزة.'
        },
        {
          title: 'الثقافة والرفاهية',
          desc: 'صحة ورفاهية موظفينا من أولويتنا. نعمل في طيران الرياض على بناء ثقافة مؤسسية شاملة ومتنوعة تساهم في التوازن بين العمل والحياة الشخصية. حيث يعتبر الاحترام والحفاوة والتعاون حجر الأساس لهذه الثقافة.'
        }
      ]
    }
  }

  return (
    <section className={`${styles['benefits-section']} bg-white`}>
      <div>
        <h2 className="text-center">{content[lang].title}</h2>
        <div className="grid grid-cols-12 sm:gap-9">
          <div className={`${styles['benefit-card']}`}>
            <div className="icon">
              <Image src={digitalImg} alt="" />
            </div>
            <p className="benefit-card-header pt-[12%] pb-[7%] font-bold uppercase text-base not-italic tracking-[.24rem]">
              {content[lang].benefits[0].title}
            </p>
            <p className={styles['benefit-card-desc']}>
              {content[lang].benefits[0].desc}
            </p>
          </div>
          <div className={`${styles['benefit-card']}`}>
            <div className="icon">
              <Image src={careerGrowthImg} alt="" />
            </div>
            <p className="benefit-card-header pt-[12%] pb-[7%] font-bold uppercase text-base not-italic tracking-[.24rem]">
              {content[lang].benefits[1].title}
            </p>
            <p className={styles['benefit-card-desc']}>
              {content[lang].benefits[1].desc}
            </p>
          </div>
          <div className={`${styles['benefit-card']}`}>
            <div className="icon">
              <Image src={compensationImg} alt="" />
            </div>
            <p className="benefit-card-header pt-[12%] pb-[7%] font-bold uppercase text-base not-italic tracking-[.24rem]">
              {content[lang].benefits[2].title}
            </p>
            <p className={styles['benefit-card-desc']}>
              {content[lang].benefits[2].desc}
            </p>
          </div>
          <div className={`${styles['benefit-card']}`}>
            <div className="icon">
              <Image src={cultureImg} alt="" />
            </div>
            <p className="benefit-card-header pt-[12%] pb-[7%] font-bold uppercase text-base not-italic tracking-[.24rem]">
              {content[lang].benefits[3].title}
            </p>
            <p className={styles['benefit-card-desc']}>
              {content[lang].benefits[3].desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits
