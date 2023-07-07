import CookieConsent from 'react-cookie-consent'
import ReactGA from 'react-ga'
import { useRouter } from 'next/router'
import { getLanguage } from '@/lib/utils'

declare global {
  interface Window {
    dataLayer: [string, string | Date][]
  }
}
const CookieBanner = () => {
  const router = useRouter()
  const { isArabic } = getLanguage(router.pathname)

  const text = isArabic ? (
    <>
      نستخدم ملفات تعريف الارتباط الضرورية، كما يتم استخدام ملفات تعريف الارتباط لجمع وتحليل المعلوماتالمتعلقة بأداء موقعنا. لمزيد من المعلومات، يرجى مراجعة 
      <a target="_blank" href="/pdf/policies/Cookie_Policy_AR_09032023.pdf">
        <strong>سياسة ملفات تعريق الارتباط</strong>
      </a>
       و{' '}
      <a
        target="_blank"
        href="/pdf/policies/WebsitePrivacyPolicy_AR_09032023.pdf"
      >
        <strong>سياسةالخصوصية</strong>
      </a>
      .
    </>
  ) : (
    <>
      We use necessary cookies to make our website work. We would also like to
      set analytics and performance cookies that help us make improvements by
      measuring how you use our website. Please refer to our Cookie Policy{' '}
      <a target="_blank" href="/pdf/policies/Cookie_Policy_EN_09032023.pdf">
        <strong>here</strong>
      </a>{' '}
      and our Privacy Policy{' '}
      <a
        target="_blank"
        href="/pdf/policies/WebsitePrivacyPolicy_EN_09032023.pdf"
      >
        <strong>here</strong>
      </a>{' '}
      for more information regarding cookies and how we process your personal
      information.
    </>
  )

  const acceptBtnTxt = isArabic
    ? 'أؤكد جميع ملفات تعريف الارتباط'
    : 'I accept all cookies'
  const declineBtnTxt = isArabic
    ? 'أنا أرفض جميع ملفات تعريف الارتباط'
    : 'I reject all cookies'

  const onAccept = () => {
    //console.log('accepted');
    ReactGA.initialize('G-F93RBP14Q7')
    ReactGA.pageview(window.location.pathname + window.location.search)
  }
  const onDecline = () => {
    //console.log('declined');
  }

  return (
    <>
      <CookieConsent
        location="bottom"
        visible="byCookieValue"
        buttonText={acceptBtnTxt}
        declineButtonText={declineBtnTxt}
        cookieName="CookieConsent"
        cookieValue="Accept"
        declineCookieValue="Reject"
        setDeclineCookie={true}
        expires={30}
        hideOnAccept={true}
        style={{ background: '#fff', color: '#230751' }}
        buttonStyle={{
          padding: '10px 20px',
          border: '1px solid #230751',
          outline: 'none',
          color: '#fff',
          fontSize: '16px',
          fontWeight: 500,
          background: '#230751',
          cursor: 'pointer'
        }}
        declineButtonStyle={{
          padding: '10px 20px',
          outline: 'none',
          fontSize: '16px',
          fontWeight: 500,
          cursor: 'pointer',
          background: '#fff',
          color: '#230751',
          border: '1px solid #230751'
        }}
        enableDeclineButton={true}
        flipButtons={true}
        onAccept={onAccept}
        //onDecline={onDecline}
      >
        {text}
      </CookieConsent>
    </>
  )
}

export default CookieBanner
