
const categories =[
       {
              title:'لپ تاپ' ,
              imgSrc: 'images/category/laptop.jpg',
              path:'/products/laptops',
              anim:'fade-down'
       },
       {
              title:'موبایل' ,
              imgSrc: 'images/category/phones.png',
              path:'/products/mobile',
              anim:'fade-up'
       },
       {
              title:'ساعت هوشمند',
              imgSrc: 'images/category/smartWatch.jpg',
              path:'/products/smartWatch',
              anim:'fade-down'
       },
       {
              title:'دوربین',
              imgSrc: 'images/category/camera.jpg',
              path:'/products/camera',
              anim:'fade-up'
       },
       {
              title:'هارد اکسترنال',
              imgSrc: 'images/category/hardExternal.webp',
              path:'/products/hardExternal',
              anim:'fade-down'
       },
       {
              title:'موس و کیبورد',
              imgSrc: 'images/category/mouse.webp',
              path:'/products/mouseAndKeyBoard',
              anim:'fade-up'
       },
       {
              title:'کنسول بازی' ,
              imgSrc: 'images/category/consule.jpg',
              path:'/products/consule',
              anim:'fade-down'
       },
]




const HomeCategoryReducer = (state = categories, action) => {
       switch (action.type) {
             


              default: return state
       }
}

export default HomeCategoryReducer