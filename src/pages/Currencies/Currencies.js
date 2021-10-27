import axios from "axios";
import React from "react";
import { useState } from "react";


const Currencies = () => {

  const [valores,setValores] = useState("")
  const [valoresId,setvaloresId] = useState("")
  const [valoresLogoUrl,setvaloresLogoUrl] = useState("")
  const [valorDolar,setValorDolar] = useState(0)
  const [cantidadAc,setcantidadAc] = useState(1)


  const [cambiadorEstado, setCambiadorEstado] = useState ('')
 
  const llamadaApi = async (moneda) => {

    try {
      const response = await axios.get(
        `https://api.nomics.com/v1/currencies/ticker?ids=${moneda}&key=d760c91ea0e0a5adf1692276d9b7313d85275aad`
      );
      setValores (response.data[0].price)
      setvaloresId (response.data[0].id)
      setvaloresLogoUrl (response.data[0].logo_url)
      llamadaDolar()
    } catch (error) {
      alert(error);
    }
  };

  const llamadaDolar = async () => {
    try {
      const response = await axios.get(
        `https://dolarblue.herokuapp.com/api/dolar-blue`,{
          headers: {
            'Authorization': `Bearer 943f30310f51c578d85fbf41ec9d0511`
        }}
      );

      setValorDolar (response.data.data.venta)

    } catch (error) {
      alert(error);
    }
  };



const handleChangeValor = (e) => {
    /* console.log(e.target.value) */
    llamadaApi(e.target.value)
}

const handleChangeCantidad = (e) => {
  /* console.log(e.target.value) */
  /* (e.target.value < 1)? setcantidadAc(1):setcantidadAc(e.target.value) */
  if (e.target.value < 1) {setcantidadAc(1)} else {setcantidadAc(e.target.value)}
}

  return (
    <div>
      <h1>Elegí la Crypto-Moneda a cotizar</h1>
      <select onChange= {handleChangeValor}>
        <option value= 'BTC'>BTC</option>
        <option value= 'ETH'>ETH</option>
        <option value= 'SLP'>SLP</option>
        <option value= 'SHIB'>SHIB</option>
      </select>
      <input type="number" value={cantidadAc} onChange= {handleChangeCantidad} min="1"/>
      <p><img src={valoresLogoUrl} height ="32px" width="32px"/>{valoresId}: USD {valores}</p>
      <p>Dolar blue: {valorDolar}</p>
      <p>Precio en ARS: {valores * (valorDolar * cantidadAc)}</p>
    </div>
  );
};

export default Currencies;
