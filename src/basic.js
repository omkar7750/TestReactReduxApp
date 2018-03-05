/*class Something extends React.Component{

  render(){
    console.log("render invoked.");
    return (<div>{"I will render."}</div>);
  }
}

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      init:0
    };
  }

  render(){
    return <MuiThemeProvider>
        <Button onClick={()=>this.setState({init:++this.state.init})} >lauda lassan</Button>
        <Something />
      </MuiThemeProvider>
  }
}*/

/*import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}*/


/*class Popup extends Component{
  state = {isOpen: this.props.isOpen||false}
  render = () => (

    <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          
          onClose={() => this.setState({isOpen: false})}
          open={this.props.isOpen || this.state.isOpen}>
      
      <Button onClick = {() =>this.setState({isOpen:!this.props.isOpen})} > close  </Button>
    </Modal>
    )
  
}*/

/*class ContentComponent extends Component{
  state = {openPopup: false}
  componentWillMount = (props) => {
    console.log('componentWillMount ', props);
  }

  componentDidMount = (props) => {
    console.log('componentDidMount ', props);
  }

  componentWillUpdate = (props) => {
    console.log('componentWillUpdate ', props);
  }

  componentDidUpdate = (props) => {
    console.log('componentDidUpdate ', props);
  }

  componentWillUnMount = (props) => {
    console.log('componentWillUnMount ', props);
  }

  componentWillReceiveProps = (props) => {
    console.log('componentWillReceiveProps ', props);
  }

  componentShouldUpdate = () => {
    return true;
  }

  render = () => (
    <div>
      <FormLabel>Number:</FormLabel>
      <div>{this.props.num}</div>
      <Popup isOpen={this.props.num}/>
    </div>
    );
  
}*/

/*class App extends Component{
  state = {number : false};
  increamentNum = (props) => {
    console.log('change state : ', props);
    this.setState({number: !this.state.number});
  }
  render = () => (
    <MuiThemeProvider>
        <ContentComponent num={this.state.number} />
        <Button onClick = {this.increamentNum}>change state:</Button>      
    </MuiThemeProvider>
    );
  
}*/
//_______________________________________________________________________

//trying material ui

/*class App extends Component{
  state = {isOpen : false};
  changeState = (props) => {
    console.log('change state : ', props);
    this.setState({isOpen: !this.state.isOpen});
  }
  render = () => (
    <MuiThemeProvider >
      <div>
        <Button onClick = {this.changeState}>Click me</Button>
        <Modal aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description" open={this.state.isOpen}>
          <div>
              <FormLabel> Hi this is modal...</FormLabel>
              <Button onClick = {this.changeState}></Button>
          </div>
        </Modal>
        </div>
    </MuiThemeProvider>
    );
  
}*/

//___________________________________________________________________________
