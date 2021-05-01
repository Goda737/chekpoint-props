
import './App.css';
import Profil from './Profil/Profil';

const App = () => {
  const fullname = 'Goda Ra'
    const bio = 'motivé'
    const profession = 'Developpeur'

    const sayhello = () => {
      alert(fullname)
    }
  return (
    <>
    <Profil
            sayhello={sayhello}
           fullname={fullname}
            bio={bio}
            profession={profession}/>
    </>
  );
}

export default App;
