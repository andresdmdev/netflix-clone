
export default function userFilmData({ data }){
  
  let userFilmList = JSON.parse(localStorage.getItem('user-list'))

  if(userFilmList){

    const findUserRating = userFilmList.find(elem => elem.id === data.id)

    if(findUserRating){
      userFilmList = userFilmList.filter(elem => elem.id !== data.id)
    } else {
      userFilmList = [ ...userFilmList, { ...data }]
    }

    const filmData = JSON.stringify(userFilmList)
    localStorage.setItem('user-list', filmData)

  } else{
    localStorage.setItem('user-list', JSON.stringify([ { ...data } ]))
  }
}