import { Blocks } from 'react-loader-spinner';

const LoadingSpinner = () => {
  const divStyle = {
    height: '50dvh',
    width: '100%',
    display: 'grid',
    placeContent: 'center',
  };
  return (
    <div style={divStyle}>
      <Blocks
        visible={true}
        height='80'
        width='80'
        ariaLabel='blocks-loading'
        wrapperStyle={{}}
        wrapperClass='blocks-wrapper'
      />
    </div>
  );
};
export default LoadingSpinner;
