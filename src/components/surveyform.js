import axios from "axios";
import {useEffect, useState} from "react";

const SurveyForm = ({match}) => {
    const [qlist, setQlist] = useState([]);
    useEffect(() => {
        const fetchQuestions = async () => {
            const res = await axios.get(`http://localhost:8989/questions/${match.params.id}`);
            console.log(res.data);
            setQlist(res.data);
        };
        fetchQuestions();
    }, [match]);
    return (<div>
        <h3 className="jumbotron"></h3>
        <form>
            {items.map(
                <div className="form-group">
                    <label>{items.question_description}</label>
                    <input className="form-control" type="text" />
                </div>
            )}

            <button onClick="">Submit</button>
        </form>
    </div>);
}
export default SurveyForm;
