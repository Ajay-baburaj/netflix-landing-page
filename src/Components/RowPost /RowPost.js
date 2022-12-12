import React, { useEffect,useState } from 'react'
import YouTube from 'react-youtube'
import './RowPost.css'
import axios from '../../axios'
import {API_KEY, imageUrl } from '../../Constants/constants'

function RowPost(props) {
    const [movie, setMovie] = useState([])
    const [videoUrl,setVideoUrl] = useState('')

    useEffect(() => {
      axios.get(props.url).then((response)=>{
        setMovie(response.data.results)
      })
    }, [])

    const videoPlay=(id)=>{
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
            if(response.data.results.length !==0 ){
                setVideoUrl(response.data.results[0])
            }else{
                console.log('sorry no video found')
            }
        })

    }

    const opts = {
        height: '390',
        width: '100%' ,
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
          {
            movie.map((obj)=>
            <img onClick={()=>videoPlay(obj.id)} className={ props.isSmall? 'small-poster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
            )
          }
       
       
        </div>
        { videoUrl && <YouTube opts ={opts} videoId={videoUrl.key} />}
    </div>
  )
}

export default RowPost