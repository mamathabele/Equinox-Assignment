import React from "react";
import { Doughnut } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class ChartsPage2 extends React.Component {
  state = {
    dataDoughnut: {
      // labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
      datasets: [
        {
          data: [300, 100, 120],
          backgroundColor: ["blue", "red", "#FDB45C", "#949FB1", "#4D5360"],
        },
      ],
    },
  };

  render() {
    return (
      <MDBContainer>
        <Doughnut data={this.state.dataDoughnut} options={{ width: 500 }} />
      </MDBContainer>
    );
  }
}

export default ChartsPage2;
