import React from 'react';

function GithubCard({ repos }: any) {
    return(
        <div>
            {repos.toString()}
        </div>
    )
}
export default GithubCard;