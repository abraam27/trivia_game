import "../styles/styles.css";
import {axios} from "axios";
import {useState, useEffect} from 'react';

const Question = () => {
    const [question,setQuestion] = useState("");
    const [answer,setAnswer] = useState("");
    const [userAnswer,setUserAnswer] = useState({answer:""});
    const [results, setResults] = useState(0);
    const [emptyField, setEmptyField] = useState(false);
    useEffect(() => {
        axios.get('https://opentdb.com/api.php?amount=1').then((res)=>{
            setQuestion(res.data.results[0].question);
            setAnswer(res.data.results[0].correct_answer);
        });
    },[]);
    

    const handleChange=(e)=>{
        const {value,name}=e.target;
        if(!value) setEmptyField(true);
        else setEmptyField(false);
        setUserAnswer((oldData)=>({...oldData,[name]:value }))
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(userAnswer.answer === ""){
            setEmptyField(true);
        }else{
            if(userAnswer.answer.toLowerCase() === answer.toLowerCase()){
                setResults(1)
            }else{
                setResults(2)
            }
            setTimeout(async () => {
                await axios.get('https://opentdb.com/api.php?amount=1').then((res)=>{
                    setQuestion(res.data.results[0].question);
                    setAnswer(res.data.results[0].correct_answer);
                    setUserAnswer({answer:""});
                    setResults(0);
                });
                
            }, 3000);
        }
    }
    return (
        <div class="form-style">
            <h1>{question}</h1>
            <form onSubmit={handleSubmit}>
                <input data-testid="answerField" type="text" name="answer" placeholder="Enter Your Answer" value={userAnswer.answer} onChange={handleChange}></input>
                {(emptyField) && (
                    <div className="empty-field">Please write your answer</div>
                )}
                <input data-testid="submit" type="submit" value="Submit" />
            </form>
            {(results === 1) && (
                <div className="correct-answer">The Correct Answer</div>
            )}
            {(results === 2) && (
                <div className="wrong-answer">This is the wrong answer. The Correct Answer is {answer}</div>
            )}
        </div>
    );
};

export default Question;