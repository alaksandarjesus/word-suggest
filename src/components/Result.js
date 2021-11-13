import MakeQuery from './results/MakeQuery';


function Result(props) {


    if (props.query && props.query.search) {
        return (
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <MakeQuery title="Synonym" query={props.query} queryKey="rel_syn" />
                    </div>
                    <div className="column">
                        <MakeQuery title="Antonym" query={props.query} queryKey="rel_ant" />
                    </div>
                    <div className="column">
                        <MakeQuery title="Means Like" query={props.query} queryKey="ml" />
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                        <MakeQuery title="Sounds Like" query={props.query} queryKey="sl" />
                    </div>
                    <div className="column">
                        <MakeQuery title="Spelled Like" query={props.query} queryKey="sp" />
                    </div>
                    <div className="column">
                        <MakeQuery title="Rhymes Like" query={props.query} queryKey="rel_rhy" />
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                        <MakeQuery title="Left To" query={props.query} queryKey="lc" />
                    </div>
                    <div className="column">
                        <MakeQuery title="Right of" query={props.query} queryKey="rc" />
                    </div>
                    <div className="column">
                        <MakeQuery title="Topics" query={props.query} queryKey="topics" />
                    </div>
                </div>

            </div>
        );
    }
    return (
        <>
            No search term
        </>
    )

}


export default Result;