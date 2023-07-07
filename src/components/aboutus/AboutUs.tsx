import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'
import { getLanguage } from '@/lib/utils'
import DirectorsCarousel from '@/components/directors-carousel/DirectorsCarousel'
import styles from '@/components/aboutus/AboutUs.module.css'
import cloudImage from '@/assets/about-us-cloud.jpg'
import peopleImage from '@/assets/about-us-globe.jpg'
import inspirationImage from '@/assets/aboutus-inspiration.jpg'
import ceoImage from '@/assets/ceo.jpg'
import contactImg from '@/assets/contact-bg.png'

const AboutUsComponent = () => {
  const router = useRouter()
  const { isArabic } = getLanguage(router.pathname)
  const lang = isArabic ? 'ar' : 'en'
  const parallaxSpeed = 10

  const ourJourney = {
    en: {
      h2: 'Our Journey',
      p1: 'Riyadh Air seeks to lead the aviation industry by transforming Saudi Arabia, given its unique strategic location, into a global aviation and trade hub. It is the product of the National Aviation Strategy, which sets out to shape the future of flying by:',
      li: [
        <>
          Launching a <strong>new national airline</strong>, based in Riyadh.
        </>,
        'Introducing new modern standards in the aviation sector',
        <>
          Supporting the ambition to triple annual travelers to{' '}
          <strong>330 million</strong> by 2030
        </>
      ],
      p2: 'Riyadh Air will serve as a platform to drive this vision - showcasing the very best of the Kingdom to the world.',
      imgAlt: 'journey image'
    },
    ar: {
      h2: 'رحلتنا',
      p1: 'نتطلع نحو الريادة في قطاع الطيران، وذلك من خلال الموقع الاستراتيجي الفريد للمملكة العربية السعودية وكونها محوراً للتجارة وبوابة للعالم. ويأتي ذلك تماشياً مع الاستراتيجية الوطنية للطيران والتي تعمل على ترسيخ مكانة المملكة في مجال النقل الجوي من خلال:',
      li: [
        'أن نكون الناقل الجوي الجديد من العاصمة الرياض',
        'تبني معايير جديدة بأحدث التقنيات الرقمية في خدمات النقل الجوي',
        'المساهمة في تحقيق أهداف قطاع الطيران وذلك بنقل 330 مليون مسافر بحلول عام 2030'
      ],
      p2: 'سيساهم  طيران الرياض في رسم مستقبل قطاع الطيران في المملكة وإبراز المملكة كوجهة سياحية عالمية وليكون الناقل الجوي الجديد ضمن أفضل شركات الطيران حول العالم.',
      imgAlt: 'journey image'
    }
  }
  const riyadhAir = {
    en: {
      h2: 'Riyadh Air',
      p: 'Riyadh Air is a new national airline established in March 2023. With headquarters in Saudi Arabia’s capital, Riyadh Air is the cutting edge of digital aviation. It will adopt the best international sustainability and safety practices to deliver an exceptional travel experience by bringing together the brightest minds from across the aviation industry, Saudi Arabia and the rest of the world to make this vision a reality.',
      imgAlt: 'travel image'
    },
    ar: {
      h2: 'طيران الرياض',
      p: 'اطلقت شركة طيران الرياض في شهر مارس 2023، وذلك لتبدأ حقبة جديدة في مجال السفر والطيران عبر تقديم تجربة سفر استثنائية للضيوف المسافرين. يقع مركز العمليات الرئيسية في مدينة الرياض بالمملكة العربية السعودية، حيث سوف تقود الشركة نموذجاً متطوراً لمفهوم الطيران من خلال تبني أحدث التقنيات الرقمية والعمل بأعلى المعايير العالمية في مجال السفر والسلامة بجانب أفضل الخبرات والكوادر من المملكة وحول العالم.',
      imgAlt: 'travel image'
    }
  }
  const quote = {
    en: {
      p1: 'Our history began on September 30, 1945, when King Abdulaziz Al Saud, the first King and founder of Saudi Arabia, flew from the Riyadh province to Taif, establishing the country’s first base of civil aviation.',
      p2: 'A new era in the Kingdom’s aviation history begins with Riyadh Air.',
      p3: 'Optimizing the Kingdom’s strategic location, Riyadh Air will showcase Saudi’s exciting cultural and natural attractions to tourists around the world and embody the nation’s authentic hospitality.',
      p4: 'Riyadh Air will be the gateway for the Kingdom to the world.'
    },
    ar: {
      p1: 'ويمثل طيران الرياض مرحلة جديدة في ازدهار المملكة ضمن مجال الطيران، حيث كانت أول رحلة لمؤسس المملكة العربية السعودية الملك عبدالعزيز آل سعود -طيب الله ثراه- من منطقة الرياض إلى الطائف في ثلاثون من سبتمبر 1945.',
      p2: 'وانطلاقا من مكانة المملكة وموقعها الاستراتيجي، سيربط طيران الرياض السياح من جميع أنحاء العالم بأهم مناطق الجذب السياحية والثقافية والطبيعية في المملكة، بالإضافة لتميز طيران الرياض بحفاوة الترحيب وكرم الضيافة السعودية الأصيلة.',
      p3: 'طيران الرياض  لنكون نافذة المملكة للعالم والعالم للمملكة.',
      p4: undefined
    }
  }
  const numbersSec = {
    en: [
      {
        heading: '100+',
        desc: (
          <>
            Connecting the Kingdom to more than{' '}
            <strong>100 destinations</strong> worldwide by 2030
          </>
        )
      },
      {
        heading: '200,000+',
        desc: (
          <>
            Creating over <strong>200,000</strong> jobs directly and indirectly
          </>
        )
      }
    ],
    ar: [
      {
        heading: '+100',
        desc: 'ربط المملكة بأكثر من 100 وجهة  حول العالم بحلول عام 2030'
      },
      {
        heading: '+200,000',
        desc: 'استحداث أكثر من 200 ألف فرصة عمل مباشرة وغير مباشرة'
      }
    ]
  }
  const inspiration = {
    en: {
      heading: 'Our Inspiration',
      desc: [
        'Riyadh Air will be headquartered in the Saudi capital, Riyadh. The city boasts a rich history and is home to Diriyah’s At-Turaif, a UNESCO World Heritage site and host to the biggest sports, cultural, and entertainment events.'
      ],
      imgAlt: 'inspiration image'
    },
    ar: {
      heading: 'مصدر إلهامنا',
      desc: [
        ' اتخذنا مدينة الرياض مقراً لنا لنستلهم من تاريخها وإرثها الغني عبر العصور الممتدة.',
        ' العاصمة تحتضن موطن حي طريف الأثري الواقع في منطقة الدرعية التاريخية والمُدرج ضمن قائمة اليونسكو للتراث العالمي، فهي وجهة لأهم الأحداث الرياضية والترفيهية والثقافية.'
      ],
      imgAlt: 'inspiration image'
    }
  }
  const quote2 = {
    en: (
      <>
        As part of Saudi Vision 2030, Riyadh is undergoing a{' '}
        <strong>radical transformation</strong> to further enhance the city’s
        potential, attractiveness, and vibrancy. The National Tourism strategy
        seeks to attract <strong>100 million annual visits</strong> to Saudi
        Arabia by 2030 and raise the tourism sector’s contribution to the GDP by
        more than 10%.
      </>
    ),
    ar: 'وبفضل رؤية السعودية 2030 تشهد مدينة الرياض حالياً تحولاً جذرياً لتعزيز إمكانيات المدينة وجاذبيتها وحيويتها. نسعى لدعم الاستراتيجية الوطنية للسياحة والتي تهدف لجذب 100 مليون زائر سنوياً إلى المملكة العربية السعودية بحلول عام 2030، ورفع مساهمة قطاع السياحة في الناتج المحلي الإجمالي بأكثر من 10٪.'
  }
  const ceo = {
    en: {
      heading: 'Message From Our CEO',
      text: [
        '"Riyadh Air will be a digitally native airline, driven by a pioneering spirit with an obsessive focus on attention to detail and innovation at its heart. We aim to permanently transcend our guests&apos; perceptions and experiences of flying in the modern world.',
        'The new airline comes at a pivotal moment for Saudi Arabia, as it realizes the ambitious goals of Vision 2030. We are privileged to play an active role in showcasing Saudi Arabia&apos;s rich cultural heritage and stunning natural attractions to tourists from around the world."'
      ],
      name: 'Tony Douglas',
      designation: 'Chief Executive Officer',
      imgAlt: 'ceo image'
    },
    ar: {
      heading: 'كلمة الرئيس التنفيذي',
      text: [
        '"ستقود طيران الرياض حقبة جديدة في قطاع الطيران من خلال الابتكار، تبني أحدث التقنيات الرقمية، والاهتمام بأدق التفاصيل لتقديم تجربة سفر استثنائية لضيوفنا المسافرين.',
        'ويأتي تأسيس طيران الرياض ضمن مسيرة المملكة نحو مستقبل أكثر ازدهار، ونفتخر كوننا جزء مساهم في تحقيق أهداف رؤية السعودية 2030 وإبراز المملكة كوجهة سياحية وثقافية عالمية."'
      ],
      name: 'توني دوغلاس',
      designation: 'الرئيس التنفيذي',
      imgAlt: 'ceo image'
    }
  }
  return (
    <>
      <section className={`${styles['image-desc-card']}`}>
        <div className={`${styles['image-desc-card__img']} flex-[1]`}>
          <Image src={cloudImage} alt={ourJourney[lang].imgAlt} />
        </div>
        <div className={`${styles['image-desc-card__desc']} flex-[2]`}>
          <Parallax
            speed={parallaxSpeed}
            easing="easeInQuad"
            className="custom-parallax"
          >
            <h2>{ourJourney[lang].h2}</h2>
            <p>{ourJourney[lang].p1}</p>
            <ul>
              <li>{ourJourney[lang].li[0]}</li>
              <li>{ourJourney[lang].li[1]}</li>
              <li>{ourJourney[lang].li[2]}</li>
            </ul>
            <p>{ourJourney[lang].p2}</p>
          </Parallax>
        </div>
      </section>
      <section className={`${styles['travel']}`}>
        <Parallax
          speed={parallaxSpeed}
          easing="easeInQuad"
          className="custom-parallax"
        >
          <div className={`${styles['travel__desc']} mt-[50px]`}>
            <h2>{riyadhAir[lang].h2}</h2>
            <p>{riyadhAir[lang].p}</p>
          </div>
        </Parallax>
        <div className={styles['travel__img']}>
          <Image src={peopleImage} alt={riyadhAir[lang].imgAlt} />
        </div>
      </section>
      <section className={`${styles['quote']}`}>
        <Parallax speed={parallaxSpeed} className="custom-parallax">
          <p> {quote[lang].p1} </p>
          <p> {quote[lang].p2} </p>
          <p> {quote[lang].p3} </p>
          {!!quote[lang]?.p4 && (
            <p> {quote[lang]?.p4} </p>
          )}
        </Parallax>
      </section>
      <section className={`${styles['numbers']}`}>
        <div className={`${styles['numbers__destinations']} flex-[1.3]`}>
          <Parallax speed={10} easing="easeInQuad" className="custom-parallax">
            <h1>{numbersSec[lang][0].heading}</h1>
            <h5>{numbersSec[lang][0].desc}</h5>
          </Parallax>
        </div>
        <div className={`${styles['numbers__jobs']} flex-[1]`}>
          <Parallax speed={10} easing="easeInQuad" className="custom-parallax">
            <h1>{numbersSec[lang][1].heading}</h1>
            <h5>{numbersSec[lang][1].desc}</h5>
          </Parallax>
        </div>
      </section>
      <section className={`${styles['inspiration']}`}>
        <Parallax speed={parallaxSpeed} className="custom-parallax">
          <div
            className={`${styles['inspiration__desc']} mt-[50px] xl:mt-[125px]`}
          >
            <h2>{inspiration[lang].heading}</h2>
            <p>{inspiration[lang].desc[0]}</p>
            {inspiration[lang].desc[1] && <p>{inspiration[lang].desc[1]}</p>}
          </div>
        </Parallax>
        <div className={styles['inspiration__img']}>
          <Image src={inspirationImage} alt={inspiration[lang].imgAlt} />
        </div>
      </section>
      <section className={`${styles['quote']} ${styles['quote__no-bg']}`}>
        <Parallax speed={parallaxSpeed} className="custom-parallax">
          <p>{quote2[lang]}</p>
        </Parallax>
      </section>

      {/* <section className={styles['directors']}>
            <h2>Our board of directors</h2>
            <p>
                [XXX]&apos;s Board of Directors are responsible for overseeing the long-term strategy.
            </p>
            </section>
            <section className={styles['directors-carousel']}>
            <h2>Board of Directors</h2>
            <DirectorsCarousel />
            </section> */}
      <section
        className={`${styles['image-desc-card']} ${styles['image-desc-card-ceo']}`}
      >
        <div
          className={`${styles['image-desc-card__img']} ${styles['image-desc-card__img-ceo']} md:flex-[1] xl:flex-[1]`}
        >
          <Image src={ceoImage} alt={ceo[lang].imgAlt} />
        </div>
        <div
          className={`${styles['image-desc-card__desc']} ${styles['ceo-section']} md:flex-[1.17] xl:flex-[2]`}
        >
          <h2>{ceo[lang].heading}</h2>
          <p>{ceo[lang].text[0]}</p>
          <p>{ceo[lang].text[1]}</p>
          <h4>{ceo[lang].name}</h4>
          <p>{ceo[lang].designation}</p>
        </div>
      </section>
      <section className="contact-bg">
        <Image
          className="contact-img max-w-100"
          src={contactImg}
          alt="contact form"
        />
      </section>
    </>
  )
}

export default AboutUsComponent
