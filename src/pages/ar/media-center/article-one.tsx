import Head from 'next/head'
import Image from 'next/image'
import { getLanguage } from '@/lib/utils'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import ArticleBanner from '@/components/article-banner/ArticleBanner'
import styles from '@/styles/Article.module.css'
import topImage from '@/assets/articles/wide-clouds.jpg'
import centerImage from '@/assets/articles/crown-prince.jpg'
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
              <span>12 </span>
              <span>مارس</span>
              <span>2023</span>
            </>
          }
          title={`
            سمو ولي العهد يعلن عن تأسيس صندوق الاستثمارات العامة لـشركة "طيران الرياض" .. ناقل جوي وطني جديد بمعايير عالمية يسهم في تعزيز منظومة الطيران السعودية محلياً وعالمياً
          `}
        />
        <section className={styles['article-parallax-image']}>
          <Image src={topImage} alt="Wide clouds" />
        </section>
        <section className={styles['article-content']}>
          <div className={styles['article-content-center']}>
            <ul className={styles['article-top']}>
              <li>
                ستكون مدينة الرياض المركز الرئيس للعمليات التشغيلية للشركة،
                ومنطلقاً لرحلاتها الجوية، وستعمل على ربط العاصمة بأكثر من 100
                وجهة حول العالم
              </li>
              <li>
                تسعى الشركة لامتلاك أسطول طائرات متطور وفق أحدث التقنيات
                الحديثة، وتبني أفضل معايير الاستدامة والسلامة المعتمدة عالمياً
              </li>
              <li>
                سيتيح &quot;طيران الرياض&quot; الفرصة للسياح والزوار من جميع
                أنحاء العالم للوصول إلى أجمل المواقع السياحية والطبيعية في
                المملكة
              </li>
              <li>
                يتماشى تأسيس &quot;طيران الرياض&quot; مع استراتيجية صندوق
                الاستثمارات العامة الهادفة لتعزيز منظومة الطيران المحلية
              </li>
            </ul>
            <Image src={centerImage} alt="article image" />
            {/* <blockquote>
              <Image src={quoteIcon} alt="quote" />
              <h2>
                Sodales ut eu sem integer vitae justo eget magna fermentum. Varius duis at
                consectetur lorem donec massa.
              </h2>
            </blockquote> */}
            <p>
              الرياض،12 مارس 2023م - أعلن صاحب السمو الملكي الأمير محمد بن سلمان
              بن عبدالعزيز، ولي العهد رئيس مجلس الوزراء رئيس مجلس إدارة صندوق
              الاستثمارات العامة – حفظه الله، عن تأسيس صندوق الاستثمارات العامة
              لشركة &quot;طيران الرياض&quot;، الناقل الجوي الوطني الجديد،
              للمساهمة في تطوير قطاع النقل الجوي وتعزيزً ا لموقع المملكة
              الاستراتيجي الذي يربط بين 3 من أهم قارات العالم؛ آسيا وأفريقيا
              وأوروبا، والعمل على رفع القدرة التنافسية للشركات الوطنية وفق
              مستهدفات رؤية السعودية 2030.
            </p>
            <p>
              وتسعى الشركة التي تتخذ من العاصمة الرياض مركزاً رئيسياً لإدارة
              عملياتها التشغيلية، ومنطلقاً لرحلاتها، عبر امتلاك أسطول طائرات
              متطورة، تستهدف من خلاله تطبيق أفضل ممارسات الاستدامة والسلامة
              عالمياً المعتمدة في مجال الطيران، إلى جانب توفير أحدث التقنيات
              الرقمية للريادة في هذا المجال. وسيقود شركة &quot;طيران
              الرياض&quot; نخبة من الخبراء المحليين والدوليين، ويرأس مجلس
              إدارتها معالي الأستاذ ياسر بن عثمان الرميان محافظ صندوق
              الاستثمارات العامة، فيما تم تعيين توني دوغلاس رئيساً تنفيذياً
              للشركة. ويجلب السيد دوغلاس خبرة تفوق 40 عاماً في قطاع النقل
              والطيران والخدمات اللوجستية.
            </p>
            <p>
              وكشركة مملوكة بالكامل لصندوق الاستثمارات العامة، ستساهم قدرات
              الصندوق المالية، وخبراته الاستثمارية، في تمكين الشركة من التوسع في
              عملياتها التشغيلية بما يدعم خططها المستقبلية لتكون شركة وطنية
              رائدة وعالمية في قطاع الطيران.
            </p>
            <p>
              ولإثراء تجربة المسافرين، تهدف شركة &quot;طيران الرياض&quot; لإطلاق
              رحلات تصل لأكثر من 100 وجهةٍ حول العالم بحلول العام 2030، وستقدم
              مستويات استثنائية من الخدمات المتكاملة، ممزوجة بطابع الضيافة
              السعودي الأصيل.
            </p>
            <p>
              كما سيسهم إطلاق &quot;طيران الرياض&quot; في إتاحة المزيد من الفرص
              للسياح والزوار من جميع أنحاء العالم للوصول إلى أجمل المواقع
              السياحية والطبيعية في المملكة، لتشكل حقبة جديدة في مجال السفر
              والطيران، عبر زيادة خيارات النقل الجوي تزامناً مع زيادة أعداد
              المسافرين من وإلى المملكة، ورفع الطاقة الاستيعابية لخدمات النقل
              والشحن والخدمات اللوجستية الاستراتيجية، بما يسهم في جذب حركة
              المسافرين الدوليين والربط بين قارات العالم المختلفة، لتكون مدينة
              الرياض بوابة للعالم، ووجهة عالمية للنقل والتجارة والسياحة، بما
              يسهم في تحقيق أهداف الاستراتيجية الوطنية للنقل والخدمات اللوجستية
              في قطاع النقل الجوي.
            </p>
            <p>
              ويأتي تأسيس&quot; طيران الرياض&quot; تماشياً مع استراتيجية صندوق
              الاستثمارات العامة لإطلاق إمكانات القطاعات الواعدة محلياً لدعم
              تنويع الاقتصاد، حيث من المتوقع أن تساهم شركة &quot;طيران
              الرياض&quot; في نمو الناتج المحلي الإجمالي غير النفطي للمملكة
              بقيمة تصل إلى 75 مليار ريال واستحداث أكثر من 200 ألف فرصة عمل
              مباشرة وغير مباشرة، وتعد شركة &quot;طيران الرياض&quot; ومطار الملك
              سلمان الدولي ضمن أحدث استثمارات صندوق الاستثمارات العامة في قطاع
              الطيران، الهادفة لرفع الاستدامة المالية لمنظومة قطاع الطيران،
              وتعزيز تنافسيتها عالمياً تحقيقا لمستهدفات رؤية السعودية 2030.
            </p>
            <p className="text-center">-انتهى-</p>
          </div>
        </section>
        <Footer />
      </main>
    </>
  )
}

export default Article
