import {useState} from 'react'
import { Container,ButtonGroup,ToggleButton} from 'react-bootstrap';
import Cards from '../cards';

const Projects = () => {
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'همه', value: '1' },
    { name: 'اپلیکشن ها', value: '2' },
    { name: 'وب سایت ها', value: '3' },
    { name: 'سامانه ها', value: '4' }
  ];

return (
    <Container className='my-6 overflow-hidden'>
        <h1 className='text-center mb-5'>
        پروژه های موفق ما   
        </h1>
        {/* Buttons */}
      <div className="mx-auto d-flex justify-content-center">
        <ButtonGroup>
          
            {radios.map((radio, idx) => (
              <ToggleButton
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                className='rounded-2 mx-sm-2'
                variant="outline-primary"
                name="radio"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => setRadioValue(e.currentTarget.value)}
              >
                {radio.name}
              </ToggleButton>
            ))}
        </ButtonGroup>
      </div>
          <Cards value={radioValue} />
    </Container>
  )
}

export default Projects