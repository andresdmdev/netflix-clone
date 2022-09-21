
export default function userRatingFilm({ data, ref }){
  
  let userRating = JSON.parse(localStorage.getItem('user-rating'))

  if(userRating){

    const findUserRating = userRating.find(elem => elem.id === data.id)

    if(findUserRating){
      userRating = userRating.filter(elem => elem.id !== data.id)
    }

    const userRating2 = JSON.stringify(userRating.concat([ { ...data, user_rating: ref.current.id } ]))
    localStorage.setItem('user-rating', userRating2)

  } else{
    console.log(data)
    localStorage.setItem('user-rating', JSON.stringify([ { ...data, user_rating: ref.current.id } ]))
  }
}