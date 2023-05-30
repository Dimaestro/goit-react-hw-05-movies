const ReviewsList = ({reviews}) => {
  return (
    <div>
      <ul>
        {reviews.map(({id, author, content}) => {
          return (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ReviewsList
