import { Container, CardGroup, Card, Button } from "react-bootstrap";
import '../components/public.css';


function publicContent() {

    return (
        <>
            <Container as='div' className='publicContent'>
                <CardGroup>

                    <Card className='card'>
                        <Card.Title className='title'>
                            Cody Jinks
                        </Card.Title>
                        <Card.Subtitle className='mb-2 text-muted text-center'>No Words</Card.Subtitle>
                        <Card.Body>
                            <Card.Text>
                                My whole view of the world has changed<br />
                                I guess that comes with age<br />
                                I don't believe there is good in every man<br />
                                Like I did back then<br /> <br />
                                .....
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className='text-center'>
                            <Button variant='info' href='https://www.youtube.com/watch?v=DOWgL6sX0Gg&list=PLbHSifRxmcwAkAGUtvYrnIwB4P755q4KV&index=19'>Video</Button>
                        </Card.Footer>
                    </Card>

                    <Card className='card'>
                        <Card.Title className='title'>
                            REO Speedwagon
                        </Card.Title>
                        <Card.Subtitle className='mb-2 text-muted text-center'>Don't Let Him Go</Card.Subtitle>
                        <Card.Body>
                            <Card.Text>
                                So you figure that you've got him all figured out<br />
                                He's a sweet talkin' stud<br />
                                Who can melt a girl's heart with his pout<br />
                                He's the kind of lover that the ladies dream about<br />
                                Oh, yes he is<br /><br />
                                .....
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className='text-center'>
                            <Button variant='info' href='https://www.youtube.com/watch?v=B5lBzKGSxNA'>Video</Button>
                        </Card.Footer>
                    </Card>

                    <Card className='card'>
                        <Card.Title className='title'>
                            The Eagles
                        </Card.Title>
                        <Card.Subtitle className='mb-2 text-muted text-center'>Lyin' Eyes</Card.Subtitle>
                        <Card.Body>
                            <Card.Text>
                                City girls just seem to find out early<br />
                                How to open doors with just a smile<br />
                                A rich old man, and she won't have to worry<br />
                                She'll dress up all in lace go in style<br /><br />
                                .....
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className='text-center'>
                            <Button variant='info' href='https://www.youtube.com/watch?v=NtcQjDUWhZs'>Video</Button>
                        </Card.Footer>
                    </Card>

                </CardGroup>
            </Container>
        </>

    )
}

export default publicContent;
