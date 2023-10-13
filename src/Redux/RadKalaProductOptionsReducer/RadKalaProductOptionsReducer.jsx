let options=[
       {
              title:'امکان تحویل اکسپرس',
              img:"../../images/bg/express-delivery.svg"
       },
       {
              title:'۲۴ ساعته، ۷ روز هفته',
              img:"../../images/bg/support.svg"
       },
       {
              title:'امکان پرداخت در محل',
              img:"../../images/bg/cash-on-delivery.svg"
       },
       {
              title:'هفت روز ضمانت بازگشت کالا',
              img:"../../images/bg/days-return.svg"
       },
       {
              title:'ضمانت اصل بودن کالا',
              img:"../../images/bg/original-products.svg"
       },
]


const RadKalaProductOptionsReducer = (state = options, action) => {
       switch (action.type) {

              default: return state
       }
}

export default RadKalaProductOptionsReducer