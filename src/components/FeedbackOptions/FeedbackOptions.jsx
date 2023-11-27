export const FeedbackOptions = ({ options, onLeaveFeedback }) =>{
    return (       
            <div onClick={onLeaveFeedback}>
                {options.map((item) =>
                <button type="button" key={item}>{item}</button>)}
            </div>
               
        )
}