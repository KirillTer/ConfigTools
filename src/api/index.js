import request from 'superagent'
// import * as firebase from 'firebase';

export const fetchMainApi = async () => {
  const { body } = await request.get(
    'https://api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&APPID=139a21f597a82e543b40b68435fd2220'
  )
  console.log('API - ', body.list)
  return body.list
}

export const singInApi = async ({ email, password }) => {
  console.log('Start Sign IN API - ', email, password)
  const body = await request.post('https://admin.qa.virtuefusion.com/back-office/auth/api/login')
    // .type('form')
    // .set('Host', 'admin.qa.virtuefusion.com')
    // .set('Content-Type', 'application/json')
    .send({
      login_name: `"${email}"`,
      password: `"${password}"`,
      dest: ""
    })
  console.log('API - ', body)
  return body
}

export const singUpApi = ({ email, password }) => {
  console.log('Start Sign UP API - ', email, password)
  // const userResult = firebase
  // .auth()
  // .createUserWithEmailAndPassword(email, password)
  // .then(user => {
  //   console.log('Auth SingUP user email - ', user.user.email)
  //   return user.user;
  // })
  // .catch(error => {
  //   console.error(error);
  //   return error
  // });
  // return userResult;
}

export const featchBingoRoomApi = () => {
  console.log('Start featchBingoRoomApi API - ')

}

export const createBingoRoomApi = () => {
  console.log('Start createBingoRoomApi API - ')

}

export const editBingoRoomApi = () => {
  console.log('Start editBingoRoomApi API - ')

}

export const deleteBingoRoomApi = () => {
  console.log('Start deleteBingoRoomApi API - ')

}