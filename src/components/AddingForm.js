import React, { useState } from "react"
import { Fragment } from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { ratpImgs, transportTypes } from "../actions/constantes"
import { addStation } from "../actions/ongletsAction"

const Form = styled.form`
  border: 3px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
const MoyTransport = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  width: 65%;
  > * {
    flex: 1 1 33%;
  }
`
const InputRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1%;
  > input {
    margin-right: 20%;
    margin-left: 4%;
    width: 40%;
    text-align: center;
  }
`

const AddingForm = (props) => {
  const initItem = {
    transportTypes: "",
    stationName: "",
    code: "",
  }
  const [item, setItem] = useState(initItem)

  function handleChange(event) {
    const e = event.target
    let updated = { ...item }
    updated[e.name] = e.value
    setItem(updated)
  }


  return (
    <Fragment>
      <h2>AddingForm</h2>
      <br />
      <Form>
        <MoyTransport>
          {transportTypes.map((e, i) => (
            <div className="form-check form-check-inline" key={i}>
              <input
                className="form-check-input"
                type="radio"
                name="transportTypes"
                id={"check" + i}
                value={e}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor={"check" + i}>
                {e}
              </label>
            </div>
          ))}
        </MoyTransport>
        {item.transportTypes != "Vélib" ? (
          <InputRow>
            <label htmlFor="code">Ligne code :</label>
            <input
              type="tel"
              name="code"
              placeholder="7"
              value={item.code}
              onChange={handleChange}
            />
          </InputRow>
        ) : null}

        <InputRow>
          <label htmlFor="stationName">Station Name :</label>
          <input
            type="text"
            name="stationName"
            placeholder="chatelet"
            value={item.stationName}
            onChange={handleChange}
          />
        </InputRow>
      </Form>
      <button onClick={() => props.addStation(item, props.iOnglet, props.iPage)}> Submit</button>
    </Fragment>
  )
}

// if (!q.includes("velib")) {
//           let v1 = q.replace(/^(\w+) (.+) (.)$/, "$1")
//           let type = transportTypes[v1[0]]
//           let code = v1.slice(1)
//           let imgUrl = ratpImgs[v1[0]] + code + ".svg"
//           let depart = q.replace(/^(\w+) (.+) (.)$/, "$2")
//           let way = q.replace(/^(\w+) (.+) (.)$/, "$3").toUpperCase()
//           let query = `https://api-ratp.pierre-grimaud.fr/v4/schedules/${type}/${code}/${depart.replace(
//             / /g,
//             "%20"
//           )}/${way}`
//           return {
//             depart,
//             imgUrl,
//             query,
//           }
//         } else {
//           let s = q.split(/(velib [0-9]+ )/)
//           let depart = s[2].trim()
//           let query = s[1].replace("velib", "").trim()
//           return {
//             depart,
//             query,
//           }
//         }

const mapStateToProps = (state) => ({
  iPage: state.onglets.currentPage,
  iOnglet: state.onglets.currentOnglet,
})


export default connect(mapStateToProps, {addStation})(AddingForm)