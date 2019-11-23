
export const Api = {
    getMembers: () => {
        return new Promise((resolve, reject) => {
          fetch(`http://localhost:5000/api/members?page=1&page_size=6`)
            .then(response => response.json())
            .then(data => resolve({ data }))
            .catch(error => reject({ error }))
        })
    }
}