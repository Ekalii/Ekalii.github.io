import React, { useState, useEffect, lazy, Suspense } from 'react';
import ApolloClient, { gql } from 'apollo-boost';
import './opensource.css';
import GithubCard from '../githubcard/githubcard';
import { projects } from '../../portfolio';

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
                        authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
                    },
                });
            },
        });
      
        client
            .query({
                query: gql`
                {
                user(login: "ikalli") {
                    pinnedItems(first: 6, types: [REPOSITORY]) {
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
        <div className="main" id="opensource">
            <h1 className="project-title">{projects.title}</h1>
            <div className="repo-cards">
                {repos.map((v, i) => {
                    return <GithubCard repos={v} />;
                })}
            </div>
            <a href="https://github.com/Ikalli" target="_blank">More Projects</a>
        </div>
    );
}
export default OpenSource;