import Head from 'next/head'
import Image from 'next/image'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import ArticleBanner from '@/components/article-banner/ArticleBanner'
import styles from '@/styles/Article.module.css'
import centerImage from '@/assets/articles/5may23body-image.jpg'
import bottomImage from '@/assets/articles/5may23body-image2.jpg'
import quoteIcon from '@/assets/quote-icon.svg'

const Article = () => {

  return (
    <>
      <Head>
        <title>المركز الإعلامي | طيران الرياض</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <meta name="description" content="تعرف على أحدث أخبار طيران الرياض" />
      </Head>
      <main className="rtl" dir="rtl">
        <Navbar />
        <ArticleBanner
          date={
            <>
              <span>5 </span>
              <span>مايو</span>
              <span>2023</span>
            </>
          }
          title={
            <>
              وفد من طيران الرياض يزور مصنع بوينج بولاية كارولاينا الجنوبية
              الامريكية - موطن طائرة 787 دريملاينر
            </>
          }
        />

        <section className={styles['article-content']}>
          <div className={styles['article-content-center']}>
            
            <Image src={centerImage} alt="Riyadh Air Boeing visit" />
            {/* <blockquote>
              <Image src={quoteIcon} alt="quote" />
              <h2>
                Sodales ut eu sem integer vitae justo eget magna fermentum. Varius duis at
                consectetur lorem donec massa.
              </h2>
            </blockquote> */}
            <p>
              استقبل مصنع بوينج في شمال مدينة تشارلستون بولاية كارولاينا
              الجنوبية الامريكية اليوم وفداً من شركة طيران الرياض الناقل الوطني
              الجديد للمملكة؛ حيث قام الوفد بجولة استطلاعية في أرجاء المصنع الذي
              يعتبر موطن لتصميم وتصنيع وتجميع وتسليم طائرات بوينج 787-9
              دريملاينر. وتأتي هذه الزيارة بعد إعلان طيران الرياض عن شراء 39
              طائرة من طراز 787-9، مع خيار شراء 33 طائرة إضافية. وتعد هذه الصفقة
              ضمن أكبر خمس طلبات تجارية لأسطول طائرات من حيث القيمة في تاريخ
              شركة بوينج. ومن المقرر أن تتسلم طيران الرياض أول دفعة من الطائرات
              في عام 2025.
            </p>
            <p>
              وضم وفد طيران الرياض كلاً من صاحبة السمو الملكي الأميرة ريما بنت
              بندر سفيرة المملكة العربية السعودية في العاصمة الأمريكية واشنطن،
              وتوني دوغلاس الرئيس التنفيذي، وآدم بوقديدة المدير المالي في طيران
              الرياض، حيث التقى الوفد خلال الجولة بكل من هنري مكماستير حاكم
              ولاية كارولاينا الجنوبية وديفيد كالهون الرئيس التنفيذي ورئيس شركة
              بوينج، وعضو مجلس الشيوخ الأمريكي عن ولاية كارولاينا الجنوبية
              ليندسي جراهام. ورافق الوفد مجموعة من ممثلي شركات الطيران الوطنية
              في المملكة. حيث تمكن الوفد الزائر من طرح بعض الأسئلة والاستفسارات
              على موظفي المصنع ومشاهدة مراحل تصنيع طائرات بوينج عن كثب.
            </p>
            <p>
              ستساهم الشراكة بين طيران الرياض وبوينج في تأسيس شركة طيران عالمية
              المستوى تربط العاصمة الرياض بأكثر من 100 وجهة حول العالم وخدمة 330
              مليون مسافر وجذب 100 مليون زائر سنوياً بحلول عام 2030. حيث تعد هذه
              الشراكة جزءاً من الاستراتيجية الوطنية للطيران الهادفة لتحويل
              المملكة إلى مركز طيران عالمي، حيث أعلنت النواقل الجوية الوطنية في
              المملكة عن عزمهم شراء ما يصل إلى 121 طائرة بوينج دريملاينر من طراز
              787.
            </p>
            <p>
              ومن المتوقع أن يكون للصفقة تأثيراً ايجابياً على الاقتصاد في
              الولايات المتحدة، وذلك من خلال خلق 100,000 وظيفة مباشرة وغير
              مباشرة، والاستعانة بقرابة 300 مورد من 38 ولاية، بما في ذلك 145
              شركة صغيرة أمريكية.
            </p>
            <p>
              يُشار إلى أن الاتفاقية مع شركة بوينج تعكس التزام طيران الرياض
              الهادف إلى تقديم تجربة سفر استثنائية من خلال توظيف أحدث التقنيات،
              مع تطلعها لتشغيل واحداً من أحدث أساطيل شركات الطيران وأكثرها
              استدامة في العالم. كما سيتم تجهيز طائرات طيران الرياض 787
              دريملاينر بأحدث ابتكارات وأنظمة الترفيه الرقمية لتقديم تجربة سفر
              سلسه وممتعة، لتكون رائدة الطيران الرقمي.
            </p>
            <Image className='mt-[4rem]' src={bottomImage} alt="Riyadh Air Boeing visit" />
          </div>
        </section>
        <Footer />
      </main>
    </>
  )
}

export default Article
