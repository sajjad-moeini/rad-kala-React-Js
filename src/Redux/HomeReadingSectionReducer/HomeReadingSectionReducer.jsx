const articles =[
       {
        title:'بررسی استند لوازم آرایشی و آینه برقی؛ ۳ کاره با طراحی زیبا',
        imgSrc:"images/readingSection/1.jpg",
        anim:'fade-down'
       },
       {
        title:'بررسی نیم‌بوت مردانه آلن شوز کد ۴۶۴۲؛ طراحی به سبک اسپانیایی',
        imgSrc:"images/readingSection/2.jpg",
        anim:'fade-up'
       },
       {
        title:'بررسی میکروفون مائونو DM30؛ حرفه‌ای با نورپردازی',
        imgSrc:"images/readingSection/3.jpg",
        anim:'fade-down'
       },
       {
              title:'بررسی کوتاه گوشی تکنو Camon 20 Pro؛ ناشناخته ولی جذاب',
              imgSrc:"images/readingSection/4.jpg",
              anim:'fade-up'
       },

]



const HomeReadingSectionReducer = (state = articles, action) => {
       switch (action.type) {

              default: return state
       }
}

export default HomeReadingSectionReducer