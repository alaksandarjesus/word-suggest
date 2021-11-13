import '../../styles/DrawWords.css';

function getWords(words){

    return words.map((word, index, arr) => {
        const isLast = (index === (arr.length - 1));
        if(isLast){
            return (
                <span key={index} data-score={word.score}>
                    {word.word}  
                </span>
        )
        }
        return (
            <span key={index} data-score={word.score}>
                {word.word},&nbsp; 
            </span>
    )
        
        
    });
}



function DrawWords(props) {


    return (
        <>
            <nav className="panel draw-words">
                <p className="panel-heading">
                    {props.title} {props.query.search}
                </p>
                <div className="panel-block is-flex-wrap-wrap line-height-2">
                  
                   {getWords(props.words)}

                </div>
            </nav>

        </>
    );
}


export default DrawWords;