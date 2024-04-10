import "./Package.css";

const Package = ({ name, url, description }) => {
  return (
    <article className="package">
      <div className="package__overview">
        <img src="https://via.placeholder.com/90" alt="imagen" />
      </div>
      <div className="package__information">
        <h3 className="package__title"><a href="#">{name}</a></h3>
        <p className="package__description">Hello there! I'm thrilled to welcome you to my portfolio. I am a passionate and versatile full-stack developer with a keen interest </p>

        <div className="package__resources">
          <div className="package__interaction">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.66537 7.76132L9.4127 7.01465C9.53835 6.89312 9.7067 6.8258 9.8815 6.8272C10.0563 6.82859 10.2236 6.89859 10.3473 7.02211C10.471 7.14562 10.5412 7.31279 10.5428 7.48758C10.5445 7.66238 10.4774 7.83083 10.356 7.95665L8.47003 9.84265C8.40826 9.90478 8.33482 9.95408 8.25393 9.98772C8.17305 10.0214 8.0863 10.0387 7.9987 10.0387C7.91109 10.0387 7.82435 10.0214 7.74346 9.98772C7.66258 9.95408 7.58913 9.90478 7.52737 9.84265L5.64137 7.95665C5.57947 7.89467 5.53039 7.8211 5.49692 7.74015C5.46346 7.6592 5.44627 7.57244 5.44633 7.48485C5.44639 7.39725 5.4637 7.31052 5.49728 7.22962C5.53086 7.14871 5.58005 7.07522 5.64203 7.01332C5.70402 6.95142 5.77758 6.90234 5.85854 6.86888C5.93949 6.83541 6.02624 6.81822 6.11384 6.81828C6.20143 6.81834 6.28816 6.83566 6.36907 6.86924C6.44997 6.90282 6.52347 6.952 6.58537 7.01399L7.33203 7.76132V4.00065C7.33203 3.82384 7.40227 3.65427 7.52729 3.52925C7.65232 3.40422 7.82189 3.33398 7.9987 3.33398C8.17551 3.33398 8.34508 3.40422 8.4701 3.52925C8.59513 3.65427 8.66537 3.82384 8.66537 4.00065V7.76132ZM3.9987 11.334H11.9987C12.1755 11.334 12.3451 11.4042 12.4701 11.5292C12.5951 11.6543 12.6654 11.8238 12.6654 12.0007C12.6654 12.1775 12.5951 12.347 12.4701 12.4721C12.3451 12.5971 12.1755 12.6673 11.9987 12.6673H3.9987C3.82189 12.6673 3.65232 12.5971 3.52729 12.4721C3.40227 12.347 3.33203 12.1775 3.33203 12.0007C3.33203 11.8238 3.40227 11.6543 3.52729 11.5292C3.65232 11.4042 3.82189 11.334 3.9987 11.334Z" fill="black"/>
            </svg>
            <span>40</span>
          </div>
          <div className="package__interaction">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.125 2.125C9.8125 2.125 8.67125 2.71688 8 3.70875C7.32875 2.71688 6.1875 2.125 4.875 2.125C3.88079 2.12616 2.92764 2.52162 2.22463 3.22463C1.52162 3.92764 1.12616 4.88079 1.125 5.875C1.125 7.7 2.2625 9.59937 4.50625 11.5194C5.53441 12.3955 6.64501 13.1699 7.8225 13.8319C7.87707 13.8612 7.93805 13.8765 8 13.8765C8.06195 13.8765 8.12293 13.8612 8.1775 13.8319C9.35499 13.1699 10.4656 12.3955 11.4937 11.5194C13.7375 9.59937 14.875 7.7 14.875 5.875C14.8738 4.88079 14.4784 3.92764 13.7754 3.22463C13.0724 2.52162 12.1192 2.12616 11.125 2.125ZM8 13.0694C6.97437 12.4775 1.875 9.3575 1.875 5.875C1.87583 5.0796 2.19216 4.31702 2.75459 3.75459C3.31702 3.19216 4.0796 2.87583 4.875 2.875C6.1425 2.875 7.20687 3.55187 7.65312 4.64187C7.68138 4.71065 7.72944 4.76948 7.7912 4.81088C7.85297 4.85228 7.92564 4.87439 8 4.87439C8.07436 4.87439 8.14703 4.85228 8.2088 4.81088C8.27056 4.76948 8.31862 4.71065 8.34688 4.64187C8.79313 3.55187 9.8575 2.875 11.125 2.875C11.9204 2.87583 12.683 3.19216 13.2454 3.75459C13.8078 4.31702 14.1242 5.0796 14.125 5.875C14.125 9.3575 9.02563 12.4775 8 13.0694Z" fill="black"/>
            </svg>
            <span>40</span>
          </div>
        </div>
      </div>
    </article>
  )
}

export { Package }