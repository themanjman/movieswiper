import styles from '../../styles/Home.module.css'
import { getSummary } from '../../hooks/getData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'



export const Modal = ({ handleClose, show, setShow, movieID, checked}) => {

        let { serverError, apiData } = getSummary(movieID, checked)

        return (
            <div className={` ${show ? "absolute" : "hidden"} inset-0 w-full h-screen text-center justify-center ${styles.modal__container}`}>
                <div id="defaultModal" tabIndex="-1" aria-hidden="true" className="flex flex-col justify-center items-center overflow-y-auto overflow-x-hidden absolute  z-50 w-full inset-0 h-modal h-full">
                    <div className="relative p-4 w-full max-w-2xl h-auto">

                        <div className={`relative rounded-lg shadow ${styles.modal}`}>

                            <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    {checked == false ? apiData?.original_title : apiData?.name}
                                    <span className="bg-green-100 text-green-800 text-xs font-semibold ml-2 px-2.5 py-0.5 rounded">{apiData?.status}</span>
                                </h3>
                                
                               
                                <button onClick={() => setShow(false) }type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" ></path></svg>  
                                </button>
                            </div>

                            <div className="p-6 space-y-6 mb-3 mt-6 ">
                                <p className="text-base leading-relaxed text-[14pt] text-gray-500 dark:text-gray-400">
                                    {apiData?.overview}
                                </p>
                            </div>


                            <div className="grid grid-cols-2 rounded-full border-b p-4 dark:border-gray-600">
                                <div className='text-left'>
                                    <FontAwesomeIcon className='w-4' icon={faStar} color="gold"/> {apiData?.vote_average}
                                </div>
                                <div className='text-right'>
                                    {apiData?.genres.map((elem,i) =>
                                        <span key={i} className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">{elem.name}</span>
                                    )}
                                </div>
                            
                            </div>

                            
                            
                        </div>
                    </div>
                </div>
            </div>
        );


}