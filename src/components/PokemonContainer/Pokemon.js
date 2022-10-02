import React from 'react';
import Card from 'react-bootstrap/Card';

const Pokemon = ({ pokemon }) => (
        <>
            <Card className="my-2 text-bg-primary mx-2" style={{ width: '18rem' }}>
                <Card.Img variant="top" />
                <Card.Body>
                    <Card.Title>{pokemon.name}</Card.Title>
                    <Card.Text>
                        {pokemon.url}
                    </Card.Text>
                    
                </Card.Body>
            </Card>
        </>
);

export default Pokemon;