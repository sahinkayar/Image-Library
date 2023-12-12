import axios from 'axios'

const searchImages =async  (term) => { 
   const response =await axios.get('https://api.unsplash.com/search/photos', { 
    headers:{
          Authorization:'Client-ID 9jHx4CA79k7GI9CN18h5Rl6TQCnK6WzwiA-TpYgDmJ0' ,
        },
     params : {
          query:term,
        },
      });
   return response.data.results;
        }

export default searchImages
