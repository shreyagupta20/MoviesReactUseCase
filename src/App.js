import React, {Component} from 'react';
import Dashboard from './Dashboard';

const movies= [
    {  
       "movie_title":"Avatar ",
       "director_name":"James Cameron",
       "actor_1_name":"CCH Pounder",
       "actor_2_name":"Joel David Moore",
       "genres":"Action|Adventure|Fantasy|Sci-Fi",
       "language":"English",
       "country":"USA",
       "content_rating":"PG-13",
       "budget":"237000000",
       "title_year":"2009",
       "plot_keywords":"avatar|future|marine|native|paraplegic",
       "movie_imdb_link":"http://www.imdb.com/title/tt0499549/?ref_=fn_tt_tt_1"
    },
    {  
       "movie_title":"Pirates of the Caribbean: At World's End ",
       "director_name":"Gore Verbinski",
       "actor_1_name":"Johnny Depp",
       "actor_2_name":"Orlando Bloom",
       "genres":"Action|Adventure|Fantasy",
       "language":"English",
       "country":"USA",
       "content_rating":"PG-13",
       "budget":"300000000",
       "title_year":"2007",
       "plot_keywords":"goddess|marriage ceremony|marriage proposal|pirate|singapore",
       "movie_imdb_link":"http://www.imdb.com/title/tt0449088/?ref_=fn_tt_tt_1"
    },
    {  
       "movie_title":"Spectre ",
       "director_name":"Sam Mendes",
       "actor_1_name":"Christoph Waltz",
       "actor_2_name":"Rory Kinnear",
       "genres":"Action|Adventure|Thriller",
       "language":"English",
       "country":"UK",
       "content_rating":"PG-13",
       "budget":"245000000",
       "title_year":"2015",
       "plot_keywords":"bomb|espionage|sequel|spy|terrorist",
       "movie_imdb_link":"http://www.imdb.com/title/tt2379713/?ref_=fn_tt_tt_1"
    },
    {  
       "movie_title":"The Dark Knight Rises ",
       "director_name":"Christopher Nolan",
       "actor_1_name":"Tom Hardy",
       "actor_2_name":"Christian Bale",
       "genres":"Action|Thriller",
       "language":"English",
       "country":"USA",
       "content_rating":"PG-13",
       "budget":"250000000",
       "title_year":"2012",
       "plot_keywords":"deception|imprisonment|lawlessness|police officer|terrorist plot",
       "movie_imdb_link":"http://www.imdb.com/title/tt1345836/?ref_=fn_tt_tt_1"
    },

]

export default class App extends Component {
    render () {
        return (
            <div>
                <Dashboard />
            </div>
        );
    }
}
