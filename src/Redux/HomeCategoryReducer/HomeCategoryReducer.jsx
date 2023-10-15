
const categories =[
       {
              title:'لپ تاپ' ,
              imgSrc: 'images/category/laptop.jpg',
              path:'laptops',
              anim:'fade-down'
       },
       {
              title:'موبایل' ,
              imgSrc: 'images/category/phones.png',
              path:'mobile',
              anim:'fade-up'
       },
       {
              title:'ساعت هوشمند',
              imgSrc: 'images/category/smartWatch.jpg',
              path:'smartWatch',
              anim:'fade-down'
       },
       {
              title:'دوربین',
              imgSrc: 'images/category/camera.jpg',
              path:'camera',
              anim:'fade-up'
       },
       {
              title:'هارد اکسترنال',
              imgSrc: 'images/category/hardExternal.webp',
              path:'hardExternal',
              anim:'fade-down'
       },
       {
              title:'موس و کیبورد',
              imgSrc: 'images/category/mouse.webp',
              path:'mouseAndKeyBoard',
              anim:'fade-up'
       },
       {
              title:'کنسول بازی' ,
              imgSrc: 'images/category/consule.jpg',
              path:'consule',
              anim:'fade-down'
       },
]




const HomeCategoryReducer = (state = categories, action) => {
       switch (action.type) {
             


              default: return state
       }
}

export default HomeCategoryReducer