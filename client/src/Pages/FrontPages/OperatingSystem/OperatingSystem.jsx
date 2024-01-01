import { Link } from 'react-router-dom';
import Card from '../../../Components/Card';
import searchImg from '../../../images/Operating systems.png'
import HeadLine from '../../../Components/HeadLine';
import PageReplacement from '../../../images/PageReplacement.jpg'

const OperatingSystem = () => {

  const Data1 = {type:'Page Replacement', image:PageReplacement}
 
  return (
    <div className='flex flex-col justify-center items-center m-auto max-w-[1200px]'>
      <HeadLine content='Operating System'/>
      <div className='flex space-x-40'>
        <Link to='/operatingSystem/page-replacement'>
          <Card  Data={Data1}/>
        </Link>
      </div>
    </div>
  )
}

export default OperatingSystem;
