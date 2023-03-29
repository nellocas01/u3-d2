import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import books from '../data/horror.json';


class AllTheBooks extends Component {
    render(){
  return (
    <>
    <Card className="d-flex">
        <Card.Body>
              {books.map((dish, index) => (
          <Card.Text>
                    <Card.Img variant="bottom" src={dish.img} alt="First slide" style={{ height: 70, width: 70}} />
            
                <h3>{dish.title}</h3>
                <p>
                      <Badge bg="dark">{dish.price}€</Badge>
                    </p>
                    
          </Card.Text>
              
              ))};
              </Card.Body>
          </Card>
          </>
  )
              }
}
export default AllTheBooks 
