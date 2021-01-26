import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import axios from "axios";
import {Redirect} from "react-router-dom";

const SurveyForm = ({match}) => {
    const [qlist, setQlist] = useState([]);
    const {register, handleSubmit, reset} = useForm();
    useEffect(() => {
        const fetchedItems = async () => {
            const res = await axios.get("http://localhost:8989/questions/");
            console.log(res.data);
            const dat = res.data;
            let filtered = dat.filter((el) => el.event_id == match.params.id);

            setQlist(filtered);
        }
        fetchedItems();
    }, []);

    const onSubmit = async (data) => {
        let i;
        for (i in data) {
            const response_result = {
                "user_id": 1,
                "event_id": parseInt(match.params.id),
                "question_id": parseInt(i),
                "user_response": data[i],
                "response_date": new Date(Date.now()).toLocaleString('en-GB', {timeZone: 'UTC'})
            };
            console.log("before stringify", response_result);
            const result = await axios.post("http://localhost:8989/response/", response_result);
            console.log(result);
        }
        reset({});
        return <Redirect to="/home" />;
    }
    return (
        <div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {qlist.map((ques) => (

                        <div key={ques.id} className="form-group">
                            <label>{ques.question_description}</label>
                            <input key={ques.id} className="form-control" name={ques.id} ref={register} type="text" />
                        </div>

                    ))}
                    <button className="btn btn-outline-primary my-2" type="submit"
                    > Submit</button>
                </form>
            </div>
        </div>
    );
}

export default SurveyForm;
