import React from 'react'
import GitHubButton from 'react-github-btn'

export default function Header() {
  return (
    <div style={{textAlign:"center", background:"linear-gradient(90deg, rgba(224,204,204,1) 30%, rgba(170,182,204,1) 99%)", height:"150px", padding:"5px", margin:"0"}}>
        <h1>React Search Emoji App 🦄</h1>
        <p>Simple tool to search emoji with ReactJS</p>
        <GitHubButton href='http://github.com/adanurk' data-size="large" data-icon="octicon-star" data-show-count="true">Stars</GitHubButton>
        <GitHubButton href='http://github.com/adanurk' data-size="large" data-icon="octicon-repo-forked" data-show-count="true">Forked</GitHubButton>
    </div>
  )
}
