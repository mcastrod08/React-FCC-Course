import React from 'react';
import Badge from "react-bootstrap/Badge";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer"
let marked = require("marked");


export default class App extends React.Component {

  initialState = {
    markdown: ""
  };

  constructor(props) {
    super(props);

    this.state = {
      ...this.initialState
    };
  };

  texts = {
    heading: "Markdown Previewer",
    inputHeading: "Markdown Input",
    previewHeading: "Preview",
    footer: "Maria Castro"
  };


  handleUpdateMarkdown = event => {
    event.persist();

    this.setState(state => {
      return {
        markdown: event.target.value
      };
    });
  };


  render() {
    var appStyle = {
      minHeight: "100vh"
    };

    var inputStyle = {
      width: "400px",
      height: "50vh",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px"
    };

    var outputStyle = {
      width: "400px",
      minHeight: "50vh",
      backgroundColor: "#DCDCDC",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px"
    };

    return (
      <div className="App" style={appStyle}>
      <Navbar/>
      <div className="container">
        <div className="row mt-4">
          <div className="col text-center">
            <h1>
               <Badge className="text-align-center" variant="light">
                {this.texts.heading}
             </Badge>
            </h1>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            <div className="col text-center">
              <h1>
                <Badge className="text-align-center" variant="secondary">
                  {this.texts.inputHeading}
                </Badge>
              </h1>
              <div className="mark-input" style={inputStyle}>
                <textarea 
                  id="editor"
                  className="input" 
                  style={inputStyle}
                  value={this.state.markdown}
                  onChange={this.handleUpdateMarkdown}
                  > </textarea>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="col text-center">
              <h1>
                <Badge className="text-align-center" variant="secondary">
                  {this.texts.previewHeading}
                </Badge>
              </h1>
              <div 
                id="preview"
                style={outputStyle}
                dangerouslySetInnerHTML={{
                  __html: marked(this.state.markdown),
                }}
              >
            
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer name={this.texts.footer}/>
    </div>
    );
  }
}