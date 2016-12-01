import React, { PropTypes, Component } from 'react';
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
      ]
    };

    this.tableHeader = null;
    this.tableBody = null;
    this.height = window.innerHeight;
  }

  componentDidMount() {
    this.forceUpdate();
  }

  abrirExpediente(id) {
  }

  render() {
    const { columns } = this.state;
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
                width: "100%",
                minWidt: "100%",
                maxWidth: "100%"
              }}
              ref={tableHeader => {
                this.tableHeader = tableHeader && tableHeader.getRef();
              }}
              tableBody={this.tableBody}
            />

            <Virtualized.Body
              rows={resolvedRows}
              rowKey="unid"
              style={{
                width: "100%",
                minWidth: "100%",
                maxWidth: "100%"
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
