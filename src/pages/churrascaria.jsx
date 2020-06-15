import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../layouts/Page/index";
import SEO from "../components/Seo/index";
import FormReserva from "../components/Reserva/index";
import PageTitle from "../components/Page-title/index";
import {
  FuncionamentoWrapper,
  FeaturesWrapper,
  FeatureInfo,
} from "../styles/pages/churrascaria";

// imgs
import CapaChurrascaria from "../assets/capa-churrascaria";
import FooterChurrascaria from "../assets/footer-churrascaria";
import Card1Img from "../assets/card-churrascaria1";
import Card2Img from "../assets/card-churrascaria2";
import Card3Img from "../assets/card-churrascaria3";
import FuncionamentoImg from "../assets/funcionamento";

const Churrascaria = () => (
  <Layout>
    <SEO title="Churrascaria" />
    <CapaChurrascaria />

    <div>
      <Container>
        <Row>
          <Col xs="12">
            <PageTitle
              title="Churrascaria"
              subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to"
            />
          </Col>
        </Row>
      </Container>
    </div>

    <FeaturesWrapper>
      <Container>
        <Row>
          <Col xs="12" sm="4">
            <Card1Img />
            <FeatureInfo>
              <h3>Som ao vivo</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has
              </p>
            </FeatureInfo>
          </Col>
          <Col xs="12" sm="4">
            <Card2Img />
            <FeatureInfo>
              <h3>Rodizio</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has
              </p>
            </FeatureInfo>
          </Col>
          <Col xs="12" sm="4">
            <Card3Img />
            <FeatureInfo>
              <h3>Vinhos</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has
              </p>
            </FeatureInfo>
          </Col>
        </Row>
      </Container>
    </FeaturesWrapper>

    <FuncionamentoWrapper>
      <Container>
        <Row>
          <Col xs="12">
            <h2>Funcionamento</h2>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6">
            <h3>Horarios</h3>
            <ul>
              <li>- Dias da semana: Das 7h ás 23h</li>
              <li>- Sabado, domingo e feriados. Das 8h às 24h</li>
            </ul>
          </Col>
          <Col xs="12" sm="6">
            <h3>Onde Estamos</h3>
            <ul>
              <li>- Rua Oswaldo Cruz, Rio Vermelho</li>
              <li>- Salvador, Bahia, Brasil</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <FuncionamentoImg />
          </Col>
        </Row>
      </Container>
    </FuncionamentoWrapper>

    <FormReserva />

    <FooterChurrascaria />
  </Layout>
);

export default Churrascaria;