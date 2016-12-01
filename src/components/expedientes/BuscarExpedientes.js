import React, { Component, PropTypes } from 'react';
import { Button, Card, Segment, Container, Grid, Menu } from 'semantic-ui-react';

import TablaExpedientes from './TablaExpedientes';

class FormBuscarExpedientes extends Component {
  render() {
    const { expedientes } = this.props;
    return (
      <Container fluid style={{padding: 10}}>
        <Grid stackable>
          <Grid.Column width={4}>
            <Card fluid>
              <Card.Content>
                <Card.Header>
                  Buscar por
                </Card.Header>
              </Card.Content>
              <Card.Content>
                <div>DATA FOR FIND HERE</div>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column width={11}>
            <TablaExpedientes expedientes={expedientes} />
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

FormBuscarExpedientes.propTypes = {
  expedientes: PropTypes.arrayOf(PropTypes.object),
};

export default FormBuscarExpedientes;
