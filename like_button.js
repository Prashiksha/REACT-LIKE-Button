'use strict';                                 //For browser support. //Earlier java versions ignore it. 
                                              //Execute the code in STRICT MODE (can not use undeclared variables.)
                                              //Use in the starting of script for global scope.
                                              
const e = React.createElement;                //using const so that variable would not be able to get reassigned
                                              //else use 'let'

class LikeButton extends React.Component {    // LikeButton -> Childclass //React.Component -> Parentclass
                                              // LikeButton is a React Component class or RC type
  
  constructor() {                             //used to initialise state and bind methods together 
                                              //constructor() is created instantly after instance is created in line 4
  
    super();                                  //super() is called before any other statement. 
                                              //To define this.props.. ie this.state
  
    this.state = { liked: false };            //initialising the value  of state
                                              //Constructor is the only place where this.state is assigned directly. 
                                              //In all other methods need to use this.setState()
  }

  render() {                                  //The only method that REACT compulsarily requires
                                              
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}   //end of class LikeButton

const domContainer = document.querySelector('#like_button_container'); //to target the particular element 

ReactDOM.render(e(LikeButton), domContainer);    //controls the content
                                              


/************************https://reactjs.org/docs/react-component.html****************************/
