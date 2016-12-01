import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';

import * as Sticky from 'reactabular-sticky';
import * as Virtualized from 'reactabular-virtualized';
import * as Table from 'reactabular-table';
import * as resolve from 'table-resolver';

import { fechaReactable } from '../common/utiles';

class TablaExpedientes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        {
          property: 'claveExpediente',
          header: {
            label: 'Expediente',
          },
          props: {
            style: {
              width: "20%",
              minWidt: "20%",
              maxWidth: "20%"
            }
          }
        },
        {
          property: 'caratula',
          header: {
            label: 'Caratula',
        },
          props: {
            style: {
              width: "40%",
              minWidt: "40%",
              maxWidth: "40%"
            }
          }
        },
        {
          property: 'ubicacionActual',
          header: {
            label: 'Ubicación Actual',
          },
          props: {
            style: {
              width: "30%",
              minWidt: "30%",
              maxWidth: "30%"
            }
          }
        },
        {
          property: 'fechaUltimoMovimiento',
          header: {
            label: 'Ultimo Mov.',
          },
          props: {
            style: {
              width: "10%",
              minWidt: "10%",
              maxWidth: "10%"
            }
          },
          cell: {
            format:
              (fechaUltimoMovimiento) => {
                if (fechaUltimoMovimiento !== '') {
                  const fecha = new Date(fechaReactable(fechaUltimoMovimiento));
                  return fecha.toLocaleDateString();
                }
                return '';
              }
          },
        },
      ],
      ancho: 0
    };

    this.tableHeader = null;
    this.tableBody = null;
    this.height = window.innerHeight;
    this.resizeHandler = this.resizeHandler.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.resizeHandler);
    this.resizeHandler();
    // Force update necesario por las refs en el Header/Body.
    // Al momento se encuentra en desarrollo en reactabular para evitar esto.
    this.forceUpdate();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeHandler);
  }

  resizeHandler(event) {
    const stateCopy = Object.assign({}, this.state);
    const ancho = ReactDOM.findDOMNode(this).offsetWidth;
    const porc = {
      p10: ancho * 10 / 100,
      p20: ancho * 20 / 100,
      p30: ancho * 30 / 100,
      p40: ancho * 40 / 100
    };

    stateCopy.ancho = ancho;
    stateCopy.columns[0].props.style = {width: porc.p20, minWidth: porc.p20, maxWidth: porc.p20};
    stateCopy.columns[1].props.style = {width: porc.p40, minWidth: porc.p40, maxWidth: porc.p40};
    stateCopy.columns[2].props.style = {width: porc.p30, minWidth: porc.p30, maxWidth: porc.p30};
    stateCopy.columns[3].props.style = {width: porc.p10, minWidth: porc.p10, maxWidth: porc.p10};

    this.setState(stateCopy);
  }

  render() {
    const { columns, ancho } = this.state;
    const { expedientes } = this.props;
    const resolvedRows = resolve.resolve({ columns, method: resolve.index })(expedientes);

    return (
      <div className="container">
          <Table.Provider
            columns={columns}
            className="ui celled striped table"
            components={{
              body: {
                wrapper: Virtualized.BodyWrapper,
                row: Virtualized.BodyRow
              }
            }}>

            <Sticky.Header
              style={{
                width: {ancho}
              }}
              ref={tableHeader => {
                this.tableHeader = tableHeader && tableHeader.getRef();
              }}
              tableBody={this.tableBody}
            />

            <Virtualized.Body
              rows={resolvedRows}
              rowKey="claveExpediente"
              style={{
                width: {ancho}
              }}
              height={this.height}
              ref={tableBody => {
                this.tableBody = tableBody && tableBody.getRef();
              }}
              tableHeader={this.tableHeader}
            />
          </Table.Provider>
      </div>
    );
  }
}

TablaExpedientes.propTypes = {
  expedientes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TablaExpedientes;
