import { useForm } from 'react-hook-form';

function Search(props) {
    const config = {
        defaultValues: {
            search: ""
        }
    }
    const rules = {
        search: {
            required: true,
            maxLength: 50,
            pattern: /^[A-Za-z\s]+$/i
        }
    }
    const messages = {
        search: {
            required: 'Search is required',
            maxLength: 'Max 50 characters',
            pattern: 'Can contain only alphabets & space'

        }
    }
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm(config);


    function onSubmit(data) {
        props.setQuery(data)
    }

    function toggleMore(event) {
        event.preventDefault();
        event.stopPropagation();
        props.toggleMore(true)
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className="is-flex is-justify-content-start is-align-items-start">
                    <div className="field is-flex-grow-1">
                        <div className="control">
                            <input {...register("search", rules.search)} className="input" autoFocus />

                        </div>
                        <div className="help">
                            {errors.search?.type === "required" && messages.search.required}
                            {errors.search?.type === "maxLength" && messages.search.maxLength}
                            {errors.search?.type === "pattern" && messages.search.pattern}
                        </div>
                    </div>
                    <button type="submit" className="button is-link is-hidden-mobile">
                        <span className="material-icons-outlined">
                            search
                        </span>
                    </button>
                </div>
                <div className="is-flex is-justify-content-center is-align-items-center">
                    <button type="button" className="button is-link" onClick={toggleMore}>More
                    </button>
                </div>
                <div className="is-flex is-justify-content-center is-align-items-cener">
                    <button type="submit" className="button is-link is-hidden-tablet">Search
                    </button>
                </div>
            </form>
        </>
    )
}


export default Search;
