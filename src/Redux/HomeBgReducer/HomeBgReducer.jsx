const backgrounds ={
       firstSlider :[
              {imgSrc:'images/bg/allphone.jpg',path:'/products/phones'},
              {imgSrc:'images/bg/gamingphone.gif',path:'/products/phones'},
              {imgSrc:'images/bg/kalaDigitalArzan.webp',path:'/products'},

       ]
}


const HomeBgReducer = (state = backgrounds, action) => {
       switch (action.type) {

              default: return state
       }
}

export default HomeBgReducer