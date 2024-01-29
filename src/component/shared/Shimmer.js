import '../shared/Shimmer.scss'
let card
const Shimmer = () => {
    const array = Array(12).fill(0)
    card = <div className="card">
        <div className="p-32">
          <div className="shimmerBG title-line"></div>
          <div className="shimmerBG title-line end"></div>
          <div className="shimmerBG content-line m-t-24"></div>
          <div className="shimmerBG content-line"></div>
          <div className="shimmerBG content-line"></div>
          <div className="shimmerBG content-line"></div>
          <div className="shimmerBG content-line end"></div>
        </div>
      </div>
    return (
        <div className = "shimmer-container"> 
        {array.map((index)=>{
            return <div  className = "item" key = {index}>
                {card}
            </div>
        })}
        </div>
        )
}
export default Shimmer;
export {card}