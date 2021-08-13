const Movie = ({ data }) => {
  return (
    <div className="movie">
      <h3>{data.original_title}</h3>
    </div>
  )
}

export default Movie;