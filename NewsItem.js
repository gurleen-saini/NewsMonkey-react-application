import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props
        return ( <
            div className = "card my-3" >
            <
            div style = {
                {
                    display: "flex",
                    justifyContent: "flex-end",
                    position: "absolute",
                    right: "0"
                }
            } >
            <
            span className = "badge rounded-pill bg-danger" > { source } < /span> < /
            div > <
            img src = { imageUrl ? imageUrl : "https://i.insider.com/65cf8eb76fcb546d2d50b340?width=1200&format=jpeg" }
            className = "card-img-top"
            alt = "..." / >
            <
            div className = "card-body" >
            <
            h5 className = "card-title" > { title } < /h5> <
            p className = "card-text" > { description } < /p> <
            p className = "card-text" > < small className = "text-body-secondary" > By { author ? author : "Unknown" }
            on { new Date(date).toGMTString() } < /small></p >
            <
            a href = { newsUrl }
            target = "_blank"
            rel = "noreferrer noopener"
            className = "btn btn-sm btn-dark" > Read More < /a> < /
            div > <
            /div>
        )
    }
}

export default NewsItem