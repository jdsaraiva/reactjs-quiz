import React, {Component} from 'react'
import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component {

    constructor(props){
        super(props);
        this.state = { incorrectAnswer:false };
    }

    handleClick(buttonText){

        if(buttonText === this.props.quiz_question.answer){
            this.setState({incorrectAnswer:false})
            this.props.showNextQuestionHandler()
        }
        else
            this.setState({incorrectAnswer:true})

    }

    render(){
    return (
        <main>
            <section>
                {/* Valores que vem diretamente do Json, através do props */}
                <p>{this.props.quiz_question.instruction_text}</p>
            </section>
            <section className="buttons">
                <ul>
                    {
                        // Vai buscar os valores que estão dentro do array
                        // é importante passar sempre o index para manter a ordem da listagem
                        this.props.quiz_question.answer_options.map((answer_option,index) => {

                            return <QuizQuestionButton key={index} button_text={answer_option}
                            clickHandler={this.handleClick.bind(this)}/>

                        })

                    }

                </ul>
            </section>
            {this.state.incorrectAnswer ? <p className='error'>Sorry, that's not right</p> : null }
        </main>
        )
    }
}

export default QuizQuestion
