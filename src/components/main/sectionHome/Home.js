import home1 from '../../../images/home1-v2.jpg'
import video1 from '../../../images/video1.mp4'
import useMainVideo from '../../../hooks/useMainVideo'
import HomeVideo from './HomeVideo'
import HomeImage from './HomeImage'
import HomePromo from './HomePromo'


export default function Home(){

  const { showVideo, setPlayVideo } = useMainVideo()

  function handleClick(){
    if(video1){
      setPlayVideo(true)
    }
  }

  const validate = video1 ? showVideo : false

  return (
    <section className="absolute top-0 w-full h-11/12">
      <div className="relative w-full h-full">
        {
          validate 
          ?
          <HomeVideo videoUrl={video1} />
          :
          <HomeImage imageUrl={home1} />
        }
        <HomePromo handleClick={handleClick} />
      </div>
    </section>
  )
}