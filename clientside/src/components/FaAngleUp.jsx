import React from 'react'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FaAngleUp = () => {
  return (
	<>
      <a href="#" className="back-to-top"><i><FontAwesomeIcon icon={faAngleUp}/></i></a>
	</>
  )
}

export default FaAngleUp;
