import React from 'react';

class Score extends React.Component () {
    constructor(props) {
        super(props);
        this.state = {
            CurrentScore: 0,
            TopScore:0
        };
    }    

componentDidMount() {

}

componentWillUnmount() {

}

render(){
    return (
        // <Navbar.Text> Score: {this.state.CurrentScore} Top Score: {this.state.TopScore} </Navbar.Text>
        <p>text</p>
    );
}
}

export default Score