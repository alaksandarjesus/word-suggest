import Constants from '../../Constants';
import { useEffect, useState } from 'react';
import DrawWords from './DrawWords';
import PrepareWords from './PrepareWords';

function MakeQuery(props) {

    const [state, setState] = useState({ words: [] })

    useEffect(() => {
        let queryParams = {};
        queryParams[props.queryKey] = props.query.search;
        const url = `${Constants.datamuse.words}?${new URLSearchParams(queryParams)}`
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    const words = PrepareWords(props.query, result);
                    setState({ words: words })
                },
                (error) => {
                    setState({ words: [] })
                }
            )
    }, [props]);

 
        return (
            <>
                <DrawWords words={state.words} title={props.title} query={props.query} />
            </>
        )

}


export default MakeQuery;