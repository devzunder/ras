import React from "react";
import { Form, Input, Scope } from "@rocketseat/unform";
import "../styles/New.css";
import { connect } from "react-redux";
import { handleAddProject } from "../actions/projects";
import Swal from "sweetalert2";

function New(props) {
  function handleSubmit(data) {
    const { dispatch } = props;
    try {
      dispatch(handleAddProject(data));
    } catch (err) {
      console.warn("Deu erro ", err);
    } finally {
      Swal.fire({
        position: "top-end",
        type: "success",
        title: "Seu dimensionamento foi gerado com sucesso",
        showConfirmButton: false,
        timer: 1500
      });
    }
    setTimeout(function() {
      props.history.push(`/`);
    }, 1500);
  }

  return (
    <div className="container">
      <h3>Dimensione o seu SRA</h3>
      <Form className="Form" onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome do Sistema" type="text" />
        <Scope path="data">
          <Input name="tanques" placeholder="Nº de Tanques" />
          <Input name="volume" placeholder="Volume Unitário (m³)" />
          <Input name="densidade" placeholder="Densidade (kg/m³)" />
          <Input name="peso" placeholder="Peso Final (kg)" />
          <Input name="taxa" placeholder="Taxa de Arraçoamento ( % )" />
          <Input name="ca" placeholder="Conversão Alimentar ( x:1 )" />
          <Input name="recirc" placeholder="Taxa de Recirculação ( x/hora )" />
        </Scope>
        <button type="submit" className="btn">
          Dimensionar
        </button>
      </Form>
    </div>
  );
}

export default connect()(New);
