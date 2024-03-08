import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Container, Form } from "react-bootstrap";


class AllTheBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterPrice: "",
      filterTitle: "",
      filterCategory: "",
      hoveredIndex: -1,
    };
  }

  handleFilterPriceChange = (event) => {
    const { value } = event.target;
    this.setState({ filterPrice: value });
  };

  handleFilterTitleChange = (event) => {
    const { value } = event.target;
    this.setState({ filterTitle: value });
  };

  handleFilterCategoryChange = (event) => {
    const { value } = event.target;
    this.setState({ filterCategory: value });
  };


  applyFilters = (books) => {
    const { filterPrice, filterTitle, filterCategory } = this.state;

    let filteredBooks = books;

    if (filterPrice !== "") {
      filteredBooks = filteredBooks.filter(
        (book) => parseFloat(book.price) <= parseFloat(filterPrice)
      );
    }

    if (filterTitle !== "") {
      filteredBooks = filteredBooks.filter(
        (book) =>
          book.title.toLowerCase().includes(filterTitle.toLowerCase())
      );
    }

    if (filterCategory !== "") {
      filteredBooks = filteredBooks.filter(
        (book) => book.category.toLowerCase() === filterCategory.toLowerCase()
      );
    }

    return filteredBooks;
  };

  render() {
    const { filterPrice, filterTitle, filterCategory } = this.state;

    const filteredHorror = this.applyFilters(horror);
    const filteredFantasy = this.applyFilters(fantasy);
    const filteredRomance = this.applyFilters(romance);
    const filteredHistory = this.applyFilters(history);


    return (
      <Container>
        <div>
        <Form className="text-center mb-5">
          <Row md={3}>

            {/* filtro del prezzo */}

          <Form.Group controlId="filterPrice">
            <Form.Label>Filtra per prezzo:</Form.Label>
            <Form.Control
              as="select"
              value={filterPrice}
              onChange={this.handleFilterPriceChange}
            >
              <option value="">Tutti i prezzi</option>
              <option value="5">5€</option>
              <option value="10">10€</option>
              <option value="20">20€</option>
            </Form.Control>
          </Form.Group>

            {/* filtro del titolo */}

          <Form.Group controlId="filterTitle">
            <Form.Label>Filtra per titolo:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Inserisci il titolo"
              value={filterTitle}
              onChange={this.handleFilterTitleChange}
            />
          </Form.Group>

            {/* filtro della categoria */}

          <Form.Group controlId="filterCategory">
            <Form.Label>Filtra per categoria:</Form.Label>
            <Form.Control
              as="select"
              value={filterCategory}
              onChange={this.handleFilterCategoryChange}
            >
              <option value="">Tutte le categorie</option>
              <option value="horror">Horror</option>
              <option value="romance">Romance</option>
              <option value="fantasy">Fantasy</option>
              <option value="history">History</option>

              {/* Aggiungi altre opzioni a seconda delle tue categorie */}
            </Form.Control>
          </Form.Group>
          </Row>
        </Form>
        </div>


            {/* libri fantasy */}
          <h1 className="my-5 bg-secondary">Fantasy Books</h1>
        <Row md={4}>
          {filteredFantasy.map((book, index) => (
            <Col key={index} >
              <Card className="bg-success m-1" style={{ height: '30rem' }} >
                <Card.Body className="d-flex flex-column">
                  <Card.Img variant="bottom" src={book.img} alt="Book cover"  style={{ height: '15rem' }}/>
                  <h5 className="mt-3">{book.title}</h5>
                  <p>
                    <Button variant="dark">{book.price}€</Button>
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

            {/* libri history */}
            
        <h1 className="my-5 bg-secondary">History Books</h1>
        <Row md={4}>
          {filteredHistory.map((book, index) => (
            <Col key={index}>
             <Card className="bg-warning m-1" style={{ height: '30rem' }}>
                <Card.Body className="d-flex flex-column">
                  <Card.Img variant="bottom" src={book.img} alt="Book cover"  style={{ height: '15rem' }}/>
                  <h5 className="mt-3">{book.title}</h5>
                  <p>
                    <Button variant="dark">{book.price}€</Button>
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

            {/* libri horror */}
        
        <h1 className="my-5 bg-secondary">Horror Books</h1>
        <Row md={4}>
          {filteredHorror.map((book, index) => (
            <Col key={index}>
              <Card className="bg-danger m-1 border-danger" style={{ height: '30rem' }}>
                <Card.Body className="d-flex flex-column">
                  <Card.Img variant="bottom" src={book.img} alt="Book cover"  style={{ height: '15rem' }}/>
                  <h5 className="mt-3">{book.title}</h5>
                  <p>
                    <Button variant="dark">{book.price}€</Button>
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

            {/* libri romance */}

        <h1 className="my-5 bg-secondary">Romance Books</h1>
        <Row md={4}>
          {filteredRomance.map((book, index) => (
            <Col key={index}>
              <Card className="bg-info m-1 border-primary" style={{ height: '30rem' }}>
                <Card.Body className="d-flex flex-column">
                  <Card.Img variant="bottom" src={book.img} alt="Book cover"  style={{ height: '15rem' }}/>
                  <h5 className="mt-3">{book.title}</h5>
                  <p>
                    <Button variant="dark">{book.price}€</Button>
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
