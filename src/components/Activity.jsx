export default function Activity(props){
    
    return (
        <div className="activity-container">
            <div className={`image-container ${props.type}`}>
                <img src={`/images/icon-${props.type}.svg`} className="activity-icon" alt="Activity Icon"></img>
            </div>
            <div className="stats-container">
                <div className="stats-header">
                    <h2 className="activity-type">{props.title}</h2>
                    <img src="/images/icon-ellipsis.svg" className="more-btn" alt="More button icon" ></img>
                </div>
                <div className="hours-container">
                    <h1 className="hours-current">{props.timeframes[props.chosenTF].current}hrs</h1>
                    <p className="hours-previous">Last Week - {props.timeframes[props.chosenTF].previous}hrs</p>
                </div>
            </div>
        </div>
    )
}