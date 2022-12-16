import './App.css';
import  Testimony  from './components/testimony';

function App() {
  return (
    <div className="App">
      <div className='container-main'>
        <h1>Testimonios</h1>
        <Testimony 
        images = 'img1'
        name = 'Duvan'
        country='Colombia'
        job='Desarrollador de sofware'
        business='zibur'
        testimony= 'Traduce texto y archivos completos de manera instantánea. Traducciones precisas para particulares (un solo usuario) y equipos de trabajo. '
        />
        <Testimony 
        images = 'img2'
        name = 'Stiven'
        country='Colombia'
        job='Desarrollador de sofware'
        business='zibur'
        testimony= 'TraducLorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texte texto y archivos completos de manera instantánea. Traducciones precisas para particulares (un solo usuario) y equipos de trabajo. '
        />
      </div>   
    </div>
  );
}
export default App;
