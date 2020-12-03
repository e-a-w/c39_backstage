import React from 'react';
import Draggable from 'react-draggable';
import { jsPDF } from 'jspdf';
import * as html2canvas from 'html2canvas';
import swal from 'sweetalert';
import '../../styles/index.css';

class Stage extends React.Component {
  constructor(props) {
    super(props);
  }

  generatePdf = () => {
    const newPlot = document.getElementById('theStage');
    html2canvas(newPlot).then((canvas) => {
      try {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', [216, 279]);
        pdf.text(`${this.props.eventData?.eventDate}`, 20, 20).setFontSize(28);
        pdf.text(`${this.props.eventData?.eventTitle}`, 20, 34);
        pdf.addImage(imgData, 'PNG', 0, 0, 175, 130);
        pdf.text("Venue's Equipment", 85, 120).setFontSize(16);
        pdf.text(
          this.props.items?.map((item) => item),
          20,
          135
        );
        pdf.text(
          this.props.descriptions?.map((item) => item),
          110,
          135
        );
        // pdf.text(
        //   this.props.quantities?.map((item) => item),
        //   90,
        //   180
        // );
        pdf.save(
          `${this.props.eventData?.eventTitle} / ${this.props.eventData?.eventDate}`
        );
      } catch (error) {
        console.log(error);
        swal('Operation Failed', { icon: 'error' });
      }
    });
  };
  state = {
    activeDrags: 0,
    deltaPosition: {
      x: 0,
      y: 0
    }
  };
  onStart = () => {
    this.setState({ activeDrags: ++this.state.activeDrags });
  };
  onStop = () => {
    this.setState({ activeDrags: --this.state.activeDrags });
  };
  render() {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    return (
      <div className="w-3/4 ">
        <div
          className="the-stage w-full relative rounded-md  flex flex-wrap items-start"
          id="theStage"
          style={{
            height: '36.25rem',
            backgroundColor: '#FFF7F1',
            border: '4px solid #A6271F',
            marginBottom: '0.25rem',
            marginTop: '5.6rem',
            top: '0'
          }}
        >
          {this.props.iconsForStage?.map((icon) => {
            return (
              <Draggable bounds="parent" {...dragHandlers}>
                <div
                  className="icon-on-stage hover: cursor-pointer"
                  style={{
                    backgroundImage: `url("${icon}")`,
                    height: `7.5rem`,
                    width: `7.5rem`,
                    backgroundSize: '100% 100%'
                  }}
                ></div>
              </Draggable>
            );
          })}
        </div>
        <button
          className="btn-3"
          onClick={this.generatePdf}
          style={{ position: 'relative', top: '45rem', right: '10rem' }}
        >
          Download PDF
        </button>
      </div>
    );
  }
}
export default Stage;
