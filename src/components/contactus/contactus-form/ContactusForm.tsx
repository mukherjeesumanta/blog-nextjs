import React, { FormEvent, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import ReCAPTCHA from 'react-google-recaptcha'
import { getLanguage } from '@/lib/utils'

import styles from '@/components/contactus/contactus-form/ContactusForm.module.css'

const ContactusForm = () => {
  const router = useRouter()
  const { isArabic } = getLanguage(router.pathname)
  const lang = isArabic ? 'ar' : 'en'
  const content = {
    en: {
      formTitle:
        'We invite you to get in touch with us by filling out the form below.',
      fields: {
        name: {
          placeholder: 'Full name',
          ['field-error']: 'Full name is required'
        },
        email: {
          placeholder: 'Email address',
          ['field-error']: 'Valid email is required'
        },
        category: {
          placeholder: 'Type of inquiry',
          ['field-error']: 'Inquiry type is required',
          options: ['Partnerships', 'Media inquiry', 'General Comment']
        },
        message: {
          placeholder: 'Leave us a message',
          ['field-error']: 'Description is required'
        }
      },
      ['attempt-msg']: 'Attempting to send your message...',
      ['success-msg']:
        'Thank you for reaching out, our team will connect with you soon.',
      ['error-msg']:
        'Sorry, it looks like your message did not go through. Please try again.',
      ['btn-txt']: 'SEND '
    },
    ar: {
      formTitle: 'بإمكانكم التواصل معنا  من خلال تعبئة النموذج أدناه ',
      fields: {
        name: {
          placeholder: 'الاسم الكامل',
          ['field-error']: 'الاسم الكامل مطلوب'
        },
        email: {
          placeholder: 'البريد الإلكتروني',
          ['field-error']: 'يرجى التأكد من صحة البريد الإلكتروني'
        },
        category: {
          placeholder: 'نوع الاستفسار',
          ['field-error']: 'يرجى تحديد فئة الاستفسار',
          options: ['الشراكات', 'استفسار إعلامي', 'تعليق عام']
        },
        message: {
          placeholder: 'تفضل بإضافة نص الرسالة',
          ['field-error']: 'يرجى إضافة نص الرسالة'
        }
      },
      ['attempt-msg']: 'محاولة إرسال رسالتك',
      ['success-msg']: 'شكرا لتواصلك معنا. سيتم الرد عليك في أقرب وقت ممكن',
      ['error-msg']: 'لم يتم إرسال الطلب بنجاح، نأمل المحاولة مرة أخرى',
      ['btn-txt']: 'ارسال'
    }
  }

  //const formRef = useRef<HTMLFormElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null)
  //const inquiryBtn = btnRef.current as HTMLButtonElement;

  let [userName, setUserName] = useState('')
  let [email, setEmail] = useState('')
  let [category, setCategory] = useState('')
  let [message, setMessage] = useState('')
  let [messageLen, setMessageLen] = useState(0)

  let [nameValid, setNameValid] = useState(true)
  let [emailValid, setEmailValid] = useState(true)
  let [categoryValid, setCategoryValid] = useState(true)
  let [messageValid, setMessageValid] = useState(true)

  let [sendingReq, setSendingReq] = useState(false)
  let [resSuccess, setResSuccess] = useState(false)
  let [resFailure, setResFailure] = useState(false)

  const emailPattern = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})$/

  /* 
    Following block is for disabling button on first page load without showing the error messages.
    On forst page load button should be disabled, then after user interaction, it'll depend on the field values
     */
  let [initialRenderName, setIniRenderName] = useState(true)
  let [initialRenderEmail, setIniRenderEmail] = useState(true)
  let [initialRenderCat, setIniRenderCat] = useState(true)
  let [initialRenderMsg, setIniRenderMsg] = useState(true)

  const nameCheck = (e: React.FormEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value
    setUserName(value)
    setNameValid(value !== '')

    setIniRenderName(false)
  }
  const emailCheck = (e: React.FormEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value
    setEmail(value)
    setEmailValid(value !== '' && emailPattern.test(value))

    setIniRenderEmail(false)
  }
  const categoryCheck = (e: React.FormEvent<HTMLSelectElement>) => {
    let value = e.currentTarget.value
    setCategory(value)
    setCategoryValid(value !== '')

    setIniRenderCat(false)
  }
  const messageCheck = (e: React.FormEvent<HTMLTextAreaElement>) => {
    let value = e.currentTarget.value
    setMessage(value)
    setMessageValid(value !== '')
    setMessageLen(value.length)

    setIniRenderMsg(false)
  }

  const submitData = async (captchaToken: string) => {
    const payload = {
      lang: 'en',
      classification: 'inquiry',
      name: userName,
      email,
      category,
      message,
      'g-recaptcha-response': captchaToken
    }
    console.log(payload)
    try {
      setSendingReq(true)
      const response = await fetch(
        'https://pn54nvcmdeqvmj375r2fjhd7iu.apigateway.me-jeddah-1.oci.customer-oci.com/v1/contact-form',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        }
      )

      const result = await response.json()
      setSendingReq(false)
      setResSuccess(true)
      console.log(result)
    } catch (error) {
      setResFailure(true)
      console.error('Error:', error)
    }
  }

  const recaptchaRef = useRef<ReCAPTCHA>(null)
  const onSubmitWithReCAPTCHA = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const captchaToken = (await recaptchaRef.current?.executeAsync()) as string
    console.log('captchaToken: ', captchaToken)
    recaptchaRef.current?.reset()

    if (!captchaToken) {
      console.log('token not found')
    }
    submitData(captchaToken)
  }
  return (
    <div className={`${styles['contact-container']} lg:max-w-[1124px] mx-auto`}>
      <p className={`${styles['form-title']}`}>{content[lang].formTitle}</p>

      <div className="tab-content" id="myTabContent">
        <form
          id="inquiry-form"
          autoComplete="off"
          /* ref={formRef} */ onSubmit={onSubmitWithReCAPTCHA}
        >
          {/* <input type="hidden" id="lang" name="lang" value="en" />
                    <input type="hidden" id="classification" name="classification" value="inquiry" /> */}
          <div className="form-outline mb-12">
            <input
              type="text"
              id="inq-name"
              name="name"
              autoComplete="off"
              className={
                `${styles['input']} ` +
                (nameValid ? '' : `${styles['invalid']}`)
              }
              placeholder={content[lang].fields.name.placeholder}
              onChange={nameCheck}
              onBlur={nameCheck}
            />
            {!nameValid && (
              <span className={styles['error-msg']}>
                {content[lang].fields.name['field-error']}
              </span>
            )}
          </div>
          <div className="form-outline mb-12">
            <input
              type="email"
              id="inq-email"
              autoComplete="off"
              name="email"
              className={
                `${styles['input']} ` +
                (emailValid ? '' : `${styles['invalid']}`)
              }
              placeholder={content[lang].fields.email.placeholder}
              onChange={emailCheck}
              onBlur={emailCheck}
            />
            {!emailValid && (
              <span className={styles['error-msg']}>
                {content[lang].fields.email['field-error']}
              </span>
            )}
          </div>

          <div className="mb-12">
            <select
              id="inq-category"
              className={
                `${styles['input']} ` +
                (categoryValid ? '' : `${styles['invalid']}`)
              }
              name="category"
              onChange={categoryCheck}
              onBlur={categoryCheck}
            >
              <option value="">
                {content[lang].fields.category.placeholder}
              </option>
              <option value="Partnerships">
                {content[lang].fields.category.options[0]}
              </option>
              <option value="MediaInquiry">
                {content[lang].fields.category.options[1]}
              </option>
              <option value="GeneralComment">
                {content[lang].fields.category.options[2]}
              </option>
            </select>
            {!categoryValid && (
              <span className={styles['error-msg']}>
                {content[lang].fields.category['field-error']}
              </span>
            )}
          </div>
          <div className="form-group shadow-textarea mb-12">
            <textarea
              name="message"
              autoComplete="off"
              className={
                `h-[243px] ${styles['input']} ` +
                (messageValid ? '' : `${styles['invalid']}`)
              }
              id="inq-message"
              maxLength={2000}
              rows={8}
              placeholder={content[lang].fields.message.placeholder}
              onChange={messageCheck}
              onBlur={messageCheck}
            ></textarea>
            {!messageValid && (
              <span className={styles['error-msg']}>
                {content[lang].fields.message['field-error']}
              </span>
            )}
            <div
              className="pull-right label label-default my-[10px] text-[12px] leading-[24px]"
              id="count-message1"
            >
              <span dir="ltr">{`${messageLen} of 2000`}</span>
            </div>
          </div>
          {sendingReq && (
            <div
              className={`${styles['alert']} ${styles['sending-alert']} hidden`}
              role="alert"
            >
              Attempting to send your message...
            </div>
          )}
          {resSuccess && (
            <div
              className={`${styles['alert']} ${styles['success-alert']} hidden`}
              role="alert"
            >
              Thank you for reaching out, our team will connect with you soon.
            </div>
          )}
          {resFailure && (
            <div
              className={`${styles['alert']} ${styles['failure-alert']} hidden`}
              role="alert"
            >
              Sorry, it looks like your message did not go through. Please try
              again.
            </div>
          )}

          {/* <ReCaptcha
                        submitData={submitData}
                    /> */}
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6LeVHa4kAAAAADFxwNlChqw1OTWE7AC2Yw3xe192"
            size="invisible"
          />
          <div className="ltr:text-right rtl:text-left">
            <button
              id="en-contactform-captcha"
              className=" sumanta g-recaptcha"
            />
            <button
              type="submit"
              ref={btnRef}
              className={`${styles['contact-btn']} `}
              /* id="en-contactform-captcha" */
              /* disabled={!(nameValid && emailValid && categoryValid && messageValid)} */
              disabled={
                initialRenderName ||
                initialRenderEmail ||
                initialRenderCat ||
                initialRenderMsg ||
                !(nameValid && emailValid && categoryValid && messageValid)
              }
            >
              {content[lang]['btn-txt']}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className={` inline-block ltr:rotate-[210deg] rtl:rotate-[30deg] rtl:mr-2`}
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767L7.022 1.566z"
                ></path>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactusForm
