import './Button.css'

function Button({text, type}) {
  return (
    <div className={`button  ${type === 'main' ? 'main' : 'secondary'}`}>
      {text}
    </div>
  )
}

export {Button}