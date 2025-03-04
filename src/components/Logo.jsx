import { FaBoxes } from 'react-icons/fa';

const Logo = ({ className }) => {
  return (
    <div className={className}>
      <FaBoxes style={{ width: '50px', height: '50px' }} />
    </div>
  );
};

export default Logo;
