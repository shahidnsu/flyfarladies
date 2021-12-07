import React from 'react'
import { Container, Row ,Col} from 'react-bootstrap'
import playButton from '../assets/images/play-buttton.svg'
import '../assets/style/Videosection.css'

export default function Videosection() {
    return (
        <div>
        <Container fluid>
            <Row className="mt-5">
                <Col className="video-section">

                <div className="video-container">

   <a href ="https://www.youtube.com/watch?v=4fJtLT4DDYE&ab_channel=FlyFarLadies" className="video-button videobutton" >
    <img src={playButton} alt="flyfar-video" />
</a>
<h2 className="heading">Watch Video</h2>
</div>

                </Col>
            </Row>
        </Container>
            
        </div>
    )
}
