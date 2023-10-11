const categories =[
       {
              title:'لپ تاپ' ,
              imgSrc: 'images/category/laptop.jpg',
              path:'/'
       },
       {
              title:' موبایل' ,
              imgSrc: 'images/category/phones.png',
              path:'/'
       },
       {
              title:'ساعت هوشمند',
              imgSrc: 'images/category/smartWatch.jpg',
              path:'/'
       },
       {
              title:'دوربین',
              imgSrc: 'images/category/camera.jpg',
              path:'/'
       },
       {
              title:'هارد اکسترنال',
              imgSrc: 'images/category/hardExternal.webp',
              path:'/'
       },
       {
              title:'ساعت هوشمند',
              imgSrc: 'images/category/smartWatch.jpg',
              path:'/'
       },
       {
              title:'کنسول بازی' ,
              imgSrc: 'images/category/consule.jpg',
              path:'/'
       },
]




const HomeCategoryReducer = (state = categories, action) => {
       switch (action.type) {
             
              default: return state
       }
}

export default HomeCategoryReducer