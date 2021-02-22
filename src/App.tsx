import { Button } from './components/Button';
import { ExperienceBar } from './components/ExperienceBar';

import './styles/global.css';

function App() {
  return (
    <div className="container">
      {/* <Button color="red">
        button 1
      </Button> 
      <Button color="blue">
        button 2
      </Button> 
      <Button color="gray">
        button 3
      </Button>    */}
      
      <ExperienceBar />
    </div>
  );
}

export default App;
