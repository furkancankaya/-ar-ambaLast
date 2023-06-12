import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Categories from "../categories/Categories";
import Products from "../products/Products";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs="3">
            <Categories />
          </Col>
          <Col xs="9">
            <Products />
          </Col>
        </Row>
      </div>
    );
  }
}
