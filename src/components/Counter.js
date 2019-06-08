import React from 'react';
import Navbar from 'react-bootstrap/Navbar'

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        score: 0,
        TopScore: 0 };
  }

  render() {
    return (
    <Navbar.Text style={navCounter}>  
    Score: {this.state.score} 
    Top Score: {this.state.TopScore} 
    </Navbar.Text>);
  }

  componentDidMount() {
     this.setState({ score: this.props.score});
     this.setState({ TopScore: this.props.TopScore});
  }

  componentDidUpdate() {
      
  }
  
}
const navCounter = {
  margin:'0 auto',
  float: 'none'

}
export default Counter;
