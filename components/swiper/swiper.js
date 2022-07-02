import {React,useEffect,useState} from 'react'
import TinderCard from 'react-tinder-card'
import styles from '../../styles/Home.module.css'
import {Modal} from '../modal/modal'
import {getSummary} from '../../hooks/getData'

function Swiper(props) {
    let i = 0 ;
    const films = props.data; 
    const [lastDirection, setLastDirection] = useState("");
    const [swiping, setswiping] = useState(false);
    const [showModal, setshowModal] = useState(false);
    const [movieID, setmovieID] = useState(""); 


    const swiped = (direction, nameToDelete) => {
        setshowModal(false);
        setswiping(false)
        setLastDirection(direction)
    }

    const infoModal = (id) =>{
      if (swiping) setshowModal(false);
      

        if(swiping == false && lastDirection == ""){
          setmovieID(id);
          setshowModal(true)
        }


     

    }

    const onSwipe = () =>{
      setswiping(true)
    }

  
    useEffect(() => {
      const timer = setTimeout(() => {
        setLastDirection("");
        setmovieID("");
      }, 500);
      return () => clearTimeout(timer);
    }, [lastDirection])

    return (
      <>
        <div className={styles.cardContainer}>
              {films?.map((elem,i) =>
                  <TinderCard  key={i} className={styles.swipe} onSwipe={(dir) => swiped(dir, elem?.title)}  onCardLeftScreen={() => setshowModal(false)}>
                    <div onClick={() => infoModal(elem.id) } style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original/${elem.poster_path}')` }} className={`${styles.card} shadow-md`}>
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
          
          {(movieID != "") &&
          <Modal show={showModal} setShow={setshowModal} movieID={movieID} checked={props.checked}/>
          }
        </>
    )


}

export default Swiper