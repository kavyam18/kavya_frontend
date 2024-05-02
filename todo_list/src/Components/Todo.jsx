import React, { useReducer, useState } from "react";
import { Table, Button, Form, Row, Col, Container } from "react-bootstrap";

const initialTodos = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { ...action.data, complete: false }];
    case "EDIT":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, ...action.data } : todo
      );
    case "DELETE":
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
};

const Todo = () => {
  const [input, setInput] = useState({ id: "", title: "" });
  const [state, dispatch] = useReducer(reducer, initialTodos);
  const [editId, setEditId] = useState(null);

  const handleInputChange = (key, value) => {
    setInput(prevState => ({ ...prevState, [key]: value }));
  };

  const handleAddTodo = () => {
    const existingTodo = state.find(todo => todo.id === input.id);
    if (!existingTodo) {
      dispatch({ type: "ADD", data: input });
      setInput({ id: "", title: "" });
    } else {
      alert("Todo with the same ID already exists.");
    }
  };

  const handleEditTodo = (id) => {
    const todoToEdit = state.find(todo => todo.id === id);
    setInput({ id: todoToEdit.id, title: todoToEdit.title });
    setEditId(id);
  };

  const handleSaveEdit = () => {
    dispatch({ type: "EDIT", id: editId, data: input });
    setInput({ id: "", title: "" });
    setEditId(null);
  };

  const handleDeleteTodo = (id) => {
    dispatch({ type: "DELETE", id });
  };

  return (
    <Container>
      <h1>Todo List</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.map(todo => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>
                {editId === todo.id ? (
                  <Button onClick={handleSaveEdit}>Save</Button>
                ) : (
                  <Button onClick={() => handleEditTodo(todo.id)}>Edit</Button>
                )}
                <Button variant="danger" onClick={() => handleDeleteTodo(todo.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Form>
        <Row>
          <Col>
            <Form.Control
              type="text"
              placeholder="ID"
              value={input.id}
              onChange={(e) => handleInputChange("id", e.target.value)}
            />
          </Col>
          <Col>
            <Form.Control
              type="text"
              placeholder="Title"
              value={input.title}
              onChange={(e) => handleInputChange("title", e.target.value)}
            />
          </Col>
          <Col>
            <Button onClick={editId ? handleSaveEdit : handleAddTodo}>
              {editId ? "Save Todo" : "Add Todo"}
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Todo;
