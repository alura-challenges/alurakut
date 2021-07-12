import React from 'react';
import styled from 'styled-components';

export default function OrkutNostalgicIconSet(props) {
    return (
      <OrkutNostalgicIconSet.List>
        {[
          { name: 'Recados', slug: 'recados', icon: 'book' },
          { name: 'Fotos', slug: 'fotos', icon: 'camera' },
          { name: 'Videos', slug: 'videos', icon: 'video-camera' },
          { name: 'Fãs', slug: 'fas', icon: 'star' },
          { name: 'Mensagens', slug: 'mensagens', icon: 'email' },
        ].map(({ name, slug, icon }) => (
          <li key={`orkut__icon_set__${slug}`}>
            <span style={{ gridArea: 'title' }} className="OrkutNostalgicIconSet__title">
              {name}
            </span>
            <span className="OrkutNostalgicIconSet__number" style={{ gridArea: 'number' }}>
              <img key={`orkut__icon_set__${slug}_img`} className="OrkutNostalgicIconSet__iconSample" src={`https://alurakut.vercel.app/icons/${icon}.svg`} />
              {props[slug] ? props[slug] : 0}
            </span>
          </li>
        ))}
        {[
          { name: 'Confiável', slug: 'confiavel', icon: 'smile' },
          { name: 'Legal', slug: 'legal', icon: 'cool' },
          { name: 'Sexy', slug: 'sexy', icon: 'heart' },
        ].map(({ name, slug, icon }) => {
          const total = props[slug] ? props[slug] : 2;
          return (
            <li key={`orkut__icon_set__${slug}`}>
              <span className="OrkutNostalgicIconSet__title">
                {name}
              </span>
              <span className="OrkutNostalgicIconSet__iconComplex" className="OrkutNostalgicIconSet__number" style={{ gridArea: 'number' }}>
                {[0, 1, 2].map((_, index) => {
                  const isHeartActive = index <= (total);
                  return <img key={`orkut__icon_set__${slug}_img_${index}`} src={`https://alurakut.vercel.app/icons/${icon}.svg`} style={{ marginRight: '2px', opacity: isHeartActive ? 1 : '0.5' }} />
                })}
              </span>
            </li>
          );
        })}
      </OrkutNostalgicIconSet.List>
    )
  }
  OrkutNostalgicIconSet.List = styled.ul`
    margin-top: 32px;
    list-style: none;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
      font-size: 12px;
      color: #5A5A5A;
      display: grid;
      grid-template-areas:
        "title title"
        "number number"; 
      
      &:not(:last-child) {
        margin-right: 5px;
      }
      .OrkutNostalgicIconSet__title {
        display: block;
        font-style: italic; 
      }
      .OrkutNostalgicIconSet__number {
        min-width: 15px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        .OrkutNostalgicIconSet__iconSample {
          margin-right: 7px;
        }
      }
    }
  `;