import React, {Component} from 'react'


class MemeGenerator extends Component {
  constructor() {
    super()
    this.state={
      topText : "",
      bottomText : "",
      randomImg : "http://i.imgflip.com/1bij.jpg",
      allMemeImgs : []
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // https://api.imgflip.com/get_memes
  componentDidMount() {
    const url = "https://api.imgflip.com/get_memes"
    fetch(url)
      .then(response => response.json())
      .then(response => {
        const {memes} = response.data
        this.setState({
          allMemeImgs : memes
        })
      })
  }

  handleChange(event) {
    const {name, value} = event.target

    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault()

    const imgArray = this.state.allMemeImgs
    // Math.floor(Math.random() * 100); returns a random integer from 0 to 99
    const randomIndex = Math.floor(Math.random() * imgArray.length)

    this.setState({
      randomImg: imgArray[randomIndex].url
    })
    
  }

  render() { 
    return (
      <div>
        <form className="meme-form" onSubmit={this.handleSubmit}>
          <input 
            type="text"
            name="topText"
            value={this.state.topText}
            onChange={this.handleChange}
            placeholder="put your top text here"
          />

          <input 
            type="text"
            name="bottomText"
            value={this.state.bottomText}
            onChange={this.handleChange}
            placeholder="put your bottom text here"
          />
          <button>Gen</button>
        </form>
        <div className="meme">
          <img src={this.state.randomImg} alt="" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>


      </div>
    )
  }
}

export default MemeGenerator