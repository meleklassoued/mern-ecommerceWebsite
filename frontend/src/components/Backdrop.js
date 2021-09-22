import "./Backdrop.css";

const Backdrop = ({ show, click }) => {
  return show && <div className='Backdrop' onClick={click}></div>;
};

export default Backdrop;
