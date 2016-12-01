import React, { PropTypes } from 'react';

import BuscarExpedientes from './BuscarExpedientes';

const expedientes =  [
    {
       "fechaUltimoMovimiento":"06\/02\/2012",
       "caratula":"TEST DATA STRING",
       "ubicacionActual":"TEST DATA STRINGTEST DATA STRINGTEST DATA STRINGTEST DATA STRING",
       "claveExpediente":"1111111"
    },
    {
       "fechaUltimoMovimiento":"27\/05\/1998",
       "caratula":"TEST DATA STRING TEST DATA STRING TEST DATA STRING TEST DATA STRING TEST DATA STRING TEST DATA STRING TEST DATA STRING TEST DATA STRING TEST DATA STRING",
       "ubicacionActual":"TEST DATA STRINGTEST DATA STRINGTEST DATA STRINGTEST DATA STRING",
       "claveExpediente":"11111111"
    },
    {
       "fechaUltimoMovimiento":"28\/03\/2011",
       "caratula":"TEST DATA STRINGTEST DATA STRINGTEST DATA STRINGTEST DATA STRINGTEST DATA STRINGTEST DATA STRINGTEST DATA STRING",
       "ubicacionActual":"TEST DATA STRING",
       "claveExpediente":"1111111111111"
    },
    {
       "fechaUltimoMovimiento":"09\/01\/2007",
       "caratula":"TEST DATA STRINGTEST DATA STRINGTEST DATA STRINGTEST DATA STRING",
       "ubicacionActual":"TEST DATA STRINGTEST DATA STRINGTEST DATA STRINGTEST DATA STRING",
       "claveExpediente":"1111111111"
    },
    {
       "fechaUltimoMovimiento":"22\/11\/2016",
       "caratula":"TEST DATA STRINGTEST DATA STRINGTEST DATA STRINGTEST DATA STRINGTEST DATA STRING",
       "ubicacionActual":"TEST DATA STRING",
       "claveExpediente":"1111111111"
    },
    {
       "fechaUltimoMovimiento":"22\/11\/2016",
       "caratula":"TEST DATA STRINGTEST DATA STRINGTEST DATA STRINGTEST DATA STRING",
       "ubicacionActual":"TEST DATA STRING",
       "claveExpediente":"1111111111"
    },
    {
       "fechaUltimoMovimiento":"22\/11\/2016",
       "base":"SERVER-CIVILES\\DEXTRACIVIL1NQ.NSF",
       "caratula":"BANCO PROVINCIA DEL NEUQUEN S.A. C\/ MU\u00D1OZ VICTOR NERIS S\/COBRO SUMARIO DE PESOS",
       "unid":"03257BD300506CC903257ED100427F5B",
       "ipServidor":"172.16.1.58",
       "ubicacionActual":"TEST DATA STRINGTEST DATA STRINGTEST DATA STRING",
       "claveExpediente":"11111111111"
    },
    {
       "fechaUltimoMovimiento":"21\/11\/2016",
       "caratula":"VINET CELESTINO C\/ PROVINCIA DEL NEUQUEN S\/DILIGENCIA PRELIMINAR",
       "ubicacionActual":"TEST DATA STRING",
       "claveExpediente":"111111111"
    },
    {
       "fechaUltimoMovimiento":"17\/11\/2016",
       "caratula":"TEST DATA STRINGTEST DATA STRINGTEST DATA STRINGTEST DATA STRINGTEST DATA STRINGTEST DATA STRING",
       "unid":"03257BD300506CC903257D1C00473E15",
       "ubicacionActual":"TEST DATA STRING",
       "claveExpediente":"11111111"
    },
    {
       "fechaUltimoMovimiento":"17\/11\/2016",
       "caratula":"TEST DATA STRINGTEST DATA STRINGTEST DATA STRING",
       "ubicacionActual":"TEST DATA STRING",
       "claveExpediente":"111111111"
    },
 ];

class ExpedientesManager extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <BuscarExpedientes
          expedientes={expedientes} />
      </div>
    );
  }
}

ExpedientesManager.propTypes = {
  expedientes: PropTypes.arrayOf(PropTypes.object),
};

export default ExpedientesManager;
