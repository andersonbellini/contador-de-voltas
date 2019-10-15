import React from 'react'

const MostraTempo = (props) => {
  const tempo = props.tempo
  const minutos = Math.ceil(tempo / 60)
  const segundos = tempo % 60
  const minutoStr = minutos < 10 ? '0' + minutos : minutos
  const segundosStr = segundos < 10 ? '0' + segundos : segundos
  return (
    <p className='tempo'>
      <span>{`${minutoStr}:${segundosStr}`}</span><br />
      Tempo médio por volta
    </p>
  )
}

export default MostraTempo