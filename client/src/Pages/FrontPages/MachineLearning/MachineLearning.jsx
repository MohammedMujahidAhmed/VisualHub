import { Link } from 'react-router-dom';
import Card from '../../../Components/Card';
import searchImg from '../../../images/Operating systems.png'
import HeadLine from '../../../Components/HeadLine';
import Perceptron from '../../../images/Perceptron.jpg';

const MachineLearning = () => {

  const Data1 = {type:'Perceptron', image:Perceptron}
 
  return (
    <div className='flex flex-col justify-center items-center m-auto max-w-[1200px]'>
      <HeadLine content='Machine Learning'/>
      <div className='flex space-x-40'>
        <Link to='/machineLearning/perceptron'>
          <Card  Data={Data1}/>
        </Link>
      </div>
    </div>
  )
}

export default MachineLearning;
