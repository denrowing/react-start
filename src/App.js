import './App.css'
import User from './components/User'


export default function App() {
  return (
    <div className={'Users'}>
      <User id={1} name={'Leanne Graham'} username={'Bret'} email={'Sincere@april.biz'} address={''}
      phone={'1-770-736-8031 x56442'} website={'hildegard.org'} company={''}/>
        <hr/>
      <User id={2} name={'Ervin Howell'} username={'Antonette'} email={'Shanna@melissa.tv'} address={''}
      phone={'010-692-6593 x09125'} website={'anastasia.net'} company={''}/>
        <hr/>
    </div>
  );
}