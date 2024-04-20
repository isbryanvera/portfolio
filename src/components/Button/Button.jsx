import './Button.css'

function Button({text, icon, type}) {
  return (
    <button className={`cssbuttons-io-button ${type}`}>
      {text}
      <div className="icon">
        {icon}
      </div>
    </button>
  )
}

export {Button}