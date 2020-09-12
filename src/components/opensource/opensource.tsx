import React, { useState, useEffect, lazy, Suspense } from 'react';
import ApolloClient, { gql } from 'apollo-boost';
import './opensource.css';

function OpenSource() {
    // const RepoCard = lazy(() => import('../../components/repocard/repocard'))
    const [ repos, setRepos ] = useState([]);

    useEffect(() => {
        getRepoData();
    }, [])

    function getRepoData() {
        // I don't know well about this part...
        const client = new ApolloClient({
            uri: "https://api.github.com/graphql",
            request: (operation) => {
                operation.setContext({
                    headers: {
                        authorization: `Bearer 24f453a66fdaa8d02bd7937963daedcb329631aa`,
                    },
                });
            },
        });
      
        client
            .query({
                query: gql`
                {
                user(login: "ekalii") {
                    pinnedItems(first: 2, types: [REPOSITORY]) {
                        totalCount
                        edges {
                            node {
                                ... on Repository {
                                    name
                                    description
                                    forkCount
                                    stargazers {
                                        totalCount
                                    }
                                    url
                                    id
                                    diskUsage
                                    primaryLanguage {
                                        name
                                        color
                                    }
                                }
                            }
                        }
                    }
                }
            }
            `,
        })
        .then((result) => {
            setrepoFunction(result.data.user.pinnedItems.edges);
            console.log(result);
        })
        .catch(function (error) {
            console.log(error);
            console.log("Because of this Error, nothing is shown in place of Projects section. Projects section not configured");
        });
    }

    function setrepoFunction(arr: []) {
        setRepos(arr);
    }
    return (
        <div>
            Open Source
        </div>
    );
}
export default OpenSource;