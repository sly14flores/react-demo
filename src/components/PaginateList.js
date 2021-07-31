import Pagination from './Pagination'

const PaginateList = ({page, setPage, perPage, data}) => {

  let start = page * perPage
  let end = start + perPage
  const paginatedDisplay = data.slice(start,end)
  let totalPages = Math.ceil(data.length / perPage)
  if (data.length<perPage) totalPages = 1  

  return (
    <>
      <tbody>
          {paginatedDisplay}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="4">
            {data.length>perPage && <Pagination page={page} totalPages={totalPages} setPage={setPage} />}
          </td>
        </tr>
      </tfoot>
    </>
  )

}

export default PaginateList