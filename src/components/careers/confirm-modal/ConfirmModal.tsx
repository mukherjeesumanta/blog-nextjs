import Link from 'next/link'
import { useRouter } from 'next/router'
import { getLanguage } from '@/lib/utils'

import styles from '@/components/careers/confirm-modal/ConfirmModal.module.css'
type ModalProp = {
  showModal: boolean
  toggleModal: () => void
}
const Modal = ({ showModal, toggleModal }: ModalProp) => {
  const router = useRouter()
  const { isArabic } = getLanguage(router.pathname)
  const lang = isArabic ? 'ar' : 'en'

  const content = {
    en: {
      title:
        'Candidate sourcing, assessment and recruitment services are provided by a third party service provider on behalf of Riyadh Air.',
      desc: 'Your access and use of the careers microsite (including any application that you submit) will be subject to the provider’s terms of use and privacy policy as displayed on the site.',
      continueBtnTxt: 'Continue',
      cancelBtnTxt: 'Stay here'
    },
    ar: {
      title:
        'تقدم خدمات تأمين المرشحين والتقييم والتوظيف من قبل مزود خدمة الطرف الثالث نيابةً عن شركة طيران الرياض.',
      desc: 'سيخضع وصولك واستخدامك لموقع الميكروسايت الخاص بالوظائف (بما في ذلك أي طلب تقديمه) لشروط استخدام مقدم الخدمة وسياسة الخصوصية التي يتم عرضها على الموقع.',
      continueBtnTxt: 'موافق',
      cancelBtnTxt: 'إلغاء'
    }
  }

  const modalHideCls = showModal ? '' : 'hidden'
  const careersPage =
    'https://riyadhair.tal.net/vx/lang-en-GB/mobile-0/appcentre-ext/brand-4/xf-1e42d08854c2/candidate/jobboard/vacancy/3/adv/'
  return (
    <>
      {/* <!-- Main modal --> */}
      <div
        id="defaultModal"
        tabIndex={-1}
        aria-hidden="true"
        className={`${styles['modal-container']} ${modalHideCls} fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full`}
      >
        <div className="relative w-full h-full max-w-2xl md:h-auto mx-auto top-[20%]">
          {/* <!-- Modal content --> */}
          <div
            className={`${styles['position-center']} bg-white rounded-lg shadow`}
          >
            {/* <!-- Modal header --> */}
            <div className="flex items-start justify-between p-4 border-b rounded-t">
              <p className="text-xl font-normal ">{content[lang].title}</p>
            </div>
            {/* <!-- Modal body --> */}
            <div className="p-6 space-y-6">
              <p className="text-base leading-relaxed ">{content[lang].desc}</p>
            </div>
            {/* <!-- Modal footer --> */}
            <div className="flex justify-center items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
              <button
                type="button"
                data-modal-hide="defaultModal"
                className="w-[150px] text-gray-500 bg-gray-200 hover:bg-gray-300 rounded-lg border text-sm font-medium px-5 py-2.5 hover:text-gray-900 uppercase ml-3"
                onClick={toggleModal}
              >
                {content[lang].cancelBtnTxt}
              </button>
              <Link
                href={careersPage}
                target="_blank"
                onClick={toggleModal}
                data-modal-hide="defaultModal"
                className={`${styles['continue-btn']}`}
              >
                {content[lang].continueBtnTxt}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
