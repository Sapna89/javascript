// Problem statement
// get all movies in 2018 with rating > 4
// sort them by their rating
// desending order
// pick their title
//Output: b, a

const movies = [
    //shift+alt+down-arrow to duplicate lines
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'b1', year: 2018, rating: 4.9 },
    { title: 'c', year: 2018, rating: 5 },
    { title: 'd', year: 2017, rating: 4.5 },
];

filterTopMovies(movies);

function filterTopMovies(movies){
    
    const topMovies = movies.filter(value => (value.year === 2018 && value.rating >= 4))
                            .sort((a, b) => a.rating > b.rating ? -1 : 1);   
    
    return topMovies.forEach(element => {console.log(element.title);});
}

//instructor solution
// const topMovies = movies.filter(value => (value.year === 2018 && value.rating >= 4))
//                         .sort((a, b) => a.rating - b.rating)
//                         .reverse
//                         .map(m => m.title);   
