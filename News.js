import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {

    // articles =  [
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "CNBC"
    //         },
    //         "author": "Elliot Smith",
    //         "title": "Jeep, Dodge-maker Stellantis' profit slides as Detroit Three strikes bite - CNBC",
    //         "description": "Stellantis reported a 10% annual decline in adjusted operating profit in the second half of 2023, as six-week strikes at the \"Detroit Three\" automakers hampered production.",
    //         "url": "https://www.cnbc.com/2024/02/15/jeep-dodge-maker-stellantis-profit-slides-as-detroit-three-strikes-bite.html",
    //         "urlToImage": "https://image.cnbcfm.com/api/v1/image/107302950-1695130024060-gettyimages-1675094763-29uawtoledorice.jpeg?v=1695130092&w=1920&h=1080",
    //         "publishedAt": "2024-02-15T10:59:52Z",
    //         "content": "Global auto giant Stellantis on Thursday reported a 10% year-on-year fall in profit in the second half of 2023, as six-week strikes at the so-called \"Detroit Three\" automakers hampered production in … [+2534 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "The Athletic"
    //         },
    //         "author": "Shams Charania and James L. Edwards III",
    //         "title": "Pistons’ Isaiah Stewart arrested after punching Suns’ Drew Eubanks - The Athletic",
    //         "description": "It's unclear what sparked the altercation.",
    //         "url": "https://theathletic.com/5276718/2024/02/14/isaiah-stewart-drew-eubanks-punch-pistons-suns/",
    //         "urlToImage": "https://cdn.theathletic.com/app/uploads/2024/02/14194312/GettyImages-1950961265-scaled.jpg",
    //         "publishedAt": "2024-02-15T10:53:43Z",
    //         "content": "Detroit Pistons power forward Isaiah Stewart punched Phoenix Suns power forward Drew Eubanks in the face in a Footprint Center parking lot before the Suns 116-100 win over the Pistons on Wednesday, l… [+2721 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "reuters",
    //             "name": "Reuters"
    //         },
    //         "author": "Tim Hepher",
    //         "title": "Airbus plans special dividend, takes new space charge - Reuters",
    //         "description": "Europe's Airbus unveiled a special dividend on Thursday after posting higher 2023 results, buoyed by resurgent demand for jetliners and despite a fresh charge of 200 million euros ($215 million) at its troubled Space business.",
    //         "url": "https://www.reuters.com/business/aerospace-defense/airbus-plans-special-dividend-takes-new-space-charge-2024-02-15/",
    //         "urlToImage": "https://www.reuters.com/resizer/Rvtou_7Gn3fxK1lOv0bZAnkxWGc=/1920x1005/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/GTIB6L6TKBJOHFU6PGIEIVVTXM.jpg",
    //         "publishedAt": "2024-02-15T10:27:00Z",
    //         "content": null
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "BBC News"
    //         },
    //         "author": null,
    //         "title": "Fani Willis: Judge considers removing Georgia attorney from Trump case - BBC.com",
    //         "description": "A defendant has accused Ms Willis of an improper romantic relationship with a prosecutor she hired.",
    //         "url": "https://www.bbc.com/news/world-us-canada-68300224",
    //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/3E3F/production/_132653951_gettyimages-1795064799.jpg",
    //         "publishedAt": "2024-02-15T10:04:03Z",
    //         "content": "By Madeline HalpertBBC News, New York\r\nFani Willis has admitted to a personal relationship with Nathan Wade (middle) a prosecutor she hired for the Trump case\r\nA judge will weigh misconduct allegatio… [+3386 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "cnn",
    //             "name": "CNN"
    //         },
    //         "author": "Jeremy Herb, Lauren del Valle, Kara Scannell",
    //         "title": "What to watch for at Trump’s New York hush money hearing - CNN",
    //         "description": "A date for Donald Trump’s first criminal trial could be set Thursday at a pre-trial hearing in the former president’s New York criminal hush money case.",
    //         "url": "https://www.cnn.com/2024/02/15/politics/new-york-trump-hearing/index.html",
    //         "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/240209202431-donald-trump-harrisburg-pennsylvania-february-9-2024-for-video.jpg?c=16x9&q=w_800,c_fill",
    //         "publishedAt": "2024-02-15T10:00:00Z",
    //         "content": "A date for Donald Trumps first criminal trial could be set Thursday at a pre-trial hearing in the former presidents New York criminal hush money case.\r\nTrump is expected to attend the hearing in down… [+8620 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "abc-news",
    //             "name": "ABC News"
    //         },
    //         "author": "Jolie Lash, Victoria Arancio, Morgan Winsor",
    //         "title": "Mass shooting at Kansas City Chiefs' Super Bowl celebration claims life of local radio DJ - ABC News",
    //         "description": "Lisa Lopez-Galvan, 44, was a radio DJ and a mother of two.",
    //         "url": "https://abcnews.go.com/US/kansas-city-radio-station-confirms-death-dj-lisa/story?id=107248321",
    //         "urlToImage": "https://i.abcnewsfe.com/a/fb7fbe91-efaf-4c7b-b814-5e82a0258453/lisa-lopez-galvan-01-ht-jt-240214_1707962355015_hpMain_2_16x9.jpg?w=1600",
    //         "publishedAt": "2024-02-15T09:32:12Z",
    //         "content": "The person who lost their life in Wednesday's mass shooting in Kansas City, Missouri, has been identified by colleagues and family as Lisa Lopez-Galvan, a 44-year-old radio DJ and mother of two.\r\nAno… [+1872 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "the-washington-post",
    //             "name": "The Washington Post"
    //         },
    //         "author": "Christian Davenport",
    //         "title": "SpaceX launches Intuitive Machines lunar lander on its first moon mission - The Washington Post",
    //         "description": "The soft lunar landing set for Feb. 22 would be the first by a commercial entity, and the first for the United States since the final Apollo mission in 1972.",
    //         "url": "https://www.washingtonpost.com/technology/2024/02/15/intuitive-machines-lunar-lander-launch-spacex/",
    //         "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/02-15-2024/t_456d397762994658b9a43c041c02742c_name_falcon.jpg&w=1440",
    //         "publishedAt": "2024-02-15T09:18:00Z",
    //         "content": "A SpaceX Falcon 9 rocket launched a robotic spacecraft to the moon early Thursday, setting up a landing on Feb. 22, which if successful would be the first soft landing on the moon for the United Stat… [+4879 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "DW (English)"
    //         },
    //         "author": "Deutsche Welle",
    //         "title": "US: Volkswagen cars stuck in ports over banned part — report - DW (English)",
    //         "description": "Thousands of vehicles shipped by Volkswagen — including Porches and Bentleys — have been held up at US ports over a Chinese-made component, according to the Financial Times.",
    //         "url": "https://www.dw.com/en/us-volkswagen-cars-stuck-in-ports-over-banned-part-report/a-68261148",
    //         "urlToImage": "https://static.dw.com/image/56618812_6.jpg",
    //         "publishedAt": "2024-02-15T09:14:10Z",
    //         "content": "German carmaker Volkswagen (VW) on Wednesday said there had been a hold-up in the delivery of certain models to the US market over issues related to a car part which according to a Financial Times (F… [+2748 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "associated-press",
    //             "name": "Associated Press"
    //         },
    //         "author": "VICTORIA MILKO",
    //         "title": "Prabowo Subianto: What you need to know about the new Indonesia president - The Associated Press",
    //         "description": "A wealthy ex-general with ties to both Indonesia’s popular outgoing president and its dictatorial past looks set to be its next leader. He’s promised to continue the outgoing president’s widely popular policies, but his human rights record has activists and s…",
    //         "url": "https://apnews.com/article/prabowo-subianto-indonesia-election-general-dfd2cf2d8f25629d3f2dcb96fa7621a7",
    //         "urlToImage": "https://dims.apnews.com/dims4/default/27d8a5b/2147483647/strip/true/crop/3533x1987+0+184/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F35%2F03%2Fedc9ae4956f1154a80f12936bf7c%2Fe3f330cdcf824feb9a12006ec8cc5f87",
    //         "publishedAt": "2024-02-15T08:19:00Z",
    //         "content": "JAKARTA, Indonesia (AP) A wealthy ex-general with ties to both Indonesias popular outgoing president and its dictatorial past looks set to be its next leader. Hes promised to continue the outgoing pr… [+8595 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "abc-news",
    //             "name": "ABC News"
    //         },
    //         "author": "Soo Rin Kim, Gabriella Abdul-Hakim, Lalee Ibssa",
    //         "title": "Trump calls Putin's comment that he prefers Biden over Trump a 'great compliment' - ABC News",
    //         "description": "“But we will work with any U.S. leader whom the American people trust.”",
    //         "url": "https://abcnews.go.com/Politics/trump-calls-putins-comment-prefers-biden-trump-great/story?id=107251595",
    //         "urlToImage": "https://i.abcnewsfe.com/a/d3abd72a-36f3-44c1-b384-838f0ae3ad6b/trump021424_1707974383249_hpMain_16x9.jpg?w=1600",
    //         "publishedAt": "2024-02-15T07:07:16Z",
    //         "content": "Former President Donald Trump reacted to Russian President Vladimir Putin saying he prefers President Joe Biden over Trump because Biden is more experienced and more predictable, is a great complimen… [+3844 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "YouTube"
    //         },
    //         "author": null,
    //         "title": "Anthony Davis GOES OFF & Rui Hachimura Drops CAREER-HIGH In Lakers W! 🔥| February 14, 2024 - NBA",
    //         "description": "Never miss a moment with the latest news, trending stories and highlights to bring you closer to your favorite players and teams.Download now: https://link.n...",
    //         "url": "https://www.youtube.com/watch?v=-UsytNoHXxw",
    //         "urlToImage": "https://i.ytimg.com/vi/-UsytNoHXxw/maxresdefault.jpg",
    //         "publishedAt": "2024-02-15T05:14:51Z",
    //         "content": null
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "WDIV ClickOnDetroit"
    //         },
    //         "author": "Kim Adams",
    //         "title": "Here are scenarios for Thursday's winter snowstorm in Metro Detroit - WDIV ClickOnDetroit",
    //         "description": "Where you live and where you are headed are the two key questions regarding what kind of drive you will have on Thursday morning.",
    //         "url": "https://www.clickondetroit.com/weather/2024/02/15/here-are-scenarios-for-thursdays-winter-snowstorm-in-metro-detroit/",
    //         "urlToImage": "https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_thumb,w_700/v1/media/gmg/UKHORVQL75AWNFE5NVYM2QRDHA.png?_a=ATAPphC0",
    //         "publishedAt": "2024-02-15T04:30:24Z",
    //         "content": "4Warn Weather Where you live and where you are headed are the two key questions regarding what kind of drive you will have on Thursday morning.\r\nHeres a breakdown:\r\n<ul><li>\r\n6 a.m. - 8 a.m. Snow arr… [+1220 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "the-washington-post",
    //             "name": "The Washington Post"
    //         },
    //         "author": "Mark Maske",
    //         "title": "In wake of Super Bowl loss, 49ers fire Steve Wilks as defensive coordinator - The Washington Post",
    //         "description": "Coach Kyle Shanahan announced three days after the 49ers’ Super Bowl loss to the Chiefs that he fired defensive coordinator Steve Wilks, who lasted only one season.",
    //         "url": "https://www.washingtonpost.com/sports/2024/02/14/49ers-fire-steve-wilks-defensive-coordinator/",
    //         "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/37RDZPDF2JJCFHR7JRCJGMTCYY_size-normalized.jpg&w=1440",
    //         "publishedAt": "2024-02-15T04:29:00Z",
    //         "content": "The San Francisco 49ers have come close excruciatingly close in recent seasons to recapturing the franchises glorious past. Their most agonizing near miss occurred Sunday in Las Vegas, where it took … [+5525 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Page Six"
    //         },
    //         "author": "Vanessa Serna",
    //         "title": "Larsa Pippen and Marcus Jordan reunite for Valentine's Day outing at Miami flower shop after split - Page Six",
    //         "description": "The “RHOM” star and Michael Jordan’s son spent Valentine’s Day together after calling it quits days before due to ongoing “tension” in their relationship.",
    //         "url": "https://pagesix.com/2024/02/14/entertainment/larsa-pippen-and-marcus-jordan-reunite-for-valentines-day-outing-at-miami-flower-shop-after-split/",
    //         "urlToImage": "https://pagesix.com/wp-content/uploads/sites/3/2024/02/76547889.jpg?quality=75&strip=all&w=1024",
    //         "publishedAt": "2024-02-15T03:58:00Z",
    //         "content": "Larsa Pippen and Marcus Jordan appear to be working through their troubles as they were spotted together on Valentine’s Day.\r\nPictures obtained by TMZ showed the “Real Housewives of Miami” star and t… [+2097 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Push Square"
    //         },
    //         "author": "Sammy Barker",
    //         "title": "PS5 Is Entering the 'Latter Half of Its Life Cycle', Says Sony - Push Square",
    //         "description": "Manufacturer expecting a gradual decline in hardware sales",
    //         "url": "https://www.pushsquare.com/news/2024/02/ps5-is-entering-the-latter-half-of-its-life-cycle-says-sony",
    //         "urlToImage": "https://images.pushsquare.com/c04ba965daa12/1280x720.jpg",
    //         "publishedAt": "2024-02-15T03:30:00Z",
    //         "content": "Image: Push Square\r\nWe dont know about you, but it feels like the PS5 has barely broken a sweat yet. Despite being over three years old, the systems lifespan has been hugely impacted by the pandemic,… [+2068 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Fox Business"
    //         },
    //         "author": "Eric Revell",
    //         "title": "Elon Musk moves SpaceX to Texas after Delaware revoked his Tesla salary package - Fox Business",
    //         "description": "SpaceX CEO Elon Musk announced that the company completed the conversion of its state of incorporation from Delaware to Texas after a Delaware court struck down his Tesla pay package.",
    //         "url": "https://www.foxbusiness.com/markets/elon-musk-moves-spacex-texas-after-delaware-revoked-tesla-salary-package",
    //         "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2024/02/0/0/Elon-Musk-Celebration.jpg?ve=1&tl=1",
    //         "publishedAt": "2024-02-15T02:55:00Z",
    //         "content": "SpaceX CEO Elon Musk\r\n announced Wednesday night that the company converted its registration state from Delaware to Texas after a court in Delaware struck down his massive compensation package at Tes… [+2911 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "KATU"
    //         },
    //         "author": "Emily Girsch, KATU Staff",
    //         "title": "Multnomah County declares state of emergency, opens severe weather shelters - KATU",
    //         "description": "Multnomah County Chair Jessica Vega Pederson will declare a state of emergency effective at 6 p.m.The county says they will be opening severe weather shelters",
    //         "url": "https://katu.com/news/local/mult-co-chair-vega-pederson-to-declare-state-of-emergency-for-potential-snow-multnomah-county",
    //         "urlToImage": "https://katu.com/resources/media/fca06f7d-86d9-4805-81a0-b300238f64ad-large16x9_MultnomahCountywintershelter1.JPG?1637370592641",
    //         "publishedAt": "2024-02-15T02:26:15Z",
    //         "content": "PORTLAND, Ore. (KATU) Multnomah County on Wednesday declared a state of emergency due to the National Weather Service forecasting up to three inches of snow overnight in the Portland area.\r\nThe count… [+2425 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "cnn",
    //             "name": "CNN"
    //         },
    //         "author": "John Fritze",
    //         "title": "Special counsel urges Supreme Court to deny Trump’s request for delay in immunity case - CNN",
    //         "description": "Special counsel Jack Smith pressed the Supreme Court on Wednesday to let stand a lower court ruling that denied former President Donald Trump immunity from prosecution, urging the justices to allow the trial in his election subversion case to begin quickly.",
    //         "url": "https://www.cnn.com/2024/02/14/politics/special-counsel-supreme-court-trump-response/index.html",
    //         "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/240116094248-supreme-court-building-washington-dc-01-04-2024.jpg?c=16x9&q=w_800,c_fill",
    //         "publishedAt": "2024-02-15T01:14:00Z",
    //         "content": "Special counsel Jack Smith pressed the Supreme Court on Wednesday to let stand a lower court ruling that denied former President Donald Trump immunity from prosecution, urging the justices to allow t… [+2923 chars]"
    //     }
    // ]

    static defaultProps = {
        country: "in",
        pageSize: 8,
        category: "general"
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor() {
        super();
        console.log("hi i am a news constructor")
        this.state = {
                // articles: this.articles,
                articles: [],
                loading: false,
                page: 1
            }
            // document.title = `${this.props.category} - NewsMonkey`;
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
        this.props.setProgress(10);
        this.setState({ loading: true })
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json()
        this.props.setProgress(50);
        console.log(parsedData);
        this.props.setProgress(70);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
        this.props.setProgress(100);
    }

    handlePrevClick = async() => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            page: this.state.page - 1,
            loading: false
        })
    }

    handleNextClick = async() => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            page: this.state.page + 1,
            loading: false
        })
    }

    fetchMoreData = async() => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            page: this.state.page + 1,
            loading: false
        })
    }

    render() {
        return ( <
                >
                <
                h1 className = 'text-center'
                style = {
                    { marginTop: "70px" }
                } > NewsMonkey - Top Headlines < /h1> { this.state.loading && < Loading / >
            } <
            InfiniteScroll dataLength = { this.state.articles.length }
        next = { this.fetchMoreData }
        hasMore = { this.state.articles.length !== this.state.totalResults }
        loader = { < Loading / > } >
            <
            div className = "container" >
            <
            div className = "row my-3" > {
                this.state.articles.map((element) => {
                    return <div className = "col-md-4"
                    key = { element.urlToImage } >
                        <
                        NewsItem title = { element.title }
                    description = { element.description }
                    imageUrl = { element.urlToImage }
                    newsUrl = { element.url }
                    author = { element.author }
                    date = { element.publishedAt }
                    source = { element.source.name }
                    />    < /
                    div >

                })
            } <
            /div>  < /
            div > <
            /InfiniteScroll> < /
            >
    )
}
}

export default News