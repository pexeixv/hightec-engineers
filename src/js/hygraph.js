import { request, gql } from 'graphql-request'

const endpoint =
    'https://ap-south-1.cdn.hygraph.com/content/cljfavmr700zt01ukfz1b79w2/master'

const queries = {
    jobs: gql`
        query Jobs {
            jobs {
                title
                description {
                    html
                }
                number
            }
        }
    `,
}

const hygraph = async (query) => {
    const res = await request(endpoint, queries[query])
    const data = await res[query]
    return data
}

export default hygraph
