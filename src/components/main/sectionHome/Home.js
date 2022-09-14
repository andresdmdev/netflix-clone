import { randomImgHomeData } from '../../../helpers/imgHomeData'
import HomeImage from './HomeImage'
import HomePromo from './HomePromo'

export default function Home(){

  const randomImagenHome = randomImgHomeData()

  return (
    <section className="absolute top-0 w-full h-11/12">
      <div className="relative w-full h-full">
        <HomeImage imageHome={randomImagenHome.image} />
        <HomePromo 
          title={randomImagenHome.title}
          overview={randomImagenHome.overview}
          mediaType={randomImagenHome.mediaType}
        />
      </div>
    </section>
  )
}