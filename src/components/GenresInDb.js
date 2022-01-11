import React from "react";
import { Genre } from "./Genre";

function LastMovieInDb() {

  const [genres, setGenres] = useState([])

  const apiCall = async (url, handler) =>{
    try {
      const response = await fetch(url);
    const result = await response.json();
    
    handler(result.data)
    
    } catch (error) {
      console.log(error);
    }
  }

  const handleGenre = (data) =>{
    setGenres(data)

  }

  useEffect(() => {
   apiCall('http://localhost:3001/api/genres', handleGenre)
   
  }, [])



  return (
    <div className="col-lg-8 mb-4 mx-8">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Genres in Data Base
          </h5>
        </div>
        <div className="card-body">
        <div className="row">
          {
            genres.map(genre => {<Genre key={genre.id} {...genre} />})
          }
         
         </div>

            </div>
          </div>
        </div>

  );
}

export default LastMovieInDb;
