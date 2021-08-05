import React from "react";
import "./Main.css";
import quotes from './quotes';

class Main extends React.Component {
	
	initialState = {
    quote: quotes[0].quote,
    author: quotes[0].author,
  };

  constructor(props){
    super(props);

    this.state = {
      ...this.initialState
  	};
	};

  texts = {
  	newQuote: "New Quote",
  	tweetit: "Tweet it!"
  };  

  //generate random quotes
  handleChangeQuote = (arr) => {
    //get random numbers
    let num = Math.floor(Math.random() * quotes.length)

    let newQuote = quotes[num];

    //update state
    this.setState({
      quote: newQuote.quote,
      author: newQuote.author
    })

  };

	render() {
		return (
			<div id="box">
				<div id="quote-box">
					<div id="text">
						<span><i className="fa fa-quote-left quote"></i><b>{this.state.quote}</b></span>
					</div>
					<div id="author">
						{this.state.author}
					</div>
					<div id="buttons">
						<div className="btn-twitter">
							<button id="tweet-quote"  onClick={() => {
								window.open('https://twitter.com/intent/tweet/?text=' + encodeURIComponent(this.state.quote + '--' + this.state.author))
                    }}><i className="fa fa-twitter"></i> {this.texts.tweetit}</button>
						</div>
						<div className="btn-quote">	
							<button id="new-quote" onClick={this.handleChangeQuote}>{this.texts.newQuote}</button>
						</div>	
					</div>

				</div>

			</div>
		)
	}
}

export default Main;