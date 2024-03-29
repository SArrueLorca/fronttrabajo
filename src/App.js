
import './App.css';
import CanvasJSReact from '@canvasjs/react-charts';
import axios from "axios";
import { useState,useEffect } from "react";

async function mostrardatos(
  anio2018, setAnio2018,
  anio2019, setAnio2019,
  anio2020, setAnio2020,
  anio2021, setAnio2021,
  anio2022, setAnio2022,
  anio2023, setAnio2023,
  anio2024, setAnio2024,
  resp1, setresp1

) {
  let dato;

  await axios
    .get("http://127.0.0.1:8000/getconsultas/")
    .then((resp) => {
      console.log(resp)

      setAnio2018(resp.data[0].Total)
      setAnio2019(resp.data[1].Total)
      setAnio2020(resp.data[2].Total)
      setAnio2021(resp.data[3].Total)
      setAnio2022(resp.data[4].Total)
      setAnio2023(resp.data[5].Total)
      setAnio2024(resp.data[6].Total)

      /*
      for (let i = 0; i < resp.data.listlogin.length; i++) {
        let info = resp.data.listlogin[i].email;

        if (info === email) {
          console.log(info);
          dato = resp.data.tempPass;
          localStorage.setItem("tempPass", JSON.stringify(dato));

          break;
        }
      }
      */
    })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
    });

  return dato;
}

function App() {

  const [anio2018, setAnio2018] = useState(0);
  const [anio2019, setAnio2019] = useState(0);
  const [anio2020, setAnio2020] = useState(0);
  const [anio2021, setAnio2021] = useState(0);
  const [anio2022, setAnio2022] = useState(0);
  const [anio2023, setAnio2023] = useState(0);
  const [anio2024, setAnio2024] = useState(0);
  const [resp1, setresp1] = useState("");

  

  useEffect(() => {

    mostrardatos(
      anio2018, setAnio2018,
      anio2019, setAnio2019,
      anio2020, setAnio2020,
      anio2021, setAnio2021,
      anio2022, setAnio2022,
      anio2023, setAnio2023,
      anio2024, setAnio2024,
      resp1, setresp1
    );

  }, []);

  var CanvasJSChart = CanvasJSReact.CanvasJSChart;

  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2", //"light1", "dark1", "dark2"
    title:{
      text: "Consultas totales del hospital en mes de febrero"
    },
    axisY: {
      includeZero: true
    },
    data: [{
      type: "column", //change type to bar, line, area, pie, etc
      //indexLabel: "{y}", //Shows y value on all Data Points
      indexLabelFontColor: "#5A5757",
      indexLabelPlacement: "outside",
      dataPoints: [
        { label: "2018", y: anio2018 },
        { label: "2019", y: anio2019 },
        { label: "2020", y: anio2020 },
        { label: "2021", y: anio2021 },
        { label: "2022", y: anio2022 },
        { label: "2023", y: anio2023 },
        { label: "2024", y: anio2024 }

      ]
    }]
  }

  return (
    <div style={{backgroundColor: "lightblue"}}>
      {resp1}
			<CanvasJSChart options = {options} />

    </div>
  );
}

export default App;
