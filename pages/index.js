import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/foundation/Box'
import AlurakutMenu from '../src/components/commons/Menu'
import OrkutNostalgicIconSet from '../src/components/commons/IconSet';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
import React from 'react';

const fixedUser = 'felipevash';

function ProfileSidebar(propriedades) {
  return (
    <Box>
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px' }} />
    </Box>
  )
}

export default function Home(props) {
  const lista = props.followers;
  const name = props.userData.name;
  const listaSeguidores = [];

  lista.map((seguidor) => {
    listaSeguidores.push(seguidor.login)
  });
  
  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        {/* <Box style="grid-area: profileArea;"> */}
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={fixedUser} key={fixedUser}/>
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">
              Bem vindo(a) {name}
            </h1>

            <OrkutNostalgicIconSet />
          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Seguidores ({listaSeguidores.length})
            </h2>

            <ul>
              { listaSeguidores.map((itemAtual) => {
                if(listaSeguidores.length > 6) {
                  listaSeguidores.splice(5, (listaSeguidores.length - 6))
                }
                return (
                  <li  key={itemAtual}>
                    <a href={`/users/${itemAtual}`}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}

export async function getStaticProps() {
  const followers = await fetch(`https://api.github.com/users/${fixedUser}/followers`)
      .then((resposta) => {
        return resposta.json();
      })
  const userData = await fetch(`https://api.github.com/users/${fixedUser}`)
      .then((resposta) => {
        return resposta.json();
      })

  return {
    props: {
      followers: followers,
      userData: userData
    },
  }
}