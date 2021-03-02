import  { Component } from 'react'
import './App.css';

export default class Scroll extends Component {
  constructor(props) {
      super(props);
      this.state = {
          top:0,
          time:null
      }
  }


  componentDidMount() {
   this.changeAnim();
  }

  componentWillUnmount() {
    let { time } = this.state;
    clearInterval(time);
  }


  changeAnim = () => {
    let { top,time } = this.state;
    let {  noticeList } = this.props;
      
    time = setInterval(() => {
                this.setState({ top:top-- })
                if(top < -(26*noticeList.length)){
                    top = 0; 
                }
            }, 100);
    this.setState({ time:time })        
  }

  setHover = (b) => {
    let { time } = this.state;
    if(b){
        clearInterval(time);  
    }else{
        this.changeAnim();
    } 
  }


  render() {
      const { top } = this.state;
      const {  noticeList } = this.props;
      return (
          <div className="scrollPage">
              <div  className="scroll" 
                    onMouseOver={()=>this.setHover(true)}
                    onMouseOut={()=>this.setHover(false)}>
                  <ul style={{marginTop:top}}>
                      {
                          noticeList.map((item, index) => {
                              return <li key={index}>{item.text}</li>
                          })
                      }
                  </ul>
                  <ul >
                      {
                          noticeList.map((item, index) => {
                              return <li key={index}>{item.text}</li>
                          })
                      }
                  </ul>
              </div>
          </div>
      )
  }

}

