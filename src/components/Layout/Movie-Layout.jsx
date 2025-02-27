import Card from '../Movie-Card/Card';
import './Movie-Layout.css'

  const INITIAL_DATA = [
    {
        poster: 'public/posters/two_man.png',
        rating: 456,
        title: 'Two And a Half Men',
        key: 1
    },

    {
        poster: 'public/posters/shang_chi.png',
        rating: 124,
        title: 'Shang Chi',
        key: 2
    },

    {
        poster: 'public/posters/money_heist.png',
        rating: 125,
        title: 'Money Heist',
        key: 3
    },

    {
        poster: 'public/posters/loki.png',
        rating: 235,
        title: 'Loki',
        key: 4
    },

    {
        poster: 'public/posters/how_i_met.png',
        rating: 123,
        title: 'How I Met Your Mother',
        key: 5
    },

    {
        poster: 'public/posters/friends.png',
        rating: 523,
        title: 'Friends',
        key: 6
    },

    {
        poster: 'public/posters/black_widow.png',
        rating: 324,
        title: 'Black Widow',
        key: 7
    },

    {
        poster: 'public/posters/big_bang.png',
        rating: 235,
        title: 'The Big Bang Theory',
        key: 8
    },
]


const MovieLayout = () => {

    return(
        <div className='movie-layout'>
            {INITIAL_DATA.map(el => (
                <Card 
                    key={el.key}
                    poster={el.poster}
                    rating={el.rating}
                    title={el.title} 
                 />
        ))}
        </div>
        
    )
};

export default MovieLayout;