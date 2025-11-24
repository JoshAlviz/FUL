import './App.css';
import MainContent from './components/MainContent'

function App() {
  return (
    <div className="tc">
      <div className="pv6 ph2 ph6-ns bg-washed-blue">
        <h1 className="f1 f-subheadline-l i">Don't be a fool. Be a <span className="logo-gradient">ful</span>.</h1>
      </div>
      <MainContent />
      <div className="pa5 bg-washed-red">
        <p className="f2 lh-copy measure center i dark-gray">"Be use<span className="logo-gradient">ful</span> for a beauti<span className="logo-gradient">ful</span>, more wonder<span className="logo-gradient">ful</span> world."</p>
      </div>
    </div>
  );
}

export default App;
