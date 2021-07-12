import AlurakutProfileSidebarMenuDefault from '../Default';

export default function AlurakutMenuProfileSidebar({ githubUser }) {
    return (
      <div className="alurakutMenuProfileSidebar">
        <div>
          <img src={`https://github.com/${githubUser}.png`} style={{ borderRadius: '8px' }} />
          <hr />
          <p>
            <a className="boxLink" href={`/user/${githubUser}`}>
              @{githubUser}
            </a>
          </p>
          <hr />
  
          <AlurakutProfileSidebarMenuDefault />
        </div>
      </div>
    )
  }