import { Component } from 'react'
import SingleBook from './SingleBook'
import { Col, Container, Form, Row } from 'react-bootstrap'
import CommentArea from './commentsBook/CommentArea'

class BookList extends Component {
  state = {
    searchQuery: '',
    selectedBook: null,
  }

  changeSelectedBook = (asin) => {
    this.setState({
      selectedBook: asin,
    })
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md={10}>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Search a book</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Search here"
                    value={this.state.searchQuery}
                    onChange={(e) =>
                      this.setState({ searchQuery: e.target.value })
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              {this.props.books
                .filter((b) =>
                  b.title.toLowerCase().includes(this.state.searchQuery)
                ).slice(0,8)
                .map((b) => (
                  <Col lg={3} md={4} sm={5} xs={5} key={b.asin}>
                    <SingleBook
                      book={b}
                      selectedBook={this.state.selectedBook}
                      changeSelectedBook={this.changeSelectedBook}
                    />
                  </Col>
                ))}
            </Row>
          </Col>
          <Col md={2}>
            <CommentArea asin={this.state.selectedBook} />
          </Col>
        </Row>
        </Container>
    )
  }
}

export default BookList
