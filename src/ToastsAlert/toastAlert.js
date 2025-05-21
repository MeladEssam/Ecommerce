// import React from 'react';
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";
import { useDispatch, useSelector } from "react-redux";
import { updateState } from "../rtk/Toast-slice";

function ToastAlert() {
  //   const [show, setShow] = useState(true);
  let dispatch = useDispatch();
  let show = useSelector((state) => state.toast.status);
  let Message = useSelector((state) => state.toast.message);
  let dangerStatus = useSelector((state) => state.toast.danger);

  return (
    <Row className=" position-fixed bottom-0 pb-3 me-1 end-0">
      <Col>
        <Toast
          onClose={() => dispatch(updateState({ status: false, message: "" }))}
          show={show}
          delay={3000}
          autohide
        >
          <Toast.Header className=" justify-content-end "></Toast.Header>

          {dangerStatus === true ? (
            <Toast.Body className="fs-6 text-danger fw-bold">
              {Message}
            </Toast.Body>
          ) : (
            <Toast.Body className="fs-6 text-primary fw-bold">
              {Message}
            </Toast.Body>
          )}
        </Toast>
      </Col>
    </Row>
  );
}

export default ToastAlert;
