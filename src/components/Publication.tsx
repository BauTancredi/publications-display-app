
const Publication = ({ publication, publishedBy }) => {
  return (
    <>
      <div className='border rounded-lg p-3 my-3'>
        <h2 className='text-3xl'>{publication.title}</h2>
        <p className='my-3'>{publication.body}</p>
        <p className='italic'>
          Published by {publishedBy}
        </p>
      </div>
    </>
  )
}

export default Publication