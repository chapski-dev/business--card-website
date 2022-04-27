import ReactVivus from 'react-vivus';
import cursor from '../../pages/HomePage/img/SiteExamples/cursor.svg';

const CursorSvg = () => {

return <ReactVivus
  className='cursor'
  id="foo"
  option={{
    file: cursor,
    animTimingFunction: 'EASE',
    type: 'oneByOne',
  }}
  style={{ height: '240px', width: '550px' }}
/>
}
export default CursorSvg;