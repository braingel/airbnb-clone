
export default function Card(props) {
    // put any images in the dist folder!! only way they will be available
    // when using item={item} to create components, retrieve the value using props.item.<property>
    // when using {...item} or spread then retrieve values using the name in the data folder, do props.<property>
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    console.log(props)
    return (
        <div className="card">
            {/* short hand statement, if the first part is truthy then the part after && will display */}
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.coverImg} className="card--img" />
            <div className="card-content">
                <div className="card--stats">
                    <img src="star.png" className="card--star"/>
                    <span>{props.stats.rating}</span>
                    <span className="gray">({props.stats.reviewCount}) •</span>
                    <span className="gray">{props.location}</span>
                </div>
                <div className="card--title">{props.title}</div>
                <div>
                    <span className="strong">From ${props.price}</span>
                    <span>/ person</span>
                </div>
            </div>
        </div>
    )
}
// `../assets/ ${props.item.img}`