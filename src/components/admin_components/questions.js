import axios from "axios";
import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";

const Questions = () => {
    const [items, setItems] = useState([]);
    const {register, handleSubmit, reset} = useForm();
    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios.get("http://localhost:8989/questions/");
            setItems(result.data);
            console.log(result.data);
        }
        fetchItems();

    }, []);

    const onSubmit = async (data) => {
        console.log(data);
        const result = await axios.post("http://localhost:8989/questions/", data);
        const newItems = [...items, result.data];
        setItems(newItems);

        reset({});
    };
    const deleteQuestion = async (questionId) => {
        console.log(questionId);
        const result = await axios
            .delete(`http://localhost:8989/questions/${questionId}`)
            .then((res) => {
                if (res.status === 200) {
                    const newItems = items.filter((oldItem) => oldItem.id !== questionId);
                    setItems(newItems);
                } else {
                    console.log(res.status);
                }
            })

            .catch((res) => console.log(res));
        console.log(result);
    };
    return (<div>

        <div>
            <button
                className="btn btn-primary mb-2"
                data-toggle="modal"
                data-target="#questionModal"
            >
                + Add Question
        </button>
        </div>

        <div
            className="modal fade"
            id="questionModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="questionuserModalLabel"
            aria-hidden="true"
        >
            <form>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="questionModalLabel">
                                New Question
                </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label>Question Description</label>
                                <input
                                    name="question_description"
                                    type="text"
                                    className="form-control"
                                    ref={register}
                                />
                            </div>
                            <div className="form-group">
                                <label>Event ID</label>
                                <input
                                    name="event_id"
                                    type="text"
                                    className="form-control"
                                    ref={register({valueAsNumber: true, })}
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                            >
                                Close
                </button>
                            <button
                                onClick={handleSubmit(onSubmit)}
                                type="button"
                                className="btn btn-primary"
                                data-dismiss="modal"
                            >
                                Submit
                </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Question Description</th>
                    <th scope="col">Event ID</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {items.map((quesDetails) => (
                    <tr key={quesDetails.id}>
                        <th scope="row">{quesDetails.id}</th>
                        <td>{quesDetails.question_description}</td>
                        <td>{quesDetails.event_id}</td>
                        <td>
                            <button
                                className="btn btn-outline-danger"
                                onClick={() => deleteQuestion(quesDetails.id)}
                            >
                                Delete
                </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>);
}

export default Questions;
