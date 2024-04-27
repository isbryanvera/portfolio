import './Quote.css';

const Quote = () => {
  return (
    <div className='frame__container'>
      <div className="frame">
        <div className="circle"></div>
        <div className="line left"></div>
        <div className="line right"></div>
        <div className="bracket left"></div>
        <div className="bracket right"></div>
        <div className="small top"><span className="first-letter">D</span>evelop</div>
        <div className="big">Ideas</div>
        <div className="small bottom">Not <span className="first-letter">T</span>hings</div>
        <div className="hide top"></div>
        <div className="hide bottom"></div>
      </div>
    </div>
  );
};

export { Quote };
