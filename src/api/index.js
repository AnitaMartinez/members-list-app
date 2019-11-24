
export const Api = {
    getMembers: ({page, itemsPerPage}) => {
        return new Promise((resolve, reject) => {
          fetch(`http://localhost:5000/api/members?page=${page}&page_size=${itemsPerPage}`)
            .then(response => response.json())
            .then(data => resolve({ data }))
            .catch(error => reject({ error }))
        })
    }
}