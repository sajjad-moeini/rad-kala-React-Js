let users=[
       {
              id:1,
              name:'سجاد معینی',
              userName:'sajjad-moeini',
              password:'12345678',
              email:'sajjadmoeini@gmail.com',
              phone:'09195805686'
       }
]


const UsersReducer = (state = users, action) => {
       switch (action.type) {

              default: return state
       }
}

export default UsersReducer