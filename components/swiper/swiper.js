import {React,useEffect,useState} from 'react'
import TinderCard from 'react-tinder-card'
import styles from '../../styles/Home.module.css'

function Swiper(props) {
    let i = 0 ;
    const films = props.data; 
    const [lastDirection, setLastDirection] = useState("");

  

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        setLastDirection(direction)
       
      }

  
      useEffect(() => {
        const timer = setTimeout(() => {
          setLastDirection("");
        }, 500);
        return () => clearTimeout(timer);
      }, [lastDirection])


  return (
    <>
      <h1>React Tinder Card</h1>
      <div className={styles.cardContainer}>
            {films?.map((elem,i) =>
                <TinderCard key={i} className={styles.swipe} onSwipe={(dir) => swiped(dir, elem?.title)}  >
                  <div style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original/${elem.poster_path}')` }} className={`${styles.card} shadow-md`}>
                  </div>
                </TinderCard>
            )}

      </div>




      { (lastDirection) &&
         <div className={`h-screen bg-black w-full absolute inset-0 opacity-70 flex flex-col justify-center items-center align-center ${lastDirection == "" ? "hidden" : "block"} ${lastDirection == "right" ? "bg-green-500" : "bg-red-500"}`}>
        <h1 className="font-bold text-center text-6xl mt-4 text-white">
          {lastDirection == "right" ? "Like" : "Dislike"}
        </h1>
      </div>
        }
      </>
  )


}

export default Swiper