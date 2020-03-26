import request from 'superagent'
// import * as firebase from 'firebase';

export const fetchMainApi = async () => {
  const { body } = await request.get(
    'https://api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&APPID=139a21f597a82e543b40b68435fd2220'
  )
  return body.list
}

export const fetchLanguageApi = async ({ domain }) => {
  const body = await request.get(`https://${domain}/bos/get-lang`)
  console.log('API Language - ', body)
  return body
}

export const singInApi = async ({ email, password, domain }) => {
  const body = await request.post(`https://${domain}/back-office/auth/api/login`)
    // .type('form')
    // .set('Host', 'admin.qa.virtuefusion.com')
    .set('Content-Type', 'application/json')
    .send({
      login_name: `${email}`,
      password: `${password}`
    })
  console.log('API - ', body)
  return body
}

export const singUpApi = ({ email, password, domain }) => {
  // const userResult = firebase
  // .auth()
  // .createUserWithEmailAndPassword(email, password)
  // .then(user => {
  //   return user.user;
  // })
  // .catch(error => {
  //   console.error(error);
  //   return error
  // });
  // return userResult;
}

export const changePassApi = async ({ login_name, current_password, password, confirmPass, domain }) => {
  console.log('Api', password, confirmPass, domain)
  const body = await request.post(`https://${domain}/back-office/auth/api/change-password`)
    // .type('form')
    // .set('Host', 'admin.qa.virtuefusion.com')
    .set('Content-Type', 'application/json')
    .send({
      login_name: `${login_name}`,
      current_password: `${current_password}`,
      new_password: `${password}`,
      new_password_conf: `${confirmPass}`,
      recatchpa: null
    })
  console.log('API - ', body)
  return body
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