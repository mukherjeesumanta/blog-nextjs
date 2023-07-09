import axios from 'axios';

export const toShortFormat = function (dateInput: Date | string, lang: 'en' | 'ar') {
  const date = new Date(dateInput)
  if (date.toString() === 'Invalid Date') {
    return 'Invalid Date'
  }
  const enMonthNames = ["January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"];
  const arMonthNames = ["January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"];

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  //const monthName = lang === 'en' ? enMonthNames[monthIndex] : arMonthNames[monthIndex];


  return lang === 'en' ? `${day} ${enMonthNames[monthIndex]} ${year}` : `${year} ${arMonthNames[monthIndex]} ${day}`;
}

export const xssIgnoreTags = {
  whiteList: {
      a: ['href', 'title', 'target', 'style'],
      div: ['style'],
      p: ['style'],
      span: ['style'],
      ul: ['style'],
      li: ['style'],
      img: ['src', 'alt', 'style'],
      br: [],
      hr: []
  }
}

export const uploadImage = async (file: File) => {
  const formData = new FormData();
  formData.append("articleImage", file);

  const config = {
    headers: { "content-type": "multipart/form-data" },
  };

  const response = await axios.post(
    "/api/admin/article/upload",
    formData,
    config
  );
  //console.log(response, curFiles[0]);
  if (response.status === 200) {
    return response.data.url;
  }
  return "";
};