import Movie from "./Movie";

const Carousel = ({ data, name }) => {
  return (
    <div>
      <h1>{name}</h1>
      <div  className="carousel">
        {data?.map((movie) => <Movie data={movie}/>)}
      </div>
    </div>
  )
}

export default Carousel;
