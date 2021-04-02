import React from "react";

class medical extends React.Component {
  constructor() {
    super();
    this.state = {
        filter:"",
      data: [
        {
          MedName: "Benozoyl",
          Available:"Yes",
          Mfg: "2018",
          Exp: "2020",
        },
        {
          MedName: "Sunscream",
          Available:"No",
          Arriving:"1 week",
          Mfg: "2019",
          Exp: "2022",
        },
        {
          MedName: "Nexium",
          Available:"Yes",
          Mfg: "2019",
          Exp: "2022",
        },
        {
          MedName: "Lipitor",
          Available:"Yes",
          Mfg: "2019",
          Exp: "2022",
        },
        {
          MedName: "Crestor",
          Available:"Yes",
          Mfg: "2017",
          Exp: "2021",
        },
        {
          MedName: "Seroquel",
          Available:"Yes",
          Mfg: "2017",
          Exp: "2021",
        },
        {
          MedName: "Singulair",
          Available:"No",
          Arriving:"3 Days",
          Mfg: "2017",
          Exp: "2021",
        },
        {
          MedName: "Epogen",
          Available:"Yes",
          Mfg: "2017",
          Exp: "2021",
        },
        {
          MedName: "Advair Diskus",
          Available:"No",
          Arriving:"2 week",
          Mfg: "2017",
          Exp: "2021",
        },
        {
          MedName: "Abilify",
          Available:"No",
          Arriving:"1 Month",
          Mfg: "2017",
          Exp: "2021",
        },
        {
          MedName: "Plavix",
          Available:"Yes",
          Mfg: "2017",
          Exp: "2021",
        },
        {
          MedName: "Lactose",
          Available:"No",
          Arriving:"10 Days",
          Mfg: "2017",
          Exp: "2021",
        },
        {
          MedName: "Dygine",
          Available:"Yes",
          Mfg: "2015",
          Exp: "2023",
        },
        {
          MedName: "Dragodin",
          Available:"Yes",
          Mfg: "2013",
          Exp: "2014",
        },
        {
          MedName: "Crocin",
          Available:"No",
          Arriving:"4 Days",
          Mfg: "2021",
          Exp: "2024",

        },
      ],
    };
  }

  searchText(e){
      this.setState({
          filter:e.target.value
      })
  }



  render() {
let { filter,data}=this.state;

let DataSearch=data.filter(item=>{
    return Object.keys(item).some(key=>
        item[key].toLowerCase().includes(filter.toLowerCase())
    )
})

    return (
      <>
        <center>
          <h1>Medical Store</h1>
          <hr />
          
          <div className="Search">
          Search:<input type="text" value={filter} placeholder="Serach......" onChange={this.searchText.bind(this)} />
          </div>
          <hr />
          <table border="1">
            <tr>
              <th>MedName</th>
              <th>Available</th>
              <th>Arriving</th>
              <th>Mfg</th>
              <th>Exp</th>
            </tr>
            {
                (DataSearch.map(item => 
              <tr>
                <td>{item.MedName}</td>
                <td>{item.Available}</td>
                <td>{item.Arriving}</td>
                <td>{item.Mfg}</td>
                <td>{item.Exp}</td>
              </tr>
            ))}
          </table>
        </center>
      </>
    );
  }
}
export default medical;
