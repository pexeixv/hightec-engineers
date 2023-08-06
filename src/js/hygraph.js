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
    services: gql`
        query Services {
            services {
                title
                icon
            }
        }
    `,
    projects: gql`
        query Projects {
            projects {
                image {
                    url
                }
                title
                description
            }
        }
    `,
    partners: gql`
        query Partners {
            partners {
                name
                logo {
                    url
                }
                website
            }
        }
    `,
    offices: gql`
        query Offices {
            offices {
                email
                address
                name
                map
                phone
            }
        }
    `,
    leaders: gql`
        query Leaders {
            leaders {
                designation
                description
                name
                photograph {
                    url
                }
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
