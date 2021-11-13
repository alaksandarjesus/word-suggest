import { useForm } from 'react-hook-form';


function More(props) {

    const config = {
        defaultValues:{
            search: '',
            starts: '',
            ends: '',
            min: '',
            max: '',
            exact: '',
            sounds: '',
            spelled: '',
            associated: '',
            related: ''
        }
    }
    const rules = {
        search: {
            required: true,
            maxLength: 50,
            pattern: /^[A-Za-z\s]+$/i
        },
        starts: {
            pattern: /^[A-Za-z]+$/i
        },
        ends: {
            pattern: /^[A-Za-z]+$/i
        },
        min: {
            pattern: /^[0-9]+$/i
        },
        max: {
            pattern: /^[0-9]+$/i
        },
        exact: {
            pattern: /^[0-9]+$/i
        },
        sounds: {
            maxLength: 50,
            pattern: /^[A-Za-z\s]+$/i
        },
        spelled: {
            maxLength: 50,
            pattern: /^[A-Za-z\s]+$/i
        },
        associated: {
            maxLength: 50,
            pattern: /^[A-Za-z\s]+$/i
        },
        related: {
            maxLength: 50,
            pattern: /^[A-Za-z\s]+$/i
        }
    }
    const messages = {
        search: {
            required: 'Search is required',
            maxLength: 'Max 50 characters',
            pattern: 'Can contain only alphabets & space'
        },
        starts: {
            pattern: 'Can contain only alphabets'
        },
        ends: {
            pattern: 'Can contain only alphabets'
        },
        min: {
            pattern: 'Can contain only numbers'
        },
        max: {
            pattern: 'Can contain only numbers'
        },
        exact: {
            pattern: 'Can contain only numbers'
        },
        sounds: {
            maxLength: 'Max 50 characters',
            pattern: 'Can contain only alphabets & space'
        },
        spelled: {
            maxLength: 'Max 50 characters',
            pattern: 'Can contain only alphabets & space'
        },
        associated: {
            maxLength: 'Max 50 characters',
            pattern: 'Can contain only alphabets & space'
        },
        related: {
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

    function onCancel(event) {
        event.preventDefault();
        event.stopPropagation();
        props.toggleMore(false)
    }

    return (
        <div className={`modal ${props.show ? 'is-active' : ''}`}>
            <div className="modal-background"></div>
            <div className="modal-card p-3">
                <form className="modal-card-body" onSubmit={handleSubmit(onSubmit)}>
                    <div className="columns">
                        <div className="column">
                            <div className="field">
                                <label className="label">Search</label>
                                <div className="control">
                                    <input {...register("search", rules.search)} className="input" autoFocus />

                                </div>
                                <div className="help is-danger">
                                    {errors.search?.type === "required" && messages.search.required}
                                    {errors.search?.type === "maxLength" && messages.search.maxLength}
                                    {errors.search?.type === "pattern" && messages.search.pattern}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <div className="field">
                                <label className="label">Starts With</label>
                                <div className="control">
                                    <input {...register("starts", rules.starts)} className="input" />
                                </div>
                                <div className="help is-danger">
                                    {errors.starts?.type === "pattern" && messages.starts.pattern}
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="field">
                                <label className="label">Ends With</label>
                                <div className="control">
                                    <input {...register("ends", rules.ends)} className="input" />
                                </div>
                                <div className="help is-danger">
                                    {errors.ends?.type === "pattern" && messages.ends.pattern}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="columns is-mobile">
                        <div className="column">
                            <div className="field">
                                <label className="label">Min</label>
                                <div className="control">
                                    <input {...register("min", rules.min)} className="input" />
                                </div>
                                <div className="help is-danger">
                                    {errors.min?.type === "pattern" && messages.min.pattern}
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="field">
                                <label className="label">Max</label>
                                <div className="control">
                                    <input {...register("max", rules.max)} className="input" />
                                </div>
                                <div className="help is-danger">
                                    {errors.max?.type === "pattern" && messages.max.pattern}
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="field">
                                <label className="label">Exact</label>
                                <div className="control">
                                    <input {...register("exact", rules.exact)} className="input" />
                                </div>
                                <div className="help is-danger">
                                    {errors.exact?.type === "pattern" && messages.exact.pattern}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="columns is-mobile">
                        <div className="column">
                            <div className="field">
                                <label className="label">Sounds Like</label>
                                <div className="control">
                                    <input {...register("sounds", rules.sounds)} className="input" />
                                </div>
                                <div className="help is-danger">
                                    {errors.sounds?.type === "maxLength" && messages.sounds.maxLength}
                                    {errors.sounds?.type === "pattern" && messages.sounds.pattern}
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="field">
                                <label className="label">Spelled Like</label>
                                <div className="control">
                                    <input {...register("spelled", rules.spelled)} className="input" />
                                </div>
                                <div className="help is-danger">
                                    {errors.spelled?.type === "maxLength" && messages.spelled.maxLength}
                                    {errors.spelled?.type === "pattern" && messages.spelled.pattern}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="columns is-mobile">
                        <div className="column">
                            <div className="field">
                                <label className="label">Associated</label>
                                <div className="control">
                                    <input {...register("associated", rules.associated)} className="input" />
                                </div>
                                <div className="help is-danger">
                                    {errors.associated?.type === "maxLength" && messages.associated.maxLength}
                                    {errors.associated?.type === "pattern" && messages.associated.pattern}
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="mb-2">
                                <div className="field">
                                    <label className="label">Related</label>
                                    <div className="control">
                                        <input {...register("related", rules.related)} className="input" />
                                    </div>
                                    <div className="help is-danger">
                                    {errors.related?.type === "maxLength" && messages.related.maxLength}
                                    {errors.related?.type === "pattern" && messages.related.pattern}
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="level is-mobile">
                            <div className="level-left">
                                <button type="reset" className="button is-warning">Reset</button>
                            </div>
                            <div className="level-right">
                                <button type="button" className="button mr-2" onClick={onCancel}>Cancel</button>
                                <button type="submit" className="button is-link">Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )


}


export default More;